import React, { useState, useEffect } from "react";

import MyBarProfile from "../presenter/myBarProfilePresenter.js";

import styled from "styled-components";
import Select from "react-select";

import { AddOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";

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
					{props.madeDrinks.map((drink) => {
						return <StyledList key={drink.name}>{drink.name}</StyledList>;
					})}

					<StyledTitleSmall>Liked Drinks </StyledTitleSmall>
					{props.likedDrinks.map((drink) => {
						return <StyledList key={drink}>{drink}</StyledList>;
					})}
				</div>
			</div>
		</div>
	);
}
