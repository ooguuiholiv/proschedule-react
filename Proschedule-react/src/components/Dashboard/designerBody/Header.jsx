import React, { useState } from "react";
import "./bodyDesigner.css";
import { Link } from "react-router-dom";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // Novo estado para o menu do perfil

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open");
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <div className="header">
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`header-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          DASHBOARD
        </Link>
        <Link to="/events" onClick={toggleMenu}>
          EVENTS
        </Link>
        <Link to="/scheduled-events" onClick={toggleMenu}>
          SCHEDULED EVENTS
        </Link>
      </div>
      <div className="user-profile">
        <img
          src="src/assets/icon-perfil.jpg"
          alt="User Icon"
          className="user-icon"
          onClick={toggleProfileMenu} // Adicione o evento de clique para exibir o menu do perfil
        />
        {profileMenuOpen && ( // Exibir o menu do perfil se profileMenuOpen for verdadeiro
          <div className="profile-menu">
            <Link to="/profile">Perfil</Link>
            <Link to="/logout">Sair</Link>
          </div>
        )}
        <div className="perfil">
          <span className="user-name">Rick Sanches</span> <br />
          <span className="occupation">Engenheiro de software</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
