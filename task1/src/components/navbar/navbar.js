import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"} className="logo">
        CryptoCurrency
      </Link>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
