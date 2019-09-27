import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" exact to="/">
      Home
    </NavLink>
    <NavLink className="navbar-brand" exact to="/products">
      Products
    </NavLink>
    <NavLink className="navbar-brand" exact to="/contact">
      Contact
    </NavLink>
  </nav>
);

export default Nav;
