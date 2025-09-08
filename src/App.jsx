import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Games from "./pages/Games";
import Quiz from "./pages/Quiz";
import UpcomingEvents from "./pages/UpcomingEvents";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/courses" element={<Courses />} /> 
        <Route path="/games" element={<Games />} /> 
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/upcoming-events" element={<UpcomingEvents />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
