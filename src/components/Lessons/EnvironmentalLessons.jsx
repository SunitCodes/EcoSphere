import React from "react";
import { BookOpen, Brain, CheckCircle, MousePointerClickIcon, PlayCircle, TimerIcon, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Hardcoded lessons data function
function getLessons() {
  return [
    {
      level: "beginner",
      title: "Climate Change Basics",
      description: "Understanding the fundamentals of climate change and its global impact",
      time: "15 min",
      points: 5,
      status: "Start Lesson",
    },
    {
      level: "intermediate",
      title: "Renewable Energy Sources",
      description: "Explore solar, wind, and other sustainable energy solutions",
      time: "20 min",
      points: 10,
      status: "Completed",
    },
    {
      level: "intermediate",
      title: "Biodiversity Conservation",
      description: "Learn about protecting ecosystems and wildlife",
      time: "25 min",
      points: 10,
      status: "Completed",
    },
    {
      level: "advanced",
      title: "Sustainable Agriculture",
      description: "Modern farming techniques that protect the environment",
      time: "18 min",
      points: 15,
      status: "Completed",
    }
  ];
}

// Tag color utility
function getLevelClass(level) {
  switch (level) {
    case "beginner": return "bg-green-100 text-green-700";
    case "intermediate": return "bg-yellow-100 text-yellow-800";
    case "advanced": return "bg-red-100 text-red-700";
    default: return "";
  }
}

// Status utility - returns JSX for status button
function StatusButton({ status }) {
  if (status === "Completed") {
    return (
      <button
        className="w-full flex items-center justify-center bg-gray-100 text-gray-500 py-2 rounded-md cursor-default"
        disabled
      >
        <CheckCircle className="w-5 h-5 mr-2" /> Completed
      </button>
    );
  }
  return (
    <button 
      type="submit" 
      className="w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
      <PlayCircle className="w-5 h-5 mr-2" /> Start Lesson
    </button>
  );
}

// The main component
export default function EnvironmentalLessons() {
  const lessons = getLessons();
  const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/courses/climate-change-basics");
  };

  return (
    <div className="py-8">
      <div className="py-6 px-12 bg-gray-50 min-h-screen rounded-2xl">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <BookOpen className='text-green-600' size={30} /> Environmental Lessons
        </h1>
        <p className="text-gray-600 mb-12">Expand your knowledge and earn eco points</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lessons.map((lesson, idx) => (
            <form key={idx} 
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className={`px-2 py-1 text-xs rounded ${getLevelClass(lesson.level)}`}>
                  {lesson.level}
                </div>
                <BookOpen className="w-5 h-5 text-gray-400" />
              </div>

              <div className="font-semibold text-lg">{lesson.title}</div>
              <div className="text-gray-600 text-sm mb-2">{lesson.description}</div>

              {/* Icons before text */}
              <div className="flex gap-4 items-center text-gray-500 text-xs ">
                <span className="flex items-center gap-1">
                  <TimerIcon className="w-4 h-4 text-orange-500" /> {lesson.time}
                </span>
                <span className="flex items-center gap-1 text-yellow-600">
                  <Trophy className="w-4 h-4 text-yellow-500" /> {lesson.points} pts
                </span>
              </div>
              <div className="flex gap-4 items-center text-gray-500 text-xs mb-4">
                <span className="flex items-center gap-1">
                  <MousePointerClickIcon className="w-4 h-4 text-green-500" /> Interactive
                </span>
                <span className="flex items-center gap-1">
                  <Brain className="w-4 h-4 text-pink-400" /> Quiz
                </span>
              </div>

              <StatusButton status={lesson.status} />
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
