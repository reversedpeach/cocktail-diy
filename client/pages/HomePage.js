import React from "react";

import MyBar from "../presenter/myBar.js";
import Shaker from "../presenter/shaker.js";
import ResultsList from "../presenter/resultsList.js";
import IngShaker from "../presenter/ingShaker.js";
import MyBarElem from "../presenter/myBarElem.js";
import SearchIng from "../presenter/searchIng.js";
import ResultDetails from "../presenter/resultDetails.js";
import useModelProp from "../utils/useModelProp.js";
import ToggleMode from "../presenter/toggleMode.js";
import CreateDrink from "../presenter/createDrink.js";
import CreateInstruc from "../presenter/createInstruc.js";
import CreateTitle from "../presenter/createTitle.js";
import CreateSave from "../presenter/createSave.js";

export default function HomePage({ model }) {
	const showDetails = useModelProp(model, "drinkdetails");
	const showResult = useModelProp(model, "currentdrink");
	const currentMode = useModelProp(model, "selectedmode");
	return (
		<div className="discoverBox">
			<div className="topBox">
				<div className="shakerBox">
					<div className="ingCol">
						<ToggleMode model={model} />
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
							onAdd={(add) => model.addIngShaker(add)} />
					</div>
				</div>
			</div>

			{currentMode === "create" ? (showResult.length > 0 ?
				<div className="bottomBox">
					<CreateTitle />

					<div className="topBox">
						<div className="resultCol">
							<CreateDrink model={model} />
						</div>
						<div className="resultCol">
							<CreateInstruc model={model} />
							<CreateSave />
						</div>
					</div>


				</div>
				: <p></p>)
				: showResult.length > 0 ? (<div className="bottomBox">
					<div className="resultCol">
						<div>
							<span>Drinks</span>
							<div className="drinkresultsList">
								<ResultsList model={model} />
							</div>
							{showDetails === null ? <div></div> : <ResultDetails model={model} />}
						</div>
					</div>
				</div>) : <p></p>}
		</div>
	);
}
