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
    requirements: ["Bring gloves", "Wear outdoor clothing", "+2 more"],
    points: 100,
    action: "Join Task",
    actionIcon: null,
    participants: 120,
    deadline: "March 25, 2025",
  },
  {
    id: 2,
    tags: ["Easy", "Waste Conservation"],
    title: "River Clean Up Drive",
    description:
      "Prevent plastic waste from entering marine ecosystems.",
    requirements: ["Bring reusable gloves", "Document waste", "+2 more"],
    points: 100,
    action: "Submit Evidence",
    actionIcon: null,
    participants: 95,
    deadline: "March 20, 2024",
  },
  {
    id: 3,
    tags: ["Medium", "Energy Conservation"],
    title: "Energy Audit",
    description:
      "Conduct a comprehensive energy audit of your home and implement energy saving measures.",
    requirements: ["Complete energy usage tracking sheet", "Implement 3 energy saving measures", "+2 more"],
    points: 200,
    action: "Join Task",
    actionIcon: null,
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
