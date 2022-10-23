import React from "react";
import { TextField, Button, Input } from "@mui/material";

export default function RegisterView(props) {
    console.log("rendered view");
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
                    <div style={{ paddingTop: 20 }}>
                        <Button variant="contained" disabled={props.loading === true} onClick={(e) => { e.preventDefault(); send(); }}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}