import React from "react";
import styled from "styled-components";


const StyledTitle = styled.div`
	display: flex;
	font-size: 36pt;
	font-family: Helvetica;
	padding: 20px;
	padding-bottom: 25px;
	color: white;
	align-self: center;
    font-weight: bolder;
`;
const StyledMiniTitle = styled.div`
	display: flex;
	font-size: 18pt;
	font-family: Helvetica;
	color: white;
	align-self: center;
`;

const StyledCenter = styled.div`
flex-direction: column;
align-self: center;
display: flex;

`

const ResultTitleView = ({ }) => {

	return (<StyledCenter><StyledMiniTitle>Scroll to see </StyledMiniTitle>
		<StyledTitle> DRINKS </StyledTitle></StyledCenter>)

};

export default ResultTitleView;