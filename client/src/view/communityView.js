import React from "react";

export default function CommunityView(props) {
	return (
		<div className="community">
			<div className="title">Users:</div>
			<br></br>
			{props.users.map((value, index) => {
				return (
					<li
						key={index}
						onClick={() => {
							props.model.seeingUsername = value;
							props.setShowCom(true);
						}}>
						{value}
					</li>
				);
			})}
		</div>
	);
}
