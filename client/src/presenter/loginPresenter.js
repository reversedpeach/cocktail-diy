import React from "react";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import LoginView from "../view/loginView.js";

const LOGIN = gql`
    query login(
        $email:String
        $password:String
    ){
        login(
            email:$email
            password:$password
        ){
            token
            id
            name
            myBar
        }
    }
`;


export default function Login({ model }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser, { data, loading, error }] = useLazyQuery(LOGIN, { onCompleted: (data) => { model.setUser(data.login) } });

    function login() {
        loginUser({
            variables: {
                email: email,
                password: password,
            },
        });
        if (error) {
            console.log(error);
        }
        if (loading) {
            console.log("loading: ", loading)
        }
        if (!loading && !error && data) {
            console.log("Data: ", data);
        }

    }
    return (<LoginView setEmail={setEmail} setPassword={setPassword} send={login} />);
}