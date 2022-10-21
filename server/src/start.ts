import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { IUser } from "./schemas/user";
import { getUser } from "./auth";
import mongoose from "mongoose";
import { CocktailsAPI } from "./cocktail-api";



interface MyContext {
    user: IUser
    dataSources: {
        cocktailsAPI: CocktailsAPI;
    }
}


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

startStandaloneServer(server, {
    context: async ({ req, res }) => {

        const { cache } = server;
        // Get the user token from the headers.
        const token = req.headers.authorization || '';
        //console.log(token);
        // Try to retrieve a user with the token
        const user = await getUser(token);

        // Add the user to the context
        return {
            user,
            dataSources: {
                cocktailsAPI: new CocktailsAPI({ cache }), //token: process.env.APIKEY,
            }
        };
    },
    listen: { port: 4000 },
}).then((url) => {
    require('dotenv').config();
    mongoose.connect("mongodb://localhost/appdb");
    console.log(`🚀  Server ready at:`, url.url);
});