import { OnDeviceTraining } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const StyledIngTitle = styled.span`
	font-size: 10pt;
	font-family: Helvetica;
	color: #7F7F7F;
	padding-bottom: 12px;
	width: 10px;
    align-items: center;
    align-text:center;
    display:flex;
    align-self:center;
    justify-content:center;
`;

const MyBarElemView = ({ barIng, onAdd, onDrag }) => {
        return <li key="{barIng}" className="barCol" >
                <input draggable="true" onDragEnd={() => onAdd(barIng)} className="barImage" type="image" src={"https://www.thecocktaildb.com/images/ingredients/" + barIng + "-Small.png"} onClick={() => onAdd(barIng)} />
                <StyledIngTitle>{barIng}</StyledIngTitle>
        </li>


};

export default MyBarElemView;