import React from "react";

import useModelProp from "../utils/useModelProp.js";

import MyProfileView from "../view/myProfileView.js";

export default function MyProfile({ model }) {
	const favoritedrinks = useModelProp(model, "favoritedrinks");
	const likeddrinks = useModelProp(model, "likeddrinks");
	const recentdrinks = useModelProp(model, "recentdrinks");

	return (
		<MyProfileView
			model={model}
			favoritedrinks={favoritedrinks}
			likeddrinks={likeddrinks}
			recentdrinks={recentdrinks}
		/>
	);
}
