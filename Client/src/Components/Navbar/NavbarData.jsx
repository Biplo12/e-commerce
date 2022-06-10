import React from "react";
import { Link } from "react-router-dom";

const NavbarData = ({ LinkTo, LinkName }) => {
  return (
    <li>
      <Link to={LinkTo}>
        <span className="un">{LinkName}</span>
      </Link>
    </li>
  );
};

export default NavbarData;
