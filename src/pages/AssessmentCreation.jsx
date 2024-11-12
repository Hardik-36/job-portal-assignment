import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getJob } from "../data/fetchData";
import { Button, Typography, List, ListItem } from "@mui/material";
import AddModal from "../utils/AddModals";

const AssessmentCreation = () => {
  const { jobId } = useParams();
  const job = getJob(jobId);
  const [assessment, setAssessment] = useState(job.assessment || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddQuestion = (newQuestion) => {
    const formattedQuestion = {
      ...newQuestion,
      options:
        typeof newQuestion.options === "string"
          ? newQuestion.options.split(",").map((option) => option.trim())
          : newQuestion.options,
    };
    job.assessment = [...assessment, formattedQuestion];
    setAssessment(job.assessment);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Assessment for {job.title}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Question
      </Button>
      <List>
        {assessment.map((question, index) => (
          <ListItem key={index} style={{ borderBottom: "1px solid #eee" }}>
            <Typography variant="h6">{question.question}</Typography>
            <Typography variant="body2">
              Options: {question.options.join(", ")}
            </Typography>
            <Typography variant="caption">Answer: {question.answer}</Typography>
          </ListItem>
        ))}
      </List>

      {/* Add Question Modal */}
      <AddModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddQuestion}
        fields={[
          { name: "question", label: "Question" },
          { name: "options", label: "Options (comma-separated)" },
          { name: "answer", label: "Answer" },
        ]}
        title="Add New Question"
      />
    </div>
  );
};

export default AssessmentCreation;
