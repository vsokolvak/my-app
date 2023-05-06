import classes from "./Nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Nav = (props) => {
  const users = props.users.map((user) => {
		return <Friends key={user.id} avatar={user.avatar} name={user.name} id={user.id} />;
  });

  return (
    <nav className={classes.nav}>
      <div className={classes.menu}>
        <NavLink to="/profile">profile</NavLink>
        <NavLink to="/messages">messages</NavLink>
        <NavLink to="/news">news</NavLink>
        <NavLink to="/music">music</NavLink>
        <NavLink to="/setting">setting</NavLink>
      </div>

      <div className={classes.friends}>
        <p><NavLink to="/friends">friends</NavLink></p>
        <div className={classes.friendsitem}>{users}</div>
      </div>
    </nav>
  );
};

export default Nav;
