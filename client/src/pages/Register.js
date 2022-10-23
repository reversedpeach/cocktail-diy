import React from "react";
import { useState } from "react";
import { TextField, Button, Input } from "@mui/material";
import { REGISTER_USER_MUTATION, TESTMUTATION } from "../graphql/mutations.js";


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
`;
export default function Register({ model }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("test");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("test");
	const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER_MUTATION);

	function register() {
		console.log("got to register", registerUser, data, error);
		//registerUser({variables: {name:}})
		registerUser({
			variables: {
				name: name,
				email: email,
				password: password,
				confirmPassword: confirmPassword,
			}
		});
		if (!loading && !error) {
			model.setUser(data);
		}
	}

	return (
		<div className="register">
			<div>
				<div style={{ paddingBottom: 10 }}>
					<StyledModeTitle> Register </StyledModeTitle>
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
						<Button variant="contained" onClick={() => { register() }}>
							Register
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
