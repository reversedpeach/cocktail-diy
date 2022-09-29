import React, { useContext } from "react";
import testlogo from "../utils/images/ttest.png";
import "../utils/css/drinkResults.css";

import { UserContext } from "../../app.jsx";

const images = [testlogo, testlogo, testlogo, testlogo, testlogo, testlogo, testlogo, testlogo];

export default function DrinkResults({ props }) {
	const GlobalState = useContext(UserContext);
	console.log(GlobalState);
	return (
		<div className="drinkresults">
			<span>Drinks</span>
			<div>
				{images.map(function (img, index) {
					const leftmargin = index * 150 + "px";
					return (
						<div>
							<img className="testlogo" src={img} alt="test image" style={{ left: leftmargin }} />
							<span className="testtext" style={{ left: leftmargin }}>
								testimage {index}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
