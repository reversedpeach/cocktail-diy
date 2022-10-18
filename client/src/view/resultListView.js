import React from "react";
import "../utils/css/drinkResults.css";

const ResultListView = ({ image, title, index, setDetails }) => {
	return (
		<div>
			<div key={index}>
				<img src={image} className="img" onClick={setDetails} />
				<span className="drinkname">{title}</span>
			</div>
		</div>
	);
};

export default ResultListView;
