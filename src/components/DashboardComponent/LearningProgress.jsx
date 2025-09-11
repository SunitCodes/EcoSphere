import { BookOpen, ListTodo, Target, TrendingUp } from "lucide-react";

// Dummy hardcoded data
const pointsData = [
  { date: "09/04", points: 40 },
  { date: "09/05", points: 85 },
  { date: "09/06", points: 70 },
  { date: "09/07", points: 130 },
  { date: "09/08", points: 90 },
  { date: "09/09", points: 160 },
  { date: "09/10", points: 80 },
];

// Bigger chart rendering
function LineChart({ data }) {
  const maxY = 180;
  const chartHeight = 240; // increased height
  const chartWidth = 400; // increased width
  const stepX = chartWidth / (data.length - 1);
  const points = data
    .map(
      (d, idx) =>
        `${idx * stepX},${chartHeight - (d.points * chartHeight) / maxY}`
    )
    .join(" ");

  return (
    <svg width={chartWidth} height={chartHeight} className="bg-white">
      {/* Grid lines */}
      {[0, 40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1={0}
          x2={chartWidth}
          y1={chartHeight - (y * chartHeight) / maxY}
          y2={chartHeight - (y * chartHeight) / maxY}
          stroke="#e5e7eb"
          strokeDasharray="2,2"
        />
      ))}
      {/* Chart polyline */}
      <polyline fill="none" stroke="#16a34a" strokeWidth={3} points={points} />
      {/* Dots */}
      {data.map((d, idx) => (
        <circle
          key={d.date}
          cx={idx * stepX}
          cy={chartHeight - (d.points * chartHeight) / maxY}
          r={4}
          fill="#16a34a"
          stroke="#fff"
        />
      ))}
    </svg>
  );
}

export function LearningProgress() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 text-green-700 font-semibold text-2xl mb-2">
        <TrendingUp size={30} /> Learning Progress
      </div>

      {/* Stats summary */}
      <div className="text-sm text-gray-600 mb-6 flex flex-wrap items-center gap-6">
        <span>
          Total:{" "}
          <span className="text-green-600 font-bold text-base">267</span> points
        </span>
        <span>
          Daily avg:{" "}
          <span className="text-green-600 font-bold text-base">7</span>
        </span>
        <span className="inline-flex ml-20 items-center text-green-700 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-green-700 inline-block mr-1" />{" "}
          Points Earned
        </span>
      </div>

      {/* Chart */}
      <div className="flex justify-center mb-6">
        <LineChart data={pointsData} />
      </div>

      {/* Footer stats smaller */}
      <div className="flex justify-around border-t border-gray-200 pt-4 text-center text-gray-600 text-xs">
        <div className="flex flex-col items-center">
          <BookOpen className="w-5 h-5 text-green-700 mb-1" />
          <div className="text-base font-bold text-green-700">9</div>
          Lessons
        </div>
        <div className="flex flex-col items-center">
          <ListTodo className="w-5 h-5 text-blue-700 mb-1" />
          <div className="text-base font-bold text-blue-700">6</div>
          Quizzes
        </div>
        <div className="flex flex-col items-center">
          <Target className="w-5 h-5 text-amber-500 mb-1" />
          <div className="text-base font-bold text-amber-500">2</div>
          Challenges
        </div>
      </div>
    </div>
  );
}
