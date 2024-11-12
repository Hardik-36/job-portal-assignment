import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CandidateDetails from "./pages/CandidateDetails";
import AssessmentCreation from "./pages/AssessmentCreation";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="candidate-details/:jobId" element={<CandidateDetails />} />
        <Route
          path="assessment-creation/:jobId"
          element={<AssessmentCreation />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
