import * as React from "react";

import MyBar from "../presenter/myBar.js";
import MyBarElem from "../presenter/myBarElem.js";

import { AddOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";

export default function MyProfileView({ model, favoritedrinks, likeddrinks, recentdrinks }) {
	return (
		<div className="myProfile">
			<div className="left">
				<span className="title">username level:100</span>
				<div className="profileInfo">
					<div>Favorite Drink: {favoritedrinks}</div>
					<div>
						Recent Drinks:
						{likeddrinks.map((value, index) => {
							return <li key={index}>{value}</li>;
						})}
					</div>
					<div>
						Liked Drinks:{" "}
						{recentdrinks.map((value, index) => {
							return <li key={index}>{value}</li>;
						})}
					</div>
				</div>
			</div>
			<div className="profileBar">
				<MyBar model={model} />
				<div className="barShelf">
					<div className="barRow">
						<MyBarElem model={model} />
						<Fab size="small" color="secondary" aria-label="add">
							<AddOutlined
								onClick={() => {
									console.log("click");
								}}
							/>
						</Fab>
					</div>
				</div>
			</div>
		</div>
	);
}
