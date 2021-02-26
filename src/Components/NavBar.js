import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="nav" id="nav">
        <NavLink to="/"><li>Home</li></NavLink>
        
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        {/* <NavLink > */}
          <li>Projects</li>
        {/* </NavLink> */}
        {/* <NavLink> */}
          <li>Blogs</li>
        {/* </NavLink> */}
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
