// AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe Routes
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DashboardEvents from "./components/Dashboard/Events/DashboardEvents.jsx";
import EventsPage from "./components/Dashboard/EventsSchedule/EventsSchedule.jsx";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Import do Dashboard */}
        <Route path="/" element={<Dashboard />} /> {/* Importe do Events */}
        <Route path="/Events" element={<DashboardEvents />} />
        <Route path="/scheduled-events" element={<EventsPage />} />{" "}
        {/* Import do EventsSchedule */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
