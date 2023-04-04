import classes from "./User.module.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const User = (props) => {

  return (
      <div className={classes.user}>
        <p> 
          <img src={props.avatar} alt="avatar" />
          <NavLink to={'user' + props.id}> {props.name} </NavLink>
        </p>
      </div>
  );
};

export default User;
