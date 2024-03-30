import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Importe Routes
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DashboardEvents from "./components/Dashboard/Events/DashboardEvents.jsx";
import EventsPage from "./components/Dashboard/EventsSchedule/EventsSchedule.jsx";
import SinglePage from "./components/SinglePage/index.jsx";
import LoginForm from "./components/LoginForm/index.jsx";
import RecoveryForm from "./components/RecoveryForm/index.jsx";
import VerifyEmail from "./components/VerifyEmail/index.jsx";
import ResetPassword from "./components/ResetPassword/index.jsx";
import Register from "./components/Register/index.jsx";



const isAuthenticated = () => {
  // Implemente a lógica de autenticação aqui, como verificar se o usuário está logado ou possui um token válido.
  // Retorne true se o usuário estiver autenticado, false caso contrário.
  return localStorage.getItem("token") !== null; 
};


const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/auth/recovery" element={<RecoveryForm />} />
        <Route path="/auth/verify" element={<VerifyEmail />} />
        <Route path="/auth/reset-pass" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Events" element={<DashboardEvents />} />
        <Route path="/scheduled-events" element={<EventsPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
