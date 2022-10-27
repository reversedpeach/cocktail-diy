import React from "react";

export default function CommunityView(props) {
	return (
		<div className="community">
			<div className="comTitle">Users:</div>
			<br></br>
			{props.users.map((value, index) => {
				return (
					<li
						key={index}
						style={{ width: 120 }}
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
