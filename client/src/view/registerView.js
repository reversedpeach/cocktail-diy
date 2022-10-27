import React from "react";
import { TextField, Button, Input } from "@mui/material";


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

const StyledError = styled.div`
display: flex;
align-self: flex-start;
font-size: 14pt;
font-family: Helvetica;
font-weight: bold;
width: 100%;
color: black;
margin-left: 55px;
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

export default function RegisterView(props) {
    function setUserName(value) {
        props.setUserName(value);
    }

    function setEmail(value) {
        props.setEmail(value)
    }

    function setPassword(value) {
        props.setPassword(value)
    }

    function setConfirmPassword(value) {
        props.setConfirmPassword(value);
    }

    function send() {
        props.send();
    }

    //return (<div>hello</div>)
    return (
        <div className="backgroundBox">
            <div className="resultCol">
                <div className="rowBoxLeft">
                    <StyledModeTitle> Sign Up </StyledModeTitle>
                </div>
                <div style={{ marginLeft: 55, marginTop: 0 }}>
                    <Input
                        type="text"
                        disableUnderline
                        autoComplete="off"
                        className="Username"
                        placeholder="Enter Name"
                        defaultValue={""}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <Input
                        type="text"
                        disableUnderline
                        autoComplete="off"
                        className="email"
                        placeholder="Enter email"
                        defaultValue={""}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br></br>
                    <Input disableUnderline type="text" style={{ display: "none" }} />
                    <Input type="password" style={{ display: "none" }} />
                    <Input
                        type="password"
                        disableUnderline
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        disableUnderline
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>
            <StyledError>
                {props.error ? <p>{props.error.message}</p> : <></>}
            </StyledError>

            <StyledButton variant="contained" disabled={props.loading === true} onClick={(e) => { e.preventDefault(); send(); }}>
                Register
            </StyledButton>

        </div>
    );
}