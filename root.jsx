import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import LoginForm from "./src/components/LoginForm";
import RecoveryForm from "./src/components/RecoveryForm";
import AppRouter from "./src/AppRouter";
import Dashboard from "./src/components/Dashboard/Dashboard";
import DashboardEvents from "./src/components/Dashboard/Events/DashboardEvents";
import EventsPage from "./src/components/Dashboard/EventsSchedule/EventsSchedule";

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
    path: "*",
    element: (
      <PrivateRoute>
        <AppRouter />
        <Dashboard />
        <DashboardEvents />
        <EventsPage />
      </PrivateRoute>
    ),
  },
]);
