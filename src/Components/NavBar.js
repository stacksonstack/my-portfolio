import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="nav" id="nav">
        <NavLink to="/">
          <li className="current">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="current">About</li>
        </NavLink>
        <NavLink to="/projects">
          <li className="current">Projects</li>
        </NavLink>
        <NavLink to="/blogs">
          <li className="current">Blogs</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="current">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
