import React from "react";
import testlogo from "../utils/ttest.png";
import "../utils/drinkResults.css";

const images = [testlogo, testlogo, testlogo, testlogo, testlogo, testlogo, testlogo, testlogo];

export default function DrinkResults() {
	return (
		<div>
			<span>Drink Results</span>
			<div className="resultlist">
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
