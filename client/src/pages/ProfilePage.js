import React, { useEffect } from "react";

import MyProfile from "../presenter/myProfile.js";

import styled from "styled-components";



export default function ProfilePage({ model }) {
	useEffect(() => {
		model.setSeeingUserName(model.username);
	}, []);
	return (
		<div className="discoverBox">

			<MyProfile model={model} setShowCom={() => { }} />
		</div>
	);
}
