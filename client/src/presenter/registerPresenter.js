import React, { useEffect, useState } from "react";
import RegisterView from "../view/registerView.js";
import useModelProp from "../utils/useModelProp.js";
//import { REGISTER_USER_MUTATION } from "../graphql/mutations.js";
import { gql, useMutation } from "@apollo/client";
import { Navigate, useNavigate } from "react-router-dom";



const REGISTER_USER_MUTATION = gql`
        mutation register(
            $name: String!
            $email: String!
            $password: String!
            $confirmPassword: String!
        ) {
            register(
                name: $name
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            ) {
                name
                token
                id
                myBar
                likedDrinks
                createdDrinks{
                    name
                    id
                }
            }
        }
        `;


export default function Register({ model }) {
    const navigate = useNavigate();
    const isAuth = useModelProp(model, "isAuth");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER_MUTATION, { onCompleted: (data) => { console.log(data); model.setUser(data.register) } });


    function register() {
        registerUser({
            variables: {
                name: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
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
    return (<RegisterView setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} send={register} />);
}