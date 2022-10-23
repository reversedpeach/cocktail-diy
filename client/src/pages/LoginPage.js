import React from "react";
import { useState } from "react";

import { Button, Input } from "@mui/material";

import styled from "styled-components";

const StyledModeTitle = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 16pt;
	font-family: Helvetica;
	font-weight: bold;
	width: 80%;
	color: #7f7f7f;
	padding-bottom: 2px;
	margin-bottom: 10px;
	// margin-left: 55px;
`;

export default function LoginPage({ model }) {
	const [name, setName] = useState("username");
	const [password, setPassword] = useState("password");
	return (
		<div className="signin">
			<div>
				<div style={{ paddingBottom: 10 }}>
					<StyledModeTitle> Sign In </StyledModeTitle>
				</div>
			</div>
			<div>
				<div>
					<div className="content">
						<div>
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
					</div>
					<div style={{ paddingTop: 20 }}>
						<Button color="grey" variant="contained" onClick={() => {}}>
							Log in
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
