import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
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

export const TESTMUTATION = gql`
    mutation test(
        $name: String!
    ){
        test(
           name: $name 
        ){
            name
        }
    }
`;


export const CREATE_DRINK_MUTATION = gql`
    mutation createDrink(
        $name: String!
        $ingredients: [{name:String, measurement:Int}]!
        $glasstype: String
        $instructions: String!
        $img: String
    ){
        createDrink(
            name: $name
            ingredients: $ingredients
            glasstype: $glasstype
            instructions: $instructions
            img: $img
        ){
            name
            id
        }
    }
`;

export const CHANGE_MY_BAR_MUTATION = gql`
    mutation changeMyBar(
        $newMyBar: [String]!
    ){
        changeMyBar(
            newMyBar: $newMyBar
        )
    }
`;



