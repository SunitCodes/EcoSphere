import React from "react";
import {
  Grid,
  List,
  BookOpen,
  Target,
  Trophy,
  Leaf,
  Users,
  Award,
} from "lucide-react";

const achievements = [
  {
    id: "badge_001",
    title: "First Steps",
    description: "Completed your first environmental lesson",
    rarity: "Common",
    icon: <BookOpen size={24} className="text-green-600" />,
    earnedDate: "Mar 15, 2024",
  },
  {
    id: "badge_002",
    title: "Quiz Master",
    description: "Scored 100% on 5 consecutive quizzes",
    rarity: "Rare",
    icon: <Target size={24} className="text-blue-600" />,
    earnedDate: "Apr 22, 2024",
  },
  {
    id: "badge_003",
    title: "Eco Warrior",
    description: "Completed 10 environmental challenges",
    rarity: "Epic",
    icon: <Trophy size={24} className="text-purple-600" />,
    earnedDate: "May 10, 2024",
  },
  {
    id: "badge_004",
    title: "Tree Planter",
    description: "Participated in tree planting activities",
    rarity: "Uncommon",
    icon: <Leaf size={24} className="text-green-500" />,
    earnedDate: "Jun 3, 2024",
  },
];

const Achievements = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 p-4 px-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Achievement Showcase</h2>
          <p className="text-sm text-gray-500">4 badges earned • 18 available</p>
        </div>
        
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 px-6">
        <button className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm flex items-center gap-1">
          <Award size={14} /> All Badges
        </button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm flex items-center gap-1">
          <BookOpen size={14} /> Learning
        </button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm flex items-center gap-1">
          <Target size={14} /> Challenges
        </button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm flex items-center gap-1">
          <Trophy size={14} /> Quizzes
        </button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm flex items-center gap-1">
          <Leaf size={14} /> Environmental
        </button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm flex items-center gap-1">
          <Users size={14} /> Social
        </button>
      </div>

      {/* Horizontal Scroll Achievements */}
      <div className="overflow-x-auto pb-4 px-6">
        <div className="flex gap-4 min-w-max">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="w-56 flex-shrink-0 border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 mb-3">
                  {ach.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{ach.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                  {ach.description}
                </p>
                <span
                  className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                    ach.rarity === "Common"
                      ? "bg-gray-100 text-gray-600"
                      : ach.rarity === "Uncommon"
                      ? "bg-green-100 text-green-600"
                      : ach.rarity === "Rare"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {ach.rarity}
                </span>
                <p className="text-xs text-gray-400 mt-2">
                  Earned {ach.earnedDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 border-t border-gray-200 pt-4 px-6">
        <p className="text-sm text-gray-600 mb-2">
          Achievement Progress{" "}
          <span className="text-green-600 font-semibold">4 / 18</span> earned
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-green-600 rounded-full"
            style={{ width: "22%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
