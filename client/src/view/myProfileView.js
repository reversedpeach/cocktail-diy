import React, { useState, useEffect } from "react";

import MyBar from "../presenter/myBar.js";
import MyBarElem from "../presenter/myBarElem.js";

import Select from "react-select";

import { AddOutlined } from "@mui/icons-material";
import { Fab, Button } from "@mui/material";

export default function MyProfileView(props) {
	return (
		<div className="myProfile">
			<div className="left">
				<span className="title">{props.model.seeingUsername} level:100</span>
				<div className="profileInfo">
					<div>Favorite Drink: {props.favoritedrinks}</div>
					<div>
						Recent Drinks:
						{props.likeddrinks.map((value, index) => {
							return <li key={index}>{value}</li>;
						})}
					</div>
					<div>
						Liked Drinks:{" "}
						{props.recentdrinks.map((value, index) => {
							return <li key={index}>{value}</li>;
						})}
					</div>
				</div>
			</div>
			<div className="profileBar">
				<MyBar model={props.model} />
				<div className="barShelf">
					<div className="barRow">
						<MyBarElem model={props.model} />
						<div style={{ width: "135px" }}>
							<Fab size="small" color="secondary" aria-label="add">
								<AddOutlined
									onClick={(e) => {
										if (props.showSearchingForm) props.setShow(false);
										else props.setShow(true);
									}}
								/>
							</Fab>
							{props.showSearchingForm ? (
								<Select
									value={selectedIngOptions}
									options={props.allIng}
									onChange={(e) => {
										props.model.addMyBar(e[0].value);
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
					{props.following.map((value, index) => {
						return <li key={index}>{value}</li>;
					})}
					<div style={{ paddingTop: "20px" }}>
						<Fab size="small" color="secondary" aria-label="add">
							<AddOutlined
								onClick={(e) => {
									if (props.showSearchingFriend) props.setFriend(false);
									else props.setFriend(true);
								}}
							/>
						</Fab>
						{props.showSearchingFriend ? (
							<Select
								value={props.selectedIngOptions}
								options={props.allUsers}
								onChange={(e) => {
									props.model.addFollowing(e[0].value);
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
					{props.madedrinks.map((value, index) => {
						return <li key={index}>{value}</li>;
					})}
				</div>
				<div style={{ paddingLeft: 40, paddingTop: 20 }}>
					{!props.followButton ? <Button variant="contained">Follow</Button> : <p></p>}
				</div>
				<div style={{ paddingLeft: 40, paddingTop: 20 }}>
					{props.model.seeingUsername !== props.model.username ? (
						<Button
							variant="contained"
							onClick={() => {
								props.setShowCom(false);
							}}>
							Back to Community
						</Button>
					) : (
						<p></p>
					)}
				</div>
			</div>
		</div>
	);
}
