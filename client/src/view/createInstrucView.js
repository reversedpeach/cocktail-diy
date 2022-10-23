import React from "react";
import styled from 'styled-components';

const StyledInstructions = styled.textarea`
display: flex;
font-size: 12pt;
font-family: Helvetica;
padding: 2px;
color: #7F7F7F;;
margin-top: 5px;
width: 200px;
justify-content: center;


`
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

const createInstrucView = () => {

    return <div className="resultCol">
        <StyledTitle>Instructions</StyledTitle>
        <StyledInstructions id="instructions" placeholder="Start with mixing..." rows="8" cols="40"></StyledInstructions>
    </div>



};
export default createInstrucView;


