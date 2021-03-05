import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="nav" id="nav">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/blogs">
            Blogs
          </NavLink>
        </li>

        <li>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
