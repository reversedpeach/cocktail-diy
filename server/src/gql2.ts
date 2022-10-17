import { getDrinksByIngredient, getDrinkByName, getUsers, getUserByID, getFriends, getIngredients, createUser, createDrink, getDrinksByCreator, getUserByName, Ingredient } from "./database";
import mongoose from "mongoose";
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Drink {
    id: String!
    name: String!
    ingredients: [Ingredient]
    creator: User
  }

  type User {
    id: String!
    name: String!
    email: String!
    friends: [User]
    favoriteDrink: Drink
    likedDrinks: [Drink]
    recentlyMadeDrinks: [Drink]
  }

  type Ingredient {
    name: String!,
    measurement: Int
  }

  input Ingredientinput {
    name: String!,
    measurement: Int
  }

  type Query {
    getUser(id: String, name: String): User
    getUsers: [User]
    getDrink(id: String!): Drink
    getDrinks(ingredients: [Ingredientinput]): [Drink]
    
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    createDrink(name: String!, ingredients: [Ingredientinput]!, glassType: String, creatorID: String!, instructions: String!, img: String): Drink
    changeDrink(id: String!, name: String, ingredients: [Ingredientinput], glassType: String, instructions: String, img: String): Drink
  }
`);

// The root provides the top-level API endpoints
const resolvers = {
  getUser: async ( {id, name}: {id:String, name:String}, context:any, info:any) => {
    return await getUserByID(id);
  },
  getUsers: async (args:any, context:any, info:any)  => {
    return await getUsers();
  },
  getDrink: async ({name}: {name:String}, context:any, info:any)  => {
    return await getDrinkByName(name);
  },
  getDrinks: async ({ingredients}: {ingredients: Ingredient[]}, context:any, info:any)  => {
    return await getDrinksByIngredient(ingredients);
  },
  createUser: async ({name, email}:{name: String, email: String}, context:any, info:any) => {
    console.log(name, email);
    return await createUser(name, email);
  },
  createDrink: async ({name, ingredients, glassType, creatorID, instructions, img}: {name: String, ingredients: Ingredient[], glassType: String, creatorID: String, instructions: String, img: String}, context:any, info:any) => {
    return await createDrink(name, ingredients, creatorID, glassType, instructions, img)
  }
}





mongoose.connect("mongodb://localhost/appdb");
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');