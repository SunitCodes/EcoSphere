// import React from "react";
// import {
//   Leaf,
//   ClipboardCheck,
//   Users,
//   CalendarDays,
//   CheckCircle,
//   UserPlus,
//   Send,
// } from "lucide-react";

// const tasks = [
//   {
//     id: 1,
//     tags: ["Easy", "Conservation"],
//     title: "Tree Plantation Drive",
//     description:
//       "Each tree planted can absorb 22kg of CO₂ annually and provide habitat for local wildlife.",
//     requirements: [
//       "Bring gardening gloves and water bottle",
//       "Wear comfortable outdoor clothing",
//       "+2 more requirements",
//     ],
//     points: 150,
//     action: "Join Task",
//     actionIcon: <UserPlus size={14} />,
//     participants: 120,
//     deadline: "March 25, 2024",
//   },
//   {
//     id: 2,
//     tags: ["Easy", "Waste Conservation"],
//     title: "River Clean up Drive",
//     description:
//       "Preventing plastic waste from entering marine ecosystems and harming sea life.",
//     requirements: [
//       "Bring reusable gloves and trash bags",
//       "Document waste types and quantities",
//       "+2 more requirements",
//     ],
//     points: 100,
//     action: "Submit Evidence",
//     actionIcon: <Send size={14} />,
//     participants: 95,
//     deadline: "March 20, 2024",
//   },
//   {
//     id: 3,
//     tags: ["Medium", "Energy Conservation"],
//     title: "Home Energy Audit",
//     description:
//       "Reducing household energy consumption by 15-30% and lowering carbon footprint.",
//     requirements: [
//       "Complete energy usage tracking sheet",
//       "Implement at least 3 energy-saving measures",
//       "+2 more requirements",
//     ],
//     points: 200,
//     action: "Join Task",
//     actionIcon: <UserPlus size={14} />,
//     participants: 80,
//     deadline: "March 28, 2024",
//   },
//   {
//     id: 4,
//     tags: ["Medium", "Water Conservation", "Completed"],
//     title: "Rain Water Harvesting Setup",
//     description:
//       "Install a simple rainwater harvesting system and track water collection over time.",
//     requirements: [
//       "1 day setup + monitoring",
//       "Your Home",
//       "Measurement Required",
//     ],
//     points: 300,
//     action: "Completed",
//     actionIcon: <ClipboardCheck size={14} />,
//     participants: 60,
//     deadline: "March 22, 2024",
//   },
// ];

// const RealTaskComponent  = () => {
//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       {tasks.map((task) => (
//         <div
//           key={task.id}
//           className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between"
//         >
//           {/* Tags */}
//           <div className="flex gap-2 items-center flex-wrap">
//             {task.tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 ${
//                   tag === "Medium"
//                     ? "bg-yellow-100 text-yellow-700"
//                     : tag === "Water Conservation"
//                     ? "bg-gray-100 text-gray-600"
//                     : tag === "Completed"
//                     ? "bg-green-100 text-green-700"
//                     : "bg-green-50 text-green-700"
//                 }`}
//               >
//                 {tag === "Completed" && <CheckCircle size={14} />}
//                 {tag === "Environmental Impact" && <Leaf size={14} />}
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Title + Description */}
//           <div className="mt-2 text-left">
//             <h3 className="font-semibold text-gray-800 p-0 m-0" style={{textAlign: 'left'}}>
//               {task.title}
//             </h3>
//             <p className="mt-1 text-gray-700 text-sm leading-snug" style={{textAlign: 'left'}}>
//               {task.description}
//             </p>
//           </div>


//           {/* Requirements */}
//           <h4 className="mt-3 font-semibold text-gray-800">Requirements:</h4>
//           <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
//             {task.requirements.map((req, i) => (
//               <li
//                 key={i}
//                 className={
//                   typeof req === "string" && req.startsWith("+")
//                     ? "text-green-600"
//                     : ""
//                 }
//               >
//                 {req}
//               </li>
//             ))}
//           </ul>

//           {/* Points + Action */}
//           <div className="mt-4 flex items-center justify-between">
//             <p className="text-green-700 font-semibold">
//               +{task.points} Eco Points
//             </p>
//             <button
//               className={`px-2 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
//                 task.action === "Completed"
//                   ? "bg-gray-200 text-gray-600 cursor-not-allowed"
//                   : "bg-green-700 hover:bg-green-800 text-white"
//               }`}
//             >
//               {task.actionIcon}
//               {task.action}
//             </button>
//           </div>

//           {/* Participants */}
//           <p className="mt-2 text-xs text-gray-600 flex items-center gap-1">
//             <Users size={14} /> {task.participants} participants
//           </p>

//           {/* Deadline */}
//           <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
//             <CalendarDays size={14} /> Deadline: {task.deadline}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RealTaskComponent;
import React from "react";
import {
  Leaf,
  ClipboardCheck,
  Users,
  CalendarDays,
  CheckCircle,
  UserPlus,
  Send,
} from "lucide-react";
import { useTasks } from "../../context/TasksContext"; // ⬅️ import context

const RealTaskComponent = () => {
  const { tasks } = useTasks(); // ⬅️ now we get tasks from context (default + uploaded)

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between"
        >
          {/* Tags */}
          <div className="flex gap-2 items-center flex-wrap">
            {task.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 ${
                  tag === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : tag === "Water Conservation"
                    ? "bg-gray-100 text-gray-600"
                    : tag === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-green-50 text-green-700"
                }`}
              >
                {tag === "Completed" && <CheckCircle size={14} />}
                {tag === "Environmental Impact" && <Leaf size={14} />}
                {tag}
              </span>
            ))}
          </div>

          {/* Title + Description */}
          <div className="mt-2 text-left">
            <h3 className="font-semibold text-gray-800">{task.title}</h3>
            <p className="mt-1 text-gray-700 text-sm leading-snug">
              {task.description}
            </p>
          </div>

          {/* Requirements */}
          <h4 className="mt-3 font-semibold text-gray-800">Requirements:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
            {task.requirements.map((req, i) => (
              <li
                key={i}
                className={
                  typeof req === "string" && req.startsWith("+")
                    ? "text-green-600"
                    : ""
                }
              >
                {req}
              </li>
            ))}
          </ul>

          {/* Points + Action */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-green-700 font-semibold">
              +{task.points} Eco Points
            </p>
            <button
              className={`px-2 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
                task.action === "Completed"
                  ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800 text-white"
              }`}
            >
              {task.actionIcon || <UserPlus size={14} />} {/* fallback */}
              {task.action}
            </button>
          </div>

          {/* Participants */}
          <p className="mt-2 text-xs text-gray-600 flex items-center gap-1">
            <Users size={14} /> {task.participants} participants
          </p>

          {/* Deadline */}
          <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
            <CalendarDays size={14} /> Deadline: {task.deadline}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RealTaskComponent;
