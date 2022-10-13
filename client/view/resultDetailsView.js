import React from "react";
import "../utils/css/drinkResults.css";


export default function ResultDetailsView({ title, instructions, glass, alcoholic }) {
	return <div className="bottomBox">
		<div>Title: {title}</div>
		<div>Instructions: {instructions}</div>
		<div>Glass: {glass}</div>
		<div>Alcoholic: {alcoholic}</div>

	</div>

}
