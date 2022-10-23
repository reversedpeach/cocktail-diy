import React from "react";
import shaker from "../utils/images/shaker2.0.png";
import styled from "styled-components";

const StyledShaker = styled.img`
    align-self: center;	
    display: flex;
    width: 400px;
    margin-top 20px
`

const StyledModeTitle = styled.span`
    margin-top:20px;
	display: flex;
	align-self: center;
	font-size: 60pt;
	font-family: Helvetica;
	font-weight: bold;
	color: #7F7F7F;;
	padding-bottom: 12px;
	margin-bottom: 20px;
	
`;

const StartScreenView = () => {

    return (
        <div className="discoverBox">
            <StyledModeTitle>COCKTAIL DIY</StyledModeTitle>
            <StyledShaker src={shaker} />
        </div>

    );
};

export default StartScreenView;