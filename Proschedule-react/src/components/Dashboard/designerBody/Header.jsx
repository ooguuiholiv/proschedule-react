import React, { useState } from "react";
import "./bodyDesigner.css";
import { Link } from "react-router-dom";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Adiciona ou remove a classe no body para desativar o scroll
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <div className="header">
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`header-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>DASHBOARD</Link>
        <Link to="/events" onClick={toggleMenu}>EVENTS</Link>
        <Link to="/scheduled-events" onClick={toggleMenu}>SCHEDULED EVENTS</Link>
      </div>
      <div className="user-profile">
        <img
          src="src/assets/icon-perfil.jpg"
          alt="User Icon"
          className="user-icon"
        />
        <div className="perfil">
          <span className="user-name">Rick Sanches</span> <br />
          <span className="occupation">Engenheiro de software</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
