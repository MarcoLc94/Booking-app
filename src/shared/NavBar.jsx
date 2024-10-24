import { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurguer = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
   }

  return (
    <header className="navbar">
      <h1>
        <Link to="/">Booking App</Link>
      </h1>
      <div className="burguer-icon">
        <box-icon name="menu" onClick={handleBurguer}></box-icon>
      </div>
      <nav className={`nav-login ${isOpen || "nav-close"}`}>
        <ul className="nav-inside">
          <li onClick={closeMenu}>
            <Link>My Reservation</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/register">Register</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
