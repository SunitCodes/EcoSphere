// context/TasksContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const TasksContext = createContext();

const defaultTasks = [
  {
    id: 1,
    tags: ["Easy", "Conservation"],
    title: "Tree Plantation Drive",
    description:
      "Each tree planted can absorb 22kg of CO₂ annually and provide habitat for local wildlife.",
    requirements: [
      "Bring gardening gloves and water bottle",
      "Wear comfortable outdoor clothing",
      "+2 more requirements",
    ],
    points: 150,
    action: "Join Task",
    participants: 120,
    deadline: "March 25, 2024",
  },
  {
    id: 2,
    tags: ["Easy", "Waste Conservation"],
    title: "River Clean up Drive",
    description:
      "Preventing plastic waste from entering marine ecosystems and harming sea life.",
    requirements: [
      "Bring reusable gloves and trash bags",
      "Document waste types and quantities",
      "+2 more requirements",
    ],
    points: 100,
    action: "Submit Evidence",
    participants: 95,
    deadline: "March 20, 2024",
  },
];

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
