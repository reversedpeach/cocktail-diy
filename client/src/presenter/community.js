import React from "react";

import CommunityView from "../view/communityView.js";

export default function Community(props) {
	return <CommunityView model={props.model} users={props.users} setShowCom={props.setShowCom} />;
}
