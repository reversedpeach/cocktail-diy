import React, { useState } from "react";

import Community from "../presenter/community.js";
import MyProfile from "../presenter/myProfile.js";

import useModelProp from "../utils/useModelProp.js";

import styled from "styled-components";

const StyledModeTitle = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 40pt;
	font-family: Helvetica;
	font-weight: bold;
	width: 80%;
	color: #7F7F7F;;
	padding-bottom: 12px;
	margin-bottom: 20px;
	margin-left:55px;
`;

const StyledModeDes = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 10pt;
	font-family: Helvetica;
	width: 80%;
	color: #7F7F7F;
	padding-bottom: 12px;
	margin-left:55px;
	font-style: italic;
	width: 350px;
	
`;

export default function CommunityPage({ model }) {
	const [showCom, setShowCom] = useState(false);
	const users = useModelProp(model, "users");
	const seeingUsername = useModelProp(model, "seeingUsername");
	return (
		<div>
			{!showCom ? (
				<div className="discoverBox">
					<StyledModeTitle> COMMUNITY </StyledModeTitle>
					<div style={{ paddingLeft: 20, paddingTop: 20 }}>
						<Community model={model} users={users} setShowCom={setShowCom} />
					</div>
					<div style={{ paddingLeft: 20, paddingTop: 20 }}>
						<div>Created Drinks:</div>
						<br></br>
						{model.alluserdrinks.map((value, index) => {
							return <li key={index}>{value}</li>;
						})}
					</div>
				</div>
			) : (
				<div>
					<MyProfile model={model} setShowCom={setShowCom} />
				</div>
			)}
		</div>
	);
}
