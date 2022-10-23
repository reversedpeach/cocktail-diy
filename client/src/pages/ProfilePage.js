import React, { useEffect } from "react";

import MyProfile from "../presenter/myProfile.js";

import styled from "styled-components";

const StyledModeTitle = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 40pt;
	font-family: Helvetica;
	font-weight: bold;
	width: 80%;
	color: #7f7f7f;
	padding-bottom: 12px;
	margin-bottom: 20px;
	margin-left: 55px;
`;

export default function ProfilePage({ model }) {
	useEffect(() => {
		model.setSeeingUserName(model.username);
	}, []);
	return (
		<div className="discoverBox">
			<StyledModeTitle> MY PROFILE </StyledModeTitle>
			<MyProfile model={model} setShowCom={() => {}} />
		</div>
	);
}
