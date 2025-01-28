import React, { useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [rollNo, setRollNo] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/student/login", { rollNo, dob });
      if (response.data.success) {
        navigate(`/student/view/${rollNo}`);
      } else {
        alert("Invalid Roll Number or Date of Birth.");
      }
    } catch (error) {
      alert("Login failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <h1 className="text-2xl font-bold mb-5">Student Login</h1>
      <div className="mb-4">
        <label>Roll Number:</label>
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          className="p-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
        Login
      </button>
    </form>
  );
};

export default StudentLogin;
