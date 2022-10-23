import { ContactSupportOutlined } from "@mui/icons-material";
import React from "react";
import ShakerView from "../view/shakerView.js";

function Shaker({ model }) {


	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drop(ev) {
		var data = ev.dataTransfer.getData("text");
		model.addIngShaker(data);

	}


	return (
		<ShakerView onDrop={console.log("drop")} onDragOver={(ev) => allowDrop(ev)} />
	)
};

export default Shaker;