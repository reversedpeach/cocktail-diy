import React from "react";
import styled from 'styled-components'
import UploadAndDisplayImage from "../presenter/uploadDisplayImgPresenter.js";

const StyledBtn = styled.button`
	border-radius: 18px;
	display: flex;
	font-size: 15pt;
	border: 1px;
	border-width: 1px;
	width: 110px;
	height: 35px;
	border-color: cornflowerblue;
	border-style: solid;
	color: white;
	background-color: cornflowerblue;
	cursor: pointer;
	align-self: flex-end;
	align-items: center;
	justify-content: center;
    margin-top: 50px;
    margin-left: 200px;
	box-shadow: 1px 1px 4px rgb(124, 124, 124);

`

const StyledStatus = styled.div`
display: flex;
align-self: flex-end;
font-size: 12pt;
font-family: Helvetica;
font-weight: bold;
width: 300px;
padding-top: 50px;
color: white;
`;

function CreateSaveView(props) {
	return (<div>
		<form >
			<UploadAndDisplayImage {...props} />
		</form>
		{(props.loading) ? <p>Loading...</p> : <></>}
		<StyledStatus>{props.status}</StyledStatus>
		<StyledBtn onClick={props.startCreate} disabled={props.success}>Create</StyledBtn>
	</div>);
}

export default CreateSaveView;