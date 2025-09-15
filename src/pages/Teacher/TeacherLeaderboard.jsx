import { Crown, Award, Medal, TrendingUp, Repeat, Minus, LeafyGreen } from "lucide-react";

const leaderboardData = [
  {
    rank: 1,
    name: "Ananya Gupta",
    grade: "Grade 11",
    points: 2847,
    activity: "Completed Solar Energy Quiz",
    change: 2,
    icon: <Crown className="w-5 h-5 text-amber-400" />
  },
  {
    rank: 2,
    name: "Shreyas Sharma",
    grade: "Grade 12",
    points: 2634,
    activity: "Tree Planting Challenge",
    change: -1,
    icon: <Award className="w-5 h-5 text-gray-400" />
  },
  {
    rank: 3,
    name: "Ankit Ghosh",
    grade: "Grade 10",
    points: 2456,
    activity: "Water Conservation Task",
    change: 1,
    icon: <Medal className="w-5 h-5 text-yellow-400" />
  },
  {
    rank: 4,
    name: "Sneha Das",
    grade: "Grade 11",
    points: 2298,
    activity: "Renewable Energy Lesson",
    change: 0,
    icon: <Minus className="w-5 h-5 text-gray-400" />
  },
  {
    rank: 5,
    name: "Aisha Patel",
    grade: "Grade 12",
    points: 2187,
    activity: "Climate Change Quiz",
    change: 3,
    icon: <TrendingUp className="w-5 h-5 text-green-500" />
  },
  
];

function ChangeIcon({ value }) {
  if (value > 0) return <span className="text-green-600 font-semibold">+{value}</span>;
  if (value < 0) return <span className="text-red-600 font-semibold">{value}</span>;
  return <span className="text-gray-400">-</span>;
}

export default function TeacherLeaderboard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-12">
      <div className="flex justify-between items-center mb-4 font-semibold text-gray-800 text-lg">
        <span>Student Rankings</span>
        <span className="text-xs text-gray-400">Updated 5 minutes ago</span>
      </div>
      <table className="w-full table-auto border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left text-gray-600 border-b border-gray-200">
            <th className="px-3 pb-2">Rank</th>
            <th className="px-3 pb-2">Student</th>
            <th className="px-3 pb-2">Eco Points</th>
            <th className="px-3 pb-2">Recent Activity</th>
            <th className="px-3 pb-2">Change</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map(({ rank, name, grade, points, activity, change, icon }) => (
            <tr key={rank} className="bg-gray-50 rounded-lg shadow-sm border border-gray-100">
              <td className="flex items-center gap-2 px-3 py-2 font-semibold text-gray-800">
                {icon} {rank}
              </td>
              <td className="px-3 py-2">
                <div className="font-medium text-gray-900">{name}</div>
                <div className="text-xs text-gray-500">{grade}</div>
              </td>
              <td className="flex items-center gap-2 px-3 py-2 text-green-600 font-semibold">
                <LeafyGreen className="w-4 h-4" /> {points.toLocaleString()}
              </td>
              <td className="px-3 py-2 text-gray-700">{activity}</td>
              <td className="px-3 py-2"><ChangeIcon value={change} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="text-blue-600 font-semibold hover:underline">
          Next Page →
        </button>
      </div>
    </div>
  );
}
