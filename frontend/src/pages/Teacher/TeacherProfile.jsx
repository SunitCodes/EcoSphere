import React from "react";
import {
  GraduationCap,
  MapPin,
  Edit3,
  Coins,
  Trees,
  Leaf,
  Calendar,
  Flame,
  Award,
  TrendingUp,
  CheckCircle,
  Camera,
  Edit,
  UsersIcon,
  LeafyGreenIcon,
  Medal,
} from "lucide-react";

const TeacherProfile = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 mt-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left: Avatar + Info */}
        <div className="flex items-center gap-6 p-12">
          <div className="relative">
            <div className="w-28 h-28 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50 shadow-lg">
              <Camera size={32} className="text-gray-400" />
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border border-white">
              <CheckCircle size={14} className="text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">Soumya Paul</h1>
            <div className="flex items-center gap-2 text-gray-600 text-md pt-2">
              <GraduationCap size={14} />
              <span>Green Valley High School</span>
            
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-md pt-2">
              <MapPin size={14} />
              <span>Liluah, West Bengal</span>
            </div>
          </div>
        </div>

        {/* Right: Edit button */}
        <button className="self-start md:self-center inline-flex items-center gap-2 px-3 py-1.5 text-md font-medium text-gray-700 pr-18 cursor-pointer">
          <Edit size={16} />
          Edit Profile
        </button>
      </div>

      {/* Middle: Stats */}
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-30">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <UsersIcon size={24} className="text-green-600" />
            <span className="text-3xl font-semibold text-green-600">451</span>
          </div>
          <p className="text-sm font-semibold text-gray-400 pt-2">Total Students</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <LeafyGreenIcon size={24} className="text-green-600" />
            <span className="text-3xl font-semibold text-green-600">20861</span>
          </div>
          <p className="text-sm font-semibold text-gray-400 pt-2">Total Eco Points</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <Medal size={24} className="text-green-600" />
            <span className="text-3xl font-semibold text-green-600">897</span>
          </div>
          <p className="text-sm font-semibold text-gray-400 pt-2">Total Badges</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-4 border-t border-gray-200 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          <span>Joined March 2024</span>
        </div>
        {/* <div className="flex items-center gap-2">
          <Flame size={18} className="text-orange-500" />
          <span>15 day streak</span>
        </div>
        <div className="flex items-center gap-2">
          <Award size={18} className="text-yellow-500" />
          <span>4 badges earned</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-green-600" />
          <span>Level 2</span>
        </div> */}
      </div>
    </div>
  );
};

export default TeacherProfile;
