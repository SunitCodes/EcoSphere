import React, { useState } from "react";
import { X, Menu, UserCircle2, Sprout, LeafyGreen } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ import context

const Navbar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { userRole } = useAuth(); // ✅ get role from global context

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
      <div>
        <div className="flex items-center gap-3">
          {/* Show Eco Points only for students */}
          {userRole === "student" && (
            <div className="bg-green-50 px-3 py-1.5 rounded-full text-green-700 mr-4">
              <Link to="/games" className="flex gap-2">
                <LeafyGreen size={24} className="text-green-700" />
                <span className="text-sm font-bold pt-0.5">267 Eco Points</span>
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
              {userRole === "teacher" ? "Soumya Paul" : "Joseph John"}
            </span>
            <span className="text-xs text-gray-500">
              {userRole === "teacher" ? "Teacher" : "Student"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile side menu (if you want to implement later) */}
    </div>
  );
};

export default Navbar;
