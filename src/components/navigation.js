import React from "react";
import { NavLink } from "react-router-dom";

export default function() {
	return (
		<div className="">
			<div className="">
				<NavLink exact to="/">
					Discussion
				</NavLink>
			</div>

			<div className="">
				<NavLink to="/rules">Rules</NavLink>
			</div>

			<div className="">
				<NavLink to="/workflow">WorkFlow</NavLink>
			</div>
		</div>
	);
}
