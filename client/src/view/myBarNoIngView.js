import React from "react";
import styled from "styled-components";


const StyledDes = styled.span`
	display: flex;
	align-self: center;
    justify-content: center;
    text-align: center;
	font-size: 10pt;
	font-family: Helvetica;
	color: #7F7F7F;
	padding-bottom: 12px;
	font-style: italic;
    padding-top: 16px;
    width: 100%;
		
`;

const MyBarNoIngView = () => {
    return <StyledDes> Go to Profile to add beverages you have at home to your bar </StyledDes>
}

export default MyBarNoIngView;