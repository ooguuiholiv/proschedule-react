import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      setLoading(false);
      return;
    }

    fetch("http://localhost:7777/auth/is-authenticated", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Falha na autenticação.");
        }
        return res.json();
      })
      .then((data) => {
        setIsLoggedIn(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro:", error);
        setIsLoggedIn(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};
