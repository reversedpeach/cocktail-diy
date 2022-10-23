import React from "react";
import { useState } from "react";

import { Button, Input } from "@mui/material";

import styled from "styled-components";


const StyledModeTitle = styled.span`
display: flex;
align-self: flex-start;
font-size: 40pt;
font-family: Helvetica;
font-weight: bold;
width: 100%;
color: #7f7f7f;
padding-bottom: 12px;
margin-bottom: 20px;

`;

const StyledButton = styled.button`
	border-radius: 20px;
	display: flex;
	width: 120px;
	height: 30px;
	border: 1px;
	border-width: 1px;
	border-color: rgb(124, 124, 124);
	box-shadow: 1px 1px 4px rgb(124, 124, 124);
	border-style: solid;
	color: white;
	background-color: #7f7f7f;
	cursor: pointer;
	align-self: flex-start;
	margin-left: 55px;
	align-items: center;
	align-content: center;
	justify-content: center;
	text-align: center;
	margin-top: 20px;
	font-size: 12pt;
`;

export default function LoginPage({ model }) {
	const [name, setName] = useState("username");
	const [password, setPassword] = useState("password");
	return (
		<div className="discoverBox">
			<div className="resultCol">
				<div className="rowBoxLeft">
					<StyledModeTitle> Sign In </StyledModeTitle>
				</div>
				<div style={{ marginLeft: 55, marginTop: 0 }}>
					<Input
						type="text"
						disableUnderline
						autoComplete="off"
						className="email"
						placeholder="Enter Name"
						defaultValue={name}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input disableUnderline type="text" style={{ display: "none" }} />
					<Input type="password" style={{ display: "none" }} />
					<Input
						type="password"
						disableUnderline
						placeholder="Password"
						autocomplete="new-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<StyledButton onClick={() => { }}>
					Login
				</StyledButton>
			</div>
		</div>
	);
}
