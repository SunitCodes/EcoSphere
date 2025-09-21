import React, { useState } from "react";
import { X, Menu, UserCircle2, Sprout, LeafyGreen, AlertTriangleIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ import context

const Navbar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { userRole, setUserRole } = useAuth(); // ✅ get role + setter
  const navigate = useNavigate();

  const handleToggle = () => {
    if (userRole === "student") {
      setUserRole("teacher");
      navigate("/dashboard"); // Teacher dashboard
    } else {
      setUserRole("student");
      navigate("/dashboard"); // Student dashboard
    }
  };

  return (
    <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
      {/* Left side - menu button and title */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => setOpenSideMenu(!openSideMenu)}
          className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors"
        >
          {openSideMenu ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
        <div className="flex items-center gap-2">
          <Sprout size={36} className="text-green-600" />
          <span className="text-xl font-semibold text-black truncate">
            EcoSphere
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Toggle switch for Student / Teacher */}
       
        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm text-yellow-600 pb-1">
            <span><AlertTriangleIcon size={16}/></span>
            <p>This button is for prototype purpose only</p>
          </div>
          <span className="text-xs text-gray-600">
            {userRole === "student" ? "Student" : "Teacher"}
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={userRole === "teacher"}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-600 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
              after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white">
            </div>
          </label>
        </div>

        {/* Eco Points only for students */}
        {userRole === "student" && (
          <div className="bg-green-50 px-3 py-1.5 rounded-full text-green-700 mr-2">
            <Link to="/games" className="flex gap-2">
              <LeafyGreen size={24} className="text-green-700" />
              <span className="text-sm font-bold pt-0.5">50 Eco Points</span>
            </Link>
          </div>
        )}

        {/* User Icon */}
        <div className="relative">
          <UserCircle2 size={30} />
        </div>

        {/* User Info */}
        <div className="flex flex-col leading-tight">
          <span className="font-medium text-gray-900">
            {userRole === "teacher" ? "Soumya Paul" : "Aditya Kumar"}
          </span>
          <span className="text-xs text-gray-500 capitalize">{userRole}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
