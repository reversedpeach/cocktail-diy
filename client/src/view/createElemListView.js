import React from "react";
import styled from "styled-components";

const StyledDesc = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	align-content: flex-end;
	font-size: 12pt;
	font-family: Helvetica;
	color: white;
	width: 200px;
	align-self: flex-end;
	flex-direction: row;
	margin-left: 7px;
	gap: 5%;
	box-shadow: 1px 1px 4px rgb(124, 124, 124);
	`;



const createElemListView = ({ ingredient, id }) => {
	return <StyledDesc> {ingredient}
		<input type="text" placeholder="Amount" id={id} />
	</StyledDesc>

};

export default createElemListView;