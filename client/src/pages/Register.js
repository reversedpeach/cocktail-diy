import React from "react";
import { useState } from "react";
import { TextField, Button, Input } from "@mui/material";

export default function Register({ model }) {
	const [name, setName] = useState("username");
	const [password, setPassword] = useState("password");
	return (
		<div className="register">
			<div>
				<div style={{ paddingBottom: 10 }}>
					<div className="title">Register </div>
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
						<Button variant="contained" onClick={() => {}}>
							Register
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
