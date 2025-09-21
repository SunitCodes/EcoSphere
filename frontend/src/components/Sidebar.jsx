import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserIcon, BookOpenText, CalendarDays, Gamepad2Icon, LayoutDashboard, MessageCircleQuestion, Trophy, Upload, ClipboardCheck, LocationEdit, Lightbulb } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole } = useAuth();

  const STUDENT_MENU = [
    { id: "01", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { id: "02", label: "Courses", icon: BookOpenText, path: "/courses" },
    { id: "03", label: "Games", icon: Gamepad2Icon, path: "/games" },
    { id: "04", label: "Real Tasks", icon: LocationEdit, path: "/realtasks" },
    { id: "05", label: "What's Next", icon: CalendarDays, path: "/upcoming-events" },
    { id: "06", label: "Profile", icon: UserIcon, path: "/profile" },
  ];

  // Teacher menu
  const TEACHER_MENU = [
    { id: "01", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { id: "02", label: "Leaderboard", icon: Trophy, path: "/leaderboard" },
    { id: "03", label: "Upload Task", icon: Upload, path: "/upload-task" },
    { id: "04", label: "Review Task", icon: ClipboardCheck, path: "/review-task" },
    { id: "05", label: "Profile", icon: UserIcon, path: "/profile" },
  ];

  const SIDE_MENU_DATA = userRole === "teacher" ? TEACHER_MENU : STUDENT_MENU;


  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      {SIDE_MENU_DATA.map((item, index) => {
        const isActive = location.pathname.startsWith(item.path);

        return (
          <button
            key={`menu_${index}`}
            className={`relative w-full flex items-center gap-4 text-[15px] py-3 px-6 mb-3 transition-all duration-200 cursor-pointer
              ${isActive ? "font-semibold text-black" : "text-gray-600 hover:text-black"}`}
            onClick={() => navigate(item.path)}
          >

            {isActive && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[4px] bg-green-700 rounded-r-md"></span>
            )}


            <item.icon className={`text-xl ${isActive ? "text-green-700" : ""}`} />
            {item.label}
          </button>
        );
      })}

      {/* Static Info Box */}
      <div className="mt-20 p-2 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm text-yellow-600">
          <Lightbulb className="text-yellow-600 inline-block align-middle mr-0.5" size={16} />
          We are developing the NGO side of the platform, implementing geofencing to automatically track attendance during events, ensuring accuracy, transparency, and easy management.
        </p>
      </div>


    </div>
  );
};

export default Sidebar;
