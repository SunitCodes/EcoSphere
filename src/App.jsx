import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Games from "./pages/Games";
import UpcomingEvents from "./pages/UpcomingEvents";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";
import TrashSortingGame from "./components/GameComponent/TrashSortingGame";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import TeacherLeaderboard from "./pages/Teacher/TeacherLeaderboard";
import UploadTask from "./pages/Teacher/UploadTask";
import ReviewTask from "./pages/Teacher/ReviewTask";
import TeacherProfile from "./pages/Teacher/TeacherProfile";
import TeacherDahboardLayout from "./layouts/TeacherDahboardLayout";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppRoutes() {
  const {userRole} = useAuth(); 

  return (
   
      <Routes>
        {/* Student Routes */}
        {userRole === "student" && (
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="games" element={<Games />}>
              <Route path="trash-sorting" element={<TrashSortingGame />} />
            </Route>
            <Route path="upcoming-events" element={<UpcomingEvents />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        )}

        {/* Teacher Routes */}
        {userRole === "teacher" && (
          <Route path="/" element={<TeacherDahboardLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="leaderboard" element={<TeacherLeaderboard />} />
            <Route path="upload-task" element={<UploadTask />} />
            <Route path="review-task" element={<ReviewTask />} />
            <Route path="profile" element={<TeacherProfile />} />
          </Route>
        )}
      </Routes>
  
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
