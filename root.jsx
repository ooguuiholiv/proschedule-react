import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import LoginForm from "./src/components/LoginForm";
import RecoveryForm from "./src/components/RecoveryForm";
import AppRouter from "./src/AppRouter";
import Dashboard from "./src/components/Dashboard/Dashboard";
import DashboardEvents from "./src/components/Dashboard/Events/DashboardEvents";
import EventsPage from "./src/components/Dashboard/EventsSchedule/EventsSchedule";
import SinglePage from "./src/components/SinglePage";
import Register from "./src/components/Register";
import VerifyEmail from "./src/components/VerifyEmail";
import ResetPassword from "./src/components/ResetPassword";

export const rotas = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginForm />,
  },
  {
    path: "/auth/recovery",
    element: <RecoveryForm />,
  },
  {
    path: "/",
    element: <SinglePage />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/auth/reset-pass",
    element: <ResetPassword />,
  },

  {
    path: "*",
    element: (
      <PrivateRoute>
        <AppRouter />
      </PrivateRoute>
    ),
  },
]);
