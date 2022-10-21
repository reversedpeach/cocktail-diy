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
const createInstrucView = () => {

    return <div>
        <StyledInstructions id="instructions" placeholder="Start with mixing..." rows="8" cols="40"></StyledInstructions>
    </div>



};
export default createInstrucView;


