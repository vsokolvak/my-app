import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";
import React from "react";

const Friends = (props) => {
  return (
    <NavLink to = {"messages/user" + props.id} className={classes.friend}>
      <img src={props.avatar} alt="avatar" />
      <p>{props.name}</p>
    </NavLink>
  );
};

export default Friends;
