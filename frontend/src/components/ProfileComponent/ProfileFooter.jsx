import React from "react";
import { CalendarDays, Target, Users } from "lucide-react";

const ProfileFooter = () => {
  return (
    <div className="w-full bg-gray-50 py-8 mt-8 rounded-xl mb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        
        {/* Learning Streak */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <CalendarDays className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold">Learning Streak</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">15</p>
          <p className="text-gray-500 text-sm mt-1">Days in a row</p>
        </div>

        {/* Challenges Completed */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold">Challenges Completed</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">23</p>
          <p className="text-gray-500 text-sm mt-1">Environmental actions</p>
        </div>

        {/* School Ranking */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold">School Ranking</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">#89</p>
          <p className="text-gray-500 text-sm mt-1">Out of 156 students</p>
        </div>

      </div>
    </div>
  );
};

export default ProfileFooter;
