import React, { useState } from "react";
import { UserPlus, Send, ClipboardCheck } from "lucide-react";

const UploadForm = ({ onUpload }) => {
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
      id: Date.now(), // unique ID
      tags: task.tags.split(",").map((t) => t.trim()),
      requirements: task.requirements.split(",").map((r) => r.trim()),
      points: Number(task.points),
      participants: Number(task.participants),
      actionIcon:
        task.action === "Join Task" ? <UserPlus size={14} /> :
        task.action === "Submit Evidence" ? <Send size={14} /> :
        <ClipboardCheck size={14} />,
    };

    onUpload(newTask);

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
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-lg font-semibold">Upload New Task</h2>

      <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Title" required className="w-full border rounded p-2" />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" required className="w-full border rounded p-2" />
      <input type="text" name="tags" value={task.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="w-full border rounded p-2" />
      <input type="text" name="requirements" value={task.requirements} onChange={handleChange} placeholder="Requirements (comma separated)" className="w-full border rounded p-2" />
      <input type="number" name="points" value={task.points} onChange={handleChange} placeholder="Eco Points" required className="w-full border rounded p-2" />
      <input type="number" name="participants" value={task.participants} onChange={handleChange} placeholder="Participants" required className="w-full border rounded p-2" />
      <input type="date" name="deadline" value={task.deadline} onChange={handleChange} required className="w-full border rounded p-2" />

      <select name="action" value={task.action} onChange={handleChange} className="w-full border rounded p-2">
        <option value="Join Task">Join Task</option>
        <option value="Submit Evidence">Submit Evidence</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">Upload Task</button>
    </form>
  );
};

export default UploadForm;
