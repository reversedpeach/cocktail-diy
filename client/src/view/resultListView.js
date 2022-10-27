import React from "react";


import styled from "styled-components";

const StyledName = styled.span`
display: flex;
justify-content: center;
align-self: center;
align-items: center;
font-size: 12pt;
font-family: Helvetica;
color: white;
margin-bottom: 14px;
margin-top: 10px;
text-transform: uppercase;
font-weight: bold;
max-width: 250px;
text-align:center;

`

const ResultListView = ({ image, title, id, setDetails }) => {

	return (
		<div>
			<div key={id}>
				<img src={image} className="drinkImg" onClick={setDetails} />
				<StyledName>
					{title}
				</StyledName>
			</div>
		</div>
	);

};

export default ResultListView;
