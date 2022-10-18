import React from "react";
import "../utils/css/drinkResults.css";


const ResultDetailsView = ({ title, ingredients, instructions, image, glass, alcoholic }) => {
	return <div className="bottomBox">
		<div>Title: {title}</div>
		<img className="img" src={image}></img>
		<div>Instructions: {instructions}</div>
		<div>Ingredients: </div><table>
			{ingredients.map(obj =>
				<tr>
					<td>{obj.ingredient}</td>
					<td>{obj.amount}</td>
				</tr>
			)}</table>
		<div>Glass: {glass}</div>
		<div>Alcoholic: {alcoholic}</div>
	</div>

};

export default ResultDetailsView;
