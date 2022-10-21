import React from "react";
import styled from "styled-components";

const StyledDesc = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	font-size: 12pt;
	font-family: Helvetica;
	color: white;
	align-self: flex-end;
	flex-direction: row;
	margin-left: 7px;
	gap: 5%;
	`;



const createElemListView = ({ ingredient }) => {
	return <StyledDesc> {ingredient}
		<input type="text" placeholder="Amount" />
	</StyledDesc>

};

export default createElemListView;