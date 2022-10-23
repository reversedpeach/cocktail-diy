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
import ResultTitle from "../presenter/resultTitle.js";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CreatePresenter from "../presenter/createPresenter.js";

const StyledModalCon = styled.div`
position: fixed; /* Stay in place */
z-index: 0; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

`
const StyledModeTitle = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 40pt;
	font-family: Helvetica;
	font-weight: bold;
	width: 80%;
	color: #7F7F7F;;
	padding-bottom: 12px;
	margin-bottom: 20px;
	margin-left:55px;
`;

const StyledModeDes = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 10pt;
	font-family: Helvetica;
	width: 80%;
	color: #7F7F7F;
	padding-bottom: 12px;
	margin-left:55px;
	font-style: italic;
	width: 350px;
	
`;





export default function HomePage({ model }) {
	const showDetails = useModelProp(model, "drinkdetails");
	const showResult = useModelProp(model, "currentdrink");
	const currentMode = useModelProp(model, "selectedmode");
	return (
		<div className="discoverBox" >
			<div className="rowBox">
				<StyledModeTitle>{currentMode.toUpperCase()}</StyledModeTitle>
				<ToggleMode model={model} />
			</div>
			<StyledModeDes>{currentMode[0].toUpperCase() + currentMode.slice(1)} a new drink by dragging n' dropping ingredients from My Bar into the shaker or using the search form</StyledModeDes>
			<div className="rowBox">

				<div className="shakerBox">
					<div className="ingCol">
						<IngShaker model={model} />
					</div>
					<Shaker />
				</div>
				<div className="barBox">
					<div className="barShelf">
						<MyBar model={model} />
						<div className="barRow">
							<MyBarElem model={model} />
						</div>
					</div>
					<div className="searchIngredientForm">
						<SearchIng model={model} addIng={(add) => model.addIngShaker(add)} />
					</div>

				</div>

			</div>

			{currentMode === "create" ? (showResult.length > 0 ? (
				<div className="colBox">
					<CreatePresenter model={model} />
				</div>
			)
				: <p></p>) : (showResult.length > 0 ? (
					<div className="colBox">
						<div className="resultCol">
							<div>
								<ResultTitle />
								<div className="drinkresultsList">
									<ResultsList model={model} />
								</div>
								{showDetails === null ? <div></div> :
									<><StyledModalCon></StyledModalCon><ResultDetails model={model} /></>
								}
							</div>
						</div>
					</div>
				) : (
					<p></p>
				))}
		</div>
	);
}
