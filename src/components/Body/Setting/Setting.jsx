// import classes from "./Setting.module.css";
import React from 'react';
import { RedirectHoc } from '../../../hoc/RedirectAutorize';

const Setting = () => {
  return (
		<div>
				<div>
					<span>setting</span>
				</div>
		</div>
  );
};

export default RedirectHoc(Setting);