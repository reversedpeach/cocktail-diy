import React, { useState, useEffect } from "react";

import MyBar from "../presenter/myBar.js";
import MyBarElem from "../presenter/myBarElem.js";
import useModelProp from "../utils/useModelProp.js";

import Select from "react-select";

import { AddOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";

export default function MyProfileView({
	model,
	favoritedrinks,
	likeddrinks,
	recentdrinks,
	following,
	madedrinks,
	allIng,
	allUsers,
}) {
	const [showSearchingForm, setShow] = useState(false);
	const [showSearchingFriend, setFriend] = useState(false);

	const [selectedIngOptions, setSelectedIngOptions] = useState([]);

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
						<div style={{ width: "135px" }}>
							<Fab size="small" color="secondary" aria-label="add">
								<AddOutlined
									onClick={(e) => {
										if (showSearchingForm) setShow(false);
										else setShow(true);
									}}
								/>
							</Fab>
							{showSearchingForm ? (
								<Select
									value={selectedIngOptions}
									options={allIng}
									onChange={(e) => {
										model.addMyBar(e[0].value);
									}}
									isMulti={true}
								/>
							) : (
								<div></div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="followList">
					<div>Following: </div>
					<br></br>
					{following.map((value, index) => {
						return <li key={index}>{value}</li>;
					})}
					<div style={{ paddingTop: "20px" }}>
						<Fab size="small" color="secondary" aria-label="add">
							<AddOutlined
								onClick={(e) => {
									if (showSearchingFriend) setFriend(false);
									else setFriend(true);
								}}
							/>
						</Fab>
						{showSearchingFriend ? (
							<Select
								value={selectedIngOptions}
								options={allUsers}
								onChange={(e) => {
									model.addFollowing(e[0].value);
								}}
								isMulti={true}
							/>
						) : (
							<p></p>
						)}
					</div>
				</div>
				<div style={{ paddingLeft: 40, paddingTop: 20 }}>
					<div>Created Drinks:</div>
					<br></br>
					{madedrinks.map((value, index) => {
						return <li key={index}>{value}</li>;
					})}
				</div>
			</div>
		</div>
	);
}
