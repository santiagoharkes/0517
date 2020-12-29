import React from "react";
import { Link } from "react-router-dom";

function NavbarList({ title, ruta }) {
  return (
    <li>
      <Link to={ruta}>{title}</Link>
    </li>
  );
}

export default NavbarList;
