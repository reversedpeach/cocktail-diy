import React from "react";

import styled from 'styled-components'

const StyledBtn = styled.button`
	border-radius: 18px;
	display: flex;
	font-size: 15pt;
	border: 1px;
	border-width: 1px;
	width: 110px;
	height: 35px;
	border-color: white;
	border-style: solid;
	color: rgb(127,127,127);
	background-color: white;
	cursor: pointer;
	align-self: flex-end;
	align-items: center;
	justify-content: center;
    margin-top: 200px;
    margin-left: 200px;

`

const CreateSaveView = ({ startCreate }) => {

	return <div>
		<form >
			<input type="file" id="uploadimg" accept="image/*" onChange={(event) => {
				console.log(event.target.files[0]);

			}} />
		</form>
		<StyledBtn onClick={startCreate}>Create</StyledBtn>
	</div>

};

export default CreateSaveView;