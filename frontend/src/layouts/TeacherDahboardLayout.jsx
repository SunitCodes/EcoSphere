import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"; 
import { Outlet } from "react-router-dom";

const TeacherDashboardLayout = ({ activeMenu }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        <div className="max-[1080px]:hidden">
          {/* Sidebar with teacher role */}
          <Sidebar activeMenu={activeMenu} />
        </div>
        <div className="grow mx-5">
          {/* Nested routes render here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboardLayout;
