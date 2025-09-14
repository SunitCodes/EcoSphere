import React from "react";
import { Users, CalendarDays, CheckCircle, Leaf } from "lucide-react";
import { useTasks } from "../../context/TasksContext";

const RealTaskComponent = () => {
  const { tasks = [] } = useTasks(); // ensure tasks is always an array

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between">
          <div className="flex gap-2 items-center flex-wrap">
            {task.tags?.map((tag, i) => (
              <span key={i} className="px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 flex items-center gap-1">
                {tag === "Completed" && <CheckCircle size={14} />}
                {tag === "Environmental Impact" && <Leaf size={14} />}
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-2 text-left">
            <h3 className="font-semibold text-gray-800" style={{textAlign: "left"}}>{task.title}</h3>
            <p className="mt-1 text-gray-700 text-sm leading-snug">{task.description}</p>
          </div>
          
          <h4 className="mt-3 font-semibold text-gray-800" style={{textAlign:"left"}}>Requirements:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
            {task.requirements?.map((req, i) => (
              <li key={i} className={req.startsWith("+") ? "text-green-600" : ""}>{req}</li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-green-700 font-semibold">+{task.points} Eco Points</p>
            <button className={`px-2 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${task.action === "Completed" ? "bg-gray-200 text-gray-600 cursor-not-allowed" : "bg-green-700 hover:bg-green-800 text-white"}`}>
              {React.isValidElement(task.actionIcon) ? task.actionIcon : <Users size={14} />}
              {task.action}
            </button>
          </div>

          <p className="mt-2 text-xs text-gray-600 flex items-center gap-1"><Users size={14} /> {task.participants}</p>
          <p className="mt-1 text-xs text-gray-500 flex items-center gap-1"><CalendarDays size={14} /> Deadline: {task.deadline}</p>
        </div>
      ))}
    </div>
  );
};

export default RealTaskComponent;
