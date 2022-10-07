import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

//Home, Details, My profile, Login or Register
export default function Navbar() {
	return (
		<div>
			<Button>Home</Button>
			<Button>Details</Button>
			<Button>Porfile</Button>
			<Button>Login</Button>
		</div>
	);
}
