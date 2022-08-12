import { React } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <h1>
          Davison <strong>Robie</strong>
        </h1>
      </NavLink>
      <hr />
    </div>
  );
}

export default Header;
