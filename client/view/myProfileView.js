import React, { useState, useEffect } from "react";

import MyBar from "../presenter/myBar.js";
import MyBarElem from "../presenter/myBarElem.js";
import useModelProp from "../utils/useModelProp.js";

import { Select, MenuItem, OutlinedInput, useTheme, Box, Chip } from "@mui/material";

import { AddOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			height: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

export default function MyProfileView({
	model,
	favoritedrinks,
	likeddrinks,
	recentdrinks,
	allIng,
	getStyles,
	handleChange,
}) {
	const [showSearchingForm, setShow] = useState(false);
	const [ingList, setIngList] = useState([]);
	const theme = useTheme();

	const mybar = useModelProp(model, "mybar");

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
								onClick={(e) => {
									if (showSearchingForm) setShow(false);
									else setShow(true);
								}}
							/>
						</Fab>
						{showSearchingForm ? (
							<Select
								labelId="demo-multiple-checkbox-label"
								id="demo-multiple-checkbox"
								multiple
								value={ingList}
								onChange={(e) => {
									handleChange(e, setIngList);
									console.log(e.target.value);
									// console.log(mybar);
									for (const value of e.target.value) {
										if (mybar.indexOf(value) == -1) {
											model.addMyBar(value);
										}
									}
								}}
								input={<OutlinedInput label="Tag" />}
								MenuProps={MenuProps}
								renderValue={(selected) => (
									<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
										{/* {selected.map((value) => (
											<Chip key={value} label={value} />
										))} */}
									</Box>
								)}
								style={{ height: "50px", width: "100px" }}>
								{allIng.map((ing, index) => {
									return (
										<MenuItem
											value={ing["strIngredient1"]}
											key={index}
											style={getStyles(allIng, ingList, theme)}>
											{ing["strIngredient1"]}
										</MenuItem>
									);
								})}
							</Select>
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
