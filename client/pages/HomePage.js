import React from "react";

import MyBar from "../presenter/myBar.js";
import Shaker from "../presenter/shaker.js";
import ResultsList from "../presenter/resultsList.js";
import IngShaker from "../presenter/ingShaker.js";
import MyBarElem from "../presenter/myBarElem.js";
import SearchIng from "../presenter/searchIng.js";
import ResultDetails from "../presenter/resultDetails.js";
import useModelProp from "../utils/useModelProp.js";

export default function HomePage({ model }) {
	const showDetails = useModelProp(model, "drinkdetails");
	return (
		<div className="discoverBox">
			<div className="topBox">
				<div className="shakerBox">
					<div className="ingCol">
						<IngShaker model={model} />
					</div>
					<Shaker />
				</div>
				<div className="barBox">
					<MyBar model={model} />
					<div className="barShelf">
						<div className="barRow">
							<MyBarElem model={model} />
						</div>
					</div>
					<div className="searchIngredientForm">
						<SearchIng
							model={model}
							setIng={(ingList) => model.setIngList(ingList)}
							addIng={(ing) => {
								model.addIngShaker(ing);
							}}
						/>
					</div>
				</div>
			</div>
			<div className="bottomBox">
				<div className="resultCol">
					<div>
						<span>Drinks</span>
						<div className="drinkresultsList">
							<ResultsList model={model} />
						</div>
						{showDetails === null ? <div></div> : <ResultDetails model={model} />}
					</div>
				</div>
			</div>
		</div>
	);
}
