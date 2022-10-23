import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query getUsers {
        getUsers {
            name
            id
            friends{
                name
            }
        }
    }
`;
/*
export const GET_USER = gql`
    query getUser(
        $name: String
        $id: String
    ){
        getUser(
            name: $name
            id:$id
        ){
            name
            id
            friends{
                name 
                id
            }
            MyBar
            createdDrinks
            favoriteDrink
        }
    }
`;


export const GET_DRINKS = gql`
    query getDrinks($community: Boolean, $ingredients: [String]) {
        getDrinks(community: $community, ingredients: $ingredients) {
            name
        }
    }
`;

export const GET_DRINK = gql`
    query getDrink(
        $community: Boolean
        $name: String
        $id: String
    ){
        getDrink(
            community: $community
            name: $name
            id: $id
        ){
            name
            ingredients{
                name
                measurement
            }
            instructions
            img
            creator{
                name
                id
            }
        }
    }
`;

export const LOGIN = gql`
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

export const GET_ALL_INGREDIENTS = gql`
    query getAllIngredients{
        getAllIngredients
    }
`;


export const GET_INGREDIENT = gql`
    query getIngredient(
        $id: String
    ){
        getIngredient(
            id:$id
        )
    }

`;*/




/*
getUser(id: String, name: String): User
  getUsers: [User]
  getDrink(community:Boolean, name: String, id:String): Drink
  getDrinks(community:Boolean, ingredients: [String]): [Drink]
  login(email:String, password:String): User
  getAPIdrinks(ingredients:[String]): [APIdrink]
  getAllIngredients: [Ingredient]
  getIngredient(id:String):Ingredient
*/
