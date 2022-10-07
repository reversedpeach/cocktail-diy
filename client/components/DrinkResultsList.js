import React, { useContext, useEffect, useState } from "react";
import testlogo from "../utils/images/ttest.png";
import "../utils/css/drinkResults.css";
import useModelProp from "../presenter/useModelProp.js";
import CocktailSource from "../cocktailApi.js";
import { promiseNoData, usePromise } from "../presenter/usePromise.js";

export default function DrinkResultsList({ model }) {
	const shakering = useModelProp(model, "currentdrink");
	const [images, setImages] = useState([]);

	let im = new Array();
	let searching;

	async function updateImages() {
		var query = "";
		for (var ing of shakering) {
			query += ing + ",";
		}
		query = query.slice(0, query.length - 1);

		if (query != "") {
			im = new Array();
			const result = await CocktailSource.filterCocktail(query);
			for (const drink of result) {
				im = im.concat(drink["strDrinkThumb"]);
			}
			setImages(im);
		}
	}

	useEffect(() => {
		searching = true;
		updateImages();
		searching = false;
	}, [model["currentdrink"]]);

	return (
		<div className="drinkresultsList">
			<span>Drinks</span>
			<div>
				{!searching
					? images.map(function (img, index) {
							const leftmargin = index * 150 + "px";
							return (
								<div key={index}>
									<img src={img} className="img" style={{ left: leftmargin }} />
									<span className="testtext" style={{ left: leftmargin }}>
										testimage {index}
									</span>
								</div>
							);
					  })
					: console.log(images)}
			</div>
		</div>
	);
}
