export function getJob(jobId) {
  const job = getJobs().find((job) => job.id === parseInt(jobId));

  return job ? [job] : [];
}

export function getJobs() {
  return JSON.parse(localStorage.getItem("jobs")) || [];
}

export function addJob(jobs, newJob) {
  const newJobs = [
    ...jobs,
    {
      ...newJob,
      id: jobs.length + 1,
      candidatesApplied: 0,
      candidates: [],
      assessment: [],
    },
  ];
  localStorage.setItem("jobs", JSON.stringify(newJobs));

  return newJobs;
}

export function updateJob(newJob) {
  const newJobs = getJobs().map((job) => (job.id !== newJob.id ? job : newJob));
  localStorage.setItem("jobs", JSON.stringify(newJobs));
}
