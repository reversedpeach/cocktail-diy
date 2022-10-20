import React, { useState, useEffect } from "react";

import MyBar from "../presenter/myBar.js";
import MyBarElem from "../presenter/myBarElem.js";
import styled from "styled-components";
import Select from "react-select";

import { AddOutlined } from "@mui/icons-material";
import { Fab, Button } from "@mui/material";

const StyledTitle = styled.div`
	display: flex;
	align-self: flex-start;
	justify-content: flex-start;
	font-size: 24pt;
	font-family: Helvetica;
	padding: 2px;
	color: #7F7F7F;;
	padding-bottom: 18px;
    width:200px;
    padding-top:4px;
`;

const StyledTitleSmall = styled.div`
	display: flex;
	align-self: flex-start;
	justify-content: flex-start;
	font-size: 18pt;
	font-family: Helvetica;
	padding: 2px;
	margin-top: 25px;
	color: #7F7F7F;;
	padding-bottom: 6px;
    width:200px;
    padding-top:4px;
`;

const StyledList = styled.li`
display: flex;
align-self: flex-start;
justify-content: flex-start;
font-size: 12pt;
font-family: Helvetica;
padding: 2px;
color: #7F7F7F;
width:200px;



`

export default function MyProfileView(props) {
	return (
		<><div className="rowBoxLeft">
			<StyledTitle>{props.model.seeingUsername}</StyledTitle>
			<StyledTitle>Level:100</StyledTitle>
		</div>
			<div className="rowBoxLeft">
				<div className="profileInfo">
					<StyledTitleSmall>Favorite Drink</StyledTitleSmall> <StyledList>{props.favoritedrinks}</StyledList>
					<StyledTitleSmall>
						Recent Drinks
					</StyledTitleSmall>
					{props.likeddrinks.map((value, index) => {
						return <StyledList key={index}>{value}</StyledList>;
					})}

					<div>
						<StyledTitleSmall>Liked Drinks:{" "}</StyledTitleSmall>
						{props.recentdrinks.map((value, index) => {
							return <StyledList key={index}>{value}</StyledList>;
						})}
					</div>
				</div>

				<div className="barBox">
					<div className="barShelf">
						<MyBar model={props.model} />
						<div className="barRow">
							<MyBarElem model={props.model} />
							<div style={{ width: "135px" }}>
								<Fab size="small" color="secondary" aria-label="add">
									<AddOutlined
										onClick={(e) => {
											if (props.showSearchingForm)
												props.setShow(false);
											else
												props.setShow(true);
										}} />
								</Fab>
								{props.showSearchingForm ? (
									<Select
										value={selectedIngOptions}
										options={props.allIng}
										onChange={(e) => {
											props.model.addMyBar(e[0].value);
										}}
										isMulti={true} />
								) : (
									<div></div>
								)}
							</div>
						</div>
					</div>
				</div>


				<div>
					<div className="followList">
						<StyledTitleSmall>Following </StyledTitleSmall>
						<br></br>
						{props.following.map((value, index) => {
							return <StyledList key={index}>{value}</StyledList>;
						})}
						<div style={{ paddingTop: "20px" }}>
							<Fab size="small" color="secondary" aria-label="add">
								<AddOutlined
									onClick={(e) => {
										if (props.showSearchingFriend)
											props.setFriend(false);
										else
											props.setFriend(true);
									}} />
							</Fab>
							{props.showSearchingFriend ? (
								<Select
									value={props.selectedIngOptions}
									options={props.allUsers}
									onChange={(e) => {
										props.model.addFollowing(e[0].value);
									}}
									isMulti={true} />
							) : (
								<p></p>
							)}
						</div>
					</div>
					<div style={{ paddingLeft: 40, paddingTop: 20 }}>
						<StyledTitleSmall>Created Drinks</StyledTitleSmall>
						<br></br>
						{props.madedrinks.map((value, index) => {
							return <StyledList key={index}>{value}</StyledList>;
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
			</div></>
	);
}
