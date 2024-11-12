import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography, List, ListItem } from "@mui/material";
import AddModal from "../utils/AddModals";
import { getJob, updateJob } from "../data/fetchData";

const CandidateDetails = () => {
  const { jobId } = useParams();
  const job = getJob(jobId);
  const [candidates, setCandidates] = useState(job.candidates || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCandidate = (newCandidate) => {
    console.log("old job:", job);
    job.candidates = [
      ...candidates,
      { ...newCandidate, id: candidates.length + 1 },
    ];
    console.log("new job:", job);
    updateJob(job);
    setCandidates([
      ...candidates,
      { ...newCandidate, id: candidates.length + 1 },
    ]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Candidates for {job.title}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Candidate
      </Button>
      <List>
        {candidates.map((candidate) => (
          <ListItem
            key={candidate.id}
            style={{ borderBottom: "1px solid #eee" }}
          >
            <Typography variant="h6">{candidate.name}</Typography>
            <Typography variant="body2">
              Application Date: {candidate.applicationDate}
            </Typography>
            <Typography variant="caption">
              Status: {candidate.status}
            </Typography>
          </ListItem>
        ))}
      </List>

      {/* Add Candidate Modal */}
      <AddModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCandidate}
        fields={[
          { name: "name", label: "Candidate Name" },
          { name: "resume", label: "Resume Link" },
          { name: "applicationDate", label: "Application Date" },
          { name: "status", label: "Status" },
        ]}
        title="Add New Candidate"
      />
    </div>
  );
};

export default CandidateDetails;
