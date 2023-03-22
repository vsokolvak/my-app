import classes from "./Maincontent.module.css";
import React from 'react';

const Maincontent = () => {
  return (
    <main className={classes.content}>
      maincontent
      <img
        src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-147307520.jpg"
        alt=""
      />
    </main>
  );
}

export default Maincontent;
