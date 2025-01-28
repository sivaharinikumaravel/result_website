import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">
        Welcome! Please select Admin or Student.
      </h1>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/admin/login")}
          className="p-4 bg-blue-500 text-white rounded"
        >
          Admin
        </button>
        <button
          onClick={() => navigate("/student/login")}
          className="p-4 bg-green-500 text-white rounded"
        >
          Student
        </button>
      </div>
    </div>
  );
};

export default Home;
