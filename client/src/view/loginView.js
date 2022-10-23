import React from "react";
import { TextField, Button, Input } from "@mui/material";

export default function LoginView(props) {
    function setEmail(value) {
        props.setEmail(value)
    }

    function setPassword(value) {
        props.setPassword(value)
    }

    function send() {
        props.send();
    }

    return (
        <div className="register">
            <div>
                <div style={{ paddingBottom: 10 }}>
                    <div className="title">Log in </div>
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
                        </div>
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <Button variant="contained" disabled={props.loading === true} onClick={(e) => { e.preventDefault(); send(); }}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}