import { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const NavBar = ({logOut, setLogOut}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurguer = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
   }

   const handleLogOut = () => {
    setIsOpen(false)
    setLogOut(null)
    localStorage.removeItem("token")
    localStorage.removeItem("userLogged")
   }

  return (
    <header className="navbar">
      <h1>
        <Link to="/">Booking App</Link>
      </h1>
      <div className="burguer-icon">
      <box-icon name='menu' color='#fffbfb' onClick={handleBurguer}></box-icon>
      </div>
      <nav className={`nav-login ${isOpen || "nav-close"}`}>
        <ul className="nav-inside">
          <li onClick={closeMenu}>
            <Link to="/">My Reservation</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/register">Register</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/login">Login</Link>
          </li>
          {
           logOut ?  <li onClick={handleLogOut}>
           <Link to="/login">Log Out</Link>
         </li> : null
          }
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
