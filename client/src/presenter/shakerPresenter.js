import { ContactSupportOutlined } from "@mui/icons-material";
import React from "react";
import ShakerView from "../view/shakerView.js";

function Shaker() {
	function allowDrop(ev) {
		ev.preventDefault();
	}

	return (
		<ShakerView
			onDragOver={(ev) => allowDrop(ev)}
		/>
	)
};

export default Shaker;