import React, { useState } from "react";
import { CheckCircle2, XCircle, ClipboardCheck, User2 } from "lucide-react";

const ReviewTask = () => {
  // Dummy submitted tasks
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      studentName: "Aarav Sharma",
      studentClass: "Class 8A",
      title: "Plant 5 Trees in Community",
      description: "Students must plant 5 trees and submit photo evidence.",
      tags: ["Environment", "Trees", "Community"],
      requirements: ["Plant trees", "Take photo", "Submit evidence"],
      points: 205,
      participants: 100,
      deadline: "2025-09-20",
      action: "Submit Evidence",
    },
    {
      id: 2,
      studentName: "Priya Singh",
      studentClass: "Class 9B",
      title: "Clean Nearby Lake",
      description: "Participate in lake cleaning activity with your team.",
      tags: ["Cleanup", "Water", "Community"],
      requirements: ["Collect waste", "Dispose properly", "Upload report"],
      points: 300,
      participants: 15,
      deadline: "2025-09-25",
      action: "Submit Evidence",
    },
        {
      id: 3,
      studentName: "Rohan Verma",
      studentClass: "Class 10C",
      title: "Recycle Paper Waste",
      description: "Collect and recycle at least 2kg of paper waste.",
      tags: ["Recycle", "Paper", "Sustainability"],
      requirements: ["Collect paper", "Recycle", "Upload receipt"],
      points: 150,
      participants: 8,
      deadline: "2025-09-22",
      action: "Submit Evidence",
    },
    {
      id: 4,
      studentName: "Sneha Das",
      studentClass: "Class 7A",
      title: "Energy Saving Week",
      description: "Track and reduce electricity usage for 1 week.",
      tags: ["Energy", "Electricity", "Conservation"],
      requirements: ["Log daily usage", "Submit report"],
      points: 125,
      participants: 12,
      deadline: "2025-09-28",
      action: "Submit Evidence",
    },
    {
      id: 5,
      studentName: "Aditya Kumar",
      studentClass: "Class 9C",
      title: "Plastic-Free School",
      description: "Promote using alternatives to plastic in school canteen.",
      tags: ["Plastic", "Awareness", "Eco-friendly"],
      requirements: ["Poster design", "Awareness campaign"],
      points: 160,
      participants: 20,
      deadline: "2025-09-30",
      action: "Submit Evidence",
    },
    {
      id: 6,
      studentName: "Meera Iyer",
      studentClass: "Class 8B",
      title: "Water Conservation Drive",
      description: "Create awareness posters about saving water.",
      tags: ["Water", "Awareness", "Campaign"],
      requirements: ["Design poster", "Submit photos"],
      points: 100,
      participants: 9,
      deadline: "2025-09-21",
      action: "Submit Evidence",
    },
  ]);

  const handleReview = (id, status) => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === id ? { ...sub, reviewStatus: status } : sub
      )
    );
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <ClipboardCheck className="w-6 h-6 text-green-600" />
        Review Submitted Tasks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {submissions.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4"
          >
            {/* Student Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User2 className="w-5 h-5 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {task.studentName}
                  </h3>
                  <p className="text-sm text-gray-500">{task.studentClass}</p>
                </div>
              </div>
              {task.reviewStatus && (
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    task.reviewStatus === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {task.reviewStatus}
                </span>
              )}
            </div>

            <div className="w-full">
              <h4 className="text-lg font-bold text-gray-700 text-left block w-full">
                {task.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1 text-left">{task.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {task.tags.map((tag, idx) => (
                  <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
            </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>
                <span className="font-semibold">Requirements:</span>{" "}
                {task.requirements.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Eco Points:</span> {task.points}
              </p>
              <p>
                <span className="font-semibold">Participants:</span>{" "}
                {task.participants}
              </p>
              <p>
                <span className="font-semibold">Deadline:</span> {task.deadline}
              </p>
            </div>

            {/* Review Actions */}
            <div className="flex gap-4 pt-1 flex-wrap">
              <button
                onClick={() => alert(`Checking evidence for ${task.studentName}`)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                <ClipboardCheck size={16} />
                Check Evidence
              </button>

              <button
                onClick={() => handleReview(task.id, "Approved")}
                className="flex items-center gap-2 px-4 py-2 bg-green-400 text-white rounded-lg shadow hover:bg-green-700 transition"
              >
                <CheckCircle2 size={16} />
                Approve
              </button>

              <button
                onClick={() => handleReview(task.id, "Rejected")}
                className="flex items-center gap-2 px-4 py-2 bg-red-400 text-white rounded-lg shadow hover:bg-red-700 transition"
              >
                <XCircle size={16} />
                Reject
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewTask;
