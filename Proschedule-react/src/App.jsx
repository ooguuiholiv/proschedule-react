import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPassword from "./components/ResetPassword";
import SinglePage from "./components/SinglePage";

export default function App() {
  return (
    <div>
      <SinglePage></SinglePage>
    </div>
  );
}
