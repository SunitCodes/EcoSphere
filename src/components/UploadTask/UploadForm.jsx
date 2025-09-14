import { FilePlus } from "lucide-react";
import React, { useState } from "react";
import { UserPlus, Send, ClipboardCheck } from "lucide-react";
import { useTasks } from "../../context/TasksContext";

const UploadForm = () => {
  const { addTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
    tags: "",
    requirements: "",
    points: "",
    action: "Join Task",
    participants: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...task,
      id: Date.now(),
      tags: task.tags.split(",").map((t) => t.trim()),
      requirements: task.requirements.split(",").map((r) => r.trim()),
      points: Number(task.points),
      participants: Number(task.participants),
      actionIcon:
        task.action === "Join Task"
          ? <UserPlus size={14} />
          : task.action === "Submit Evidence"
          ? <Send size={14} />
          : <ClipboardCheck size={14} />,
    };

    addTask(newTask);

    setTask({
      title: "",
      description: "",
      tags: "",
      requirements: "",
      points: "",
      action: "Join Task",
      participants: "",
      deadline: "",
    });
  };


return (
  <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl shadow-lg space-y-6 max-w-xl mx-auto">
    <div className="flex items-center space-x-2">
      <FilePlus className="w-6 h-6 text-green-600" />
      <h2 className="text-xl font-bold text-gray-800">Upload New Task</h2>
    </div>

    <input
      type="text"
      name="title"
      value={task.title}
      onChange={handleChange}
      placeholder="Task Title"
      required
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
    />

    <textarea
      name="description"
      value={task.description}
      onChange={handleChange}
      placeholder="Task Description"
      required
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none h-24"
    />

    <input
      type="text"
      name="tags"
      value={task.tags}
      onChange={handleChange}
      placeholder="Tags (comma separated)"
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
    />

    <input
      type="text"
      name="requirements"
      value={task.requirements}
      onChange={handleChange}
      placeholder="Requirements (comma separated)"
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="number"
        name="points"
        value={task.points}
        onChange={handleChange}
        placeholder="Eco Points"
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
      />

      <input
        type="number"
        name="participants"
        value={task.participants}
        onChange={handleChange}
        placeholder="Participants"
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
      />
    </div>

    <input
      type="text"
      name="deadline"
      value={task.deadline}
      onChange={handleChange}
      placeholder="Deadline"
      required
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
    />

    <select
      name="action"
      value={task.action}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
    >
      <option value="Join Task">Join Task</option>
      <option value="Submit Evidence">Submit Evidence</option>
      <option value="Completed">Completed</option>
    </select>

    <button
      type="submit"
      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
    >
      <FilePlus className="w-5 h-5" />
      Upload Task
    </button>
  </form>
);

};

export default UploadForm;
