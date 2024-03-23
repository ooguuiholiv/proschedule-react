import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
export default function App() {
  return (
    <div>
      <LoginPage></LoginPage>
      <Dashboard></Dashboard>
    </div>
  );
}
