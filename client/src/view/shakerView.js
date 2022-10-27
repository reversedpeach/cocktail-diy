import React from "react";
import shaker from "../utils/images/shaker2.0.png";
import styled from "styled-components";

const StyledShaker = styled.img`
	margin-left: 0%;
	height:360px	
`

const ShakerView = ({ onDrop, onDragOver }) => {
	return (
		<div>
			<StyledShaker src={shaker}
				ondrop={(ev) => onDrop(ev)}
				ondragover={(ev) => onDragOver(ev)}
			/>
		</div>
	);
};

export default ShakerView;
