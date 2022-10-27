import React from "react";

import MyBar from "../presenter/myBarHomePresenter.js";
import Shaker from "../presenter/shakerPresenter.js";
import ResultsList from "../presenter/resultsListPresenter.js";
import IngShaker from "../presenter/ingShakerPresenter.js";

import SearchIng from "../presenter/searchIngPresenter.js";
import ResultDetails from "../presenter/resultDetailsPresenter.js";

import ToggleMode from "../presenter/toggleModePresenter.js";
import ResultTitle from "../presenter/resultTitlePresenter.js";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Create from "../presenter/createPresenter.js";
import arrow from "../utils/images/arrow.png";



const StyledModalCon = styled.div`
position: fixed; 
z-index: 0; 
left: 0;
top: 0;
width: 100%;
height: 100%; 
overflow: auto; 
background-color: rgba(0,0,0,0.4); 

`
const StyledModeTitle = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 40pt;
	font-family: Helvetica;
	font-weight: bold;
	width: 100%;
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
	color: #7F7F7F;
	padding-bottom: 12px;
	margin-left:55px;
	font-style: italic;
	width: 350px;	
`;

const StyledImg = styled.img`

width: 200px;
display:flex;
`
export default function HomePageView(props) {
    return (<div>
        <div className="rowBox">
            <StyledModeTitle>{props.currentMode.toUpperCase()}</StyledModeTitle>
            <ToggleMode model={props.model} />
        </div>
        <div className="rowBoxDesc">
            <StyledModeDes>{props.currentMode[0].toUpperCase() + props.currentMode.slice(1)} a new drink by dragging n' dropping ingredients from My Bar into the shaker or using the search form</StyledModeDes>
            <StyledImg src={arrow} />
        </div>
        <div className="rowBox">
            <div className="shakerBox">
                <div className="ingCol">
                    <IngShaker model={props.model} />
                </div>
                <Shaker />
            </div>
            <div className="barBox">
                <div className="barShelf">
                    <MyBar model={props.model} />
                </div>
                <div className="searchIngredientForm">
                    <SearchIng model={props.model} />
                </div>
            </div>
        </div>

        {props.currentMode === "create" ? (props.showResult.length > 0 ? (
            <div className="colBox">
                <Create model={props.model} />
            </div>
        )
            : <p></p>) : (props.showResult.length > 0 ? (
                <div className="colBox">
                    <div className="resultCol">
                        <div>
                            <ResultTitle />
                            <div className="drinkresultsList">
                                <ResultsList model={props.model} />
                            </div>
                            {props.showDetails === null ? <div></div> :
                                <><StyledModalCon></StyledModalCon><ResultDetails model={props.model} /></>
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <p></p>
            ))}
    </div>)
}