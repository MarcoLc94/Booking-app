import "./Navbar.css"

import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="navbar">
      <h1><Link to="/">Booking App</Link></h1>
      <nav>
       <ul className="nav-inside">
        <li>
          <Link>My Reservation</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
       </ul>
      </nav>
    </header>
  )
}

export default NavBar