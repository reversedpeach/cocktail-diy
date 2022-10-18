import React from "react";

import MyProfile from "../presenter/myProfile.js";

export default function ProfilePage({ model }) {
	return (
		<div>
			<MyProfile model={model} />
		</div>
	);
}
