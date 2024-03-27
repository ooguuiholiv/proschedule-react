import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPassword from "./components/ResetPassword";
import SinglePage from "./components/SinglePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<SinglePage />} /> {/* Definindo SinglePage como página inicial */}
      </Routes>
    </Router>
  );
}
