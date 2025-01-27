import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import StudentView from "./components/StudentView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome! Please select Admin or Student.</h1>} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/view/:rollNo" element={<StudentView />} />
      </Routes>
    </Router>
  );
};

export default App;
