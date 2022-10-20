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
import ResultTitle from "../presenter/resultTitle.js";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

const StyledTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	font-size: 16pt;
	font-family: Helvetica;
	color: white;
	padding-bottom: 10px;
	flex-direction: column;
	align-self: flex-start;

	`;

//create mode


const StyledCreate = styled.div`
  border-radius: 20px;
  background: white;
  top: 50%;
  left: 50%;
  width: 600px;
  max-width: 80%;
  padding-left: 40px;
  padding-bottom: 40px;

  box-shadow: 2px 2px 6px #888888;
`




const StyledRow = styled.div`
	padding-top: 20px;
	display: flex;
	flex-direction: row;
	align-content: flex-start;
	justify-content: space-between;
	gap: 20px;
	align-items: flex-start;

`

const StyledCol = styled.div`
	
	display: flex;
	flex-direction: column;
	align-content: flex-end;
	justify-content: flex-start;
	align-items: flex-start;
`

const StyledHeading = styled.div`
display: flex;
font-size: 16pt;
font-family: Helvetica;
color: #7F7F7F;;

`

const StyledHeadingSmall = styled.div`
margin-top: 0px;
display: flex;
font-size: 14pt;
font-family: Helvetica;
color: #7F7F7F;;
font-weight: bold;

`

const StyledTable = styled.table`
display: flex;
font-size: 12pt;
flex-direction: column;
align-items: flex-start;
font-family: Helvetica;
padding: 2px;
color: #7F7F7F;;
width: 200px;
margin-top: 10px;

align-content: stretch;

`


const StyledBtn = styled.button`
margin-right: 30px;
	display:flex;
	align-self: center;
	width: 50px
	height: 50px;
	border-radius: 5px;
	border: solid;
	border-color: rgb(125, 125, 125);;
	background-color: rgb(125, 125, 125);;
	color: white;
	cursor: pointer;
	
`


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
					<CreateTitle />
					<div className="rowBox">
						<div className="resultCol">
							<StyledTitle>Ingredients</StyledTitle>
							<CreateDrink model={model} />
						</div>
						<div className="resultCol">
							<StyledTitle>Instructions</StyledTitle>
							<CreateInstruc model={model} />

						</div>
						<div className="resultCol">
							<StyledTitle>Upload an image</StyledTitle>
							<CreateSave />
						</div>
					</div>
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
