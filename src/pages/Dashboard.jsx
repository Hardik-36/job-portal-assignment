import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, List, ListItem, Typography } from "@mui/material";
import AddModal from "../utils/AddModals";
import { getJobs, addJob } from "../data/fetchData";

const Dashboard = () => {
  const [jobs, setJobs] = useState(getJobs());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openJobDetails = (jobId) => {
    navigate(`/candidate-details/${jobId}`);
  };

  const handleAddJob = (newJob) => {
    addJob(jobs, newJob);
    setJobs(getJobs());
    console.log(jobs);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Job Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Job
      </Button>
      <List>
        {jobs.map((job) => (
          <ListItem
            key={job.id}
            onClick={() => openJobDetails(job.id)}
            style={{ borderBottom: "1px solid #eee" }}
          >
            <Typography variant="h6">{job.title}</Typography>
            <Typography variant="body2">{job.description}</Typography>
            <Typography variant="caption">
              Applied Candidates: {job.candidatesApplied}
            </Typography>
            <br />
            <Link to={`assessment-creation/${job.id}`}>Create Assessment</Link>
            <Link to={`candidate-details/${job.id}`}>View Candidates</Link>
          </ListItem>
        ))}
      </List>

      {/* Add Job Modal */}
      <AddModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddJob}
        fields={[
          { name: "title", label: "Job Title" },
          { name: "description", label: "Job Description" },
        ]}
        title="Add New Job"
      />
    </div>
  );
};

export default Dashboard;
