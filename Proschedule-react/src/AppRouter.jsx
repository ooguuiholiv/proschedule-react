// AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe Routes
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DashboardEvents from "./components/Dashboard/DashboardScheduleEvents/DashboardEvents.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Use Routes ao invés de Switch */}
        <Route path="/" element={<Dashboard />} /> {/* Use element para definir o componente */}
        <Route path="/events" element={<DashboardEvents />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
