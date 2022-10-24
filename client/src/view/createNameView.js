import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import styled from 'styled-components';

const StyledCenter = styled.div`
flex-direction: column;
align-self: center;
display: flex;
margin-bottom: 50px;

`

const StyledInput = styled.input`
display: flex;
font-size: 10pt;
font-family: Helvetica;
padding: 2px;
color: #7F7F7F;;
margin-top: 5px;
margin-left: -20px;
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
	margin-left: -20px;

	`;

export default function CreateNameView(props) {
	function setName(event) {
		props.setName(event.target.value);
	}

	return (<StyledCenter>
		<StyledTitle>Pick a name</StyledTitle>
		<StyledInput type="text" placeholder="Name of your drink" onChange={setName} />
	</StyledCenter>)
};