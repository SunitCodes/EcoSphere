import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserIcon, BookOpenText, CalendarDays, Gamepad2Icon, LayoutDashboard, MessageCircleQuestion } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const SIDE_MENU_DATA = [
    {
      id: "01",
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: "02",
      label: "Courses",
      icon: BookOpenText,
      path: "/courses",
    },
    {
      id: "03",
      label: "Games",
      icon: Gamepad2Icon,
      path: "/games",
    },
    {
      id: "04",
      label: "Upcoming Events",
      icon: CalendarDays,
      path: "/upcoming-events",
    },
    {
      id: "05",
      label: "Profile",
      icon: UserIcon,
      path: "/profile",
    }
  ];

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
    </div>
  );
};

export default Sidebar;
