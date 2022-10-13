import React from "react";

import MyBar from "./myBar.js";

export default function MyProfile({ model }) {
	return (
		<div className="myProfile">
			<span>username level:100</span>
			<div className="profileBar">
				<MyBar model={model} />
			</div>
			<div className="profileInfo">
				<div>Favorite Drink: xxxx</div>
				<div>Recent Drinks: xxxx</div>
				<div>Liked Drinks: xxxx</div>
			</div>
		</div>
	);
}
