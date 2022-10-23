import React from "react";
import { useState } from "react";
import RegisterView from "../view/registerView.js";
//import { REGISTER_USER_MUTATION } from "../graphql/mutations.js";
import { gql, useMutation } from "@apollo/client";

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
            }
        }
        `;


/*function register() {
console.log("got to register", changeMyBar, data, error);
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

"name": username,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword,


*/

export default function Register({ model }) {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER_MUTATION, { onCompleted: (data) => { console.log(data); model.setUser(data.register) } });
    console.log("rendered");

    function register() {
        console.log(username, email, password, confirmPassword, registerUser);
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
            //model.setUser(data);
        }
        //setTimeout(() => { console.log(data) }, 5000);

    }
    return (<RegisterView setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} send={register} />);
}