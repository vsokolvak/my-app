import classes from "./Nav.module.css";
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.menu}>
        <NavLink to="/profile">profile</NavLink>
        <NavLink to="/messages">messages</NavLink>
        <NavLink to="/news">news</NavLink>
        <NavLink to="/music">music</NavLink>
        <NavLink to="/setting">setting</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
