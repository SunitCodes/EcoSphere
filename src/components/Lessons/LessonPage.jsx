import React from "react";
import { BookOpen, LucideEarth } from "lucide-react";
import QuizComponent from "./QuizComponent";

export default function LessonPage() {
  return (
    <div className="p-8">
    <div className="min-h-screen bg-green-50 py-10 px-6 md:px-20 rounded-3xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <LucideEarth size={36} className="text-green-700" />
        <h1 className="text-4xl font-bold text-green-800">Climate Change Basics</h1>
      </div>

      {/* Kid-friendly content */}
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          Climate change is when the Earth's weather patterns change over a long time. It can make summers hotter, winters colder, and cause strong storms or floods.
        </p>
        <p>
          The main reason is humans putting too much carbon dioxide into the air by burning coal, oil, and gas. Carbon dioxide traps heat in the atmosphere.
        </p>
        <p>
          Effects include melting ice, rising sea levels, stronger storms, animals losing homes, and changes in rainfall.
        </p>
        <p>
          Kids can help by planting trees, saving energy, recycling, and using water wisely.
        </p>
      </div>

      {/* Kid-friendly animated YouTube videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/myZAvqqp9Jc?si=WMWl7j1Pbc3Exu2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7IwPFXzLH8c?si=W1FWGXR6BHz5189Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* Quiz Component */}
      <QuizComponent />
    </div>
    </div>
  );
}
