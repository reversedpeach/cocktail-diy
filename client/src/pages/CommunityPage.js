import React, { useState } from "react";

import Community from "../presenter/community.js";
import MyProfile from "../presenter/myProfile.js";

import useModelProp from "../utils/useModelProp.js";

export default function CommunityPage({ model }) {
	const [showCom, setShowCom] = useState(false);
	const users = useModelProp(model, "users");
	const seeingUsername = useModelProp(model, "seeingUsername");
	return (
		<div>
			{!showCom ? (
				<div>
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
