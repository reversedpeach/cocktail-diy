import React from "react";
import styled from "styled-components";

const BarTitle = styled.div`
	display: flex;
	align-self: center;
	justify-content: center;
	align-items: center;
	font-size: 24pt;
	font-family: Helvetica;
	padding: 2px;
	color: #7F7F7F;;
	padding-bottom: 18px;
    width: 140px;
    padding-top:4px;
    
`;

const MyBarView = () => {
	return <BarTitle>My Bar
	</BarTitle>
};

export default MyBarView;
