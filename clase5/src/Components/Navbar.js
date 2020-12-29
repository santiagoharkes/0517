import React from "react";
import NavbarList from "./NavbarList";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <NavbarList title="Home" ruta="/" />
        <NavbarList title="Posts" ruta="/posts" />
        <NavbarList title="Contact" ruta="/contact" />
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
