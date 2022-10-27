import React, { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import LoginView from "../view/loginView.js";
import { Navigate, useNavigate } from "react-router-dom";
import useModelProp from "../utils/useModelProp.js";

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
            likedDrinks
            createdDrinks{
                name
                id
            }
        }
    }
`;

export default function Login({ model }) {
    const navigate = useNavigate();
    const isAuth = useModelProp(model, "isAuth");
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
    useEffect(() => {
        if (!loading && data) {
            setTimeout(() => {
                navigate("/");
            }, 200)
        }
    }, [isAuth])

    return (
        <LoginView
            setEmail={setEmail}
            setPassword={setPassword}
            send={login}
        />);
}