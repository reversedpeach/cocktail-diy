import React, { useState, useEffect } from "react";

import MyBarProfile from "../presenter/myBarProfile.js";

import styled from "styled-components";
import Select from "react-select";

import { AddOutlined } from "@mui/icons-material";
import { Fab, Button } from "@mui/material";

const StyledHeadTitle = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 40pt;
	font-family: Helvetica;
	font-weight: bold;
	width: 100%;
	color: #7f7f7f;
	padding-bottom: 12px;


`;

const StyledTitle = styled.div`
	display: flex;
	align-self: flex-start;
	justify-content: flex-start;
	font-size: 24pt;
	font-family: Helvetica;
	padding: 2px;
	color: #7f7f7f;
	padding-bottom: 18px;
	width: 200px;
	padding-top: 4px;
`;

const StyledTitleSmall = styled.div`
	display: flex;
	align-self: flex-start;
	justify-content: flex-start;
	font-size: 18pt;
	font-family: Helvetica;
	padding: 2px;
	margin-top: 25px;
	color: #7f7f7f;
	padding-bottom: 6px;
	width: 200px;
	padding-top: 4px;
	font-weight: bold;
`;

const StyledList = styled.li`
	display: flex;
	align-self: flex-start;
	justify-content: flex-start;
	font-size: 12pt;
	font-family: Helvetica;
	padding: 2px;
	color: #7f7f7f;
	width: 200px;
`;

export default function MyProfileView(props) {
	return (
		<div className="discoverPage">
			<div className="rowBoxLeft">
				<StyledHeadTitle>{props.seeingUsername}'s Profile</StyledHeadTitle>
			</div>

			<div className="rowBoxLeft">
				<div className="barBox">
					<div className="barShelf">
						<MyBarProfile model={props.model} />
						{props.myBarLength < 10 ? (<div style={{ marginLeft: "-30px", marginTop: "-15px", display: "flex", justifyContent: "flex-end" }}>
							<Fab style={{ display: "flex", alignSelf: "flex-end" }} size="small" color="grey" aria-label="add">
								<AddOutlined
									onClick={(e) => {
										if (props.showSearchingForm) props.setShow(false);
										else props.setShow(true);
									}}
								/>
							</Fab>
							{props.showSearchingForm ? (
								<div style={{ width: "135px", display: "flex", zIndex: "1000" }}>
									<Select
										value={props.selectedIngOptions}
										options={props.allIng}
										onChange={(e) => {
											props.addMyBar(e[0].value);
										}}
										isMulti={true}
									/></div>
							) : (
								<div></div>
							)}
						</div>)
							: (<div></div>)}

					</div>
				</div>


				<div className="profileInfo">
					{/*<StyledTitleSmall>Favorite Drink</StyledTitleSmall> <StyledList>{props.favoritedrinks}</StyledList>*/}
					<StyledTitleSmall>Created Drinks</StyledTitleSmall>
					{props.likeddrinks.map((value, index) => {
						return <StyledList key={index}>{value}</StyledList>;
					})}

					<StyledTitleSmall>Liked Drinks </StyledTitleSmall>
					{props.recentdrinks.map((value, index) => {
						return <StyledList key={index}>{value}</StyledList>;
					})}
				</div></div>


			{/*<div>
					<div className="followList">
						<StyledTitleSmall>Following </StyledTitleSmall>
						{props.following.map((value, index) => {
							return <StyledList key={index}>{value}</StyledList>;
						})}
						<div style={{ paddingTop: "20px" }}>
							<Fab size="small" color="grey" aria-label="add">
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
										props.addFollowing(e[0].value);
									}}
									isMulti={true}
								/>
							) : (
								<p></p>
							)}
						</div>
							</div>
					<div style={{ paddingTop: 10 }}>
						<StyledTitleSmall>Created Drinks</StyledTitleSmall>
						{props.madedrinks.map((value, index) => {
							return <StyledList key={index}>{value}</StyledList>;
						})}
					</div>
					{/* <div style={{ paddingLeft: 40, paddingTop: 20 }}>
						{!props.followButton ? (
							<Button variant="contained" color="grey">
								Follow
							</Button>
						) : (
							<p></p>
						)}
					</div> 
				<div style={{ paddingLeft: 40, paddingTop: 20 }}>
					{props.model.seeingUsername !== props.model.username ? (
						<Button
							color="grey"
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
			</div>*/}</div>


	);
}
