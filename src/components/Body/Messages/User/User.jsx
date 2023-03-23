import classes from "./User.module.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const User = (props) => {

  let userCount = props.user || 1

  return (
      <div className={classes.user}>
        <p> 
          <NavLink to='user1'> user 1 </NavLink>
        </p>
      </div>
  );
};

export default User;
