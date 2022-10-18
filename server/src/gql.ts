import express from "express";
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLFloat} from "graphql";
import { getDrinkByIngredient, getDrinkByName, getUserByID, getFriends, getIngredients, createUser, createDrink, getDrinksByCreator } from "./database";
import drink from "./schemas/drink";
 
//const expressGraphQL = require("express-graphql").graphqlHTTP;
const { graphqlHTTP } = require('express-graphql');


const app = express();



const UserType:GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        friends: {
            type: UserType,
            resolve: (user) => {
                //getFriends
                //return 
            }
        },
        favorieDrink: {
            type: DrinkType,
            resolve: (user) => ({
                //getFavoriteDrink(user)
                //return 
            })
        },
        likedDrinks: {
            type: GraphQLList(DrinkType),
            resolve: (user) => {
                //getLikedDrinks(user)
                //return 
            }
        },
        recentlyMadeDrinks: {
            type: GraphQLList(DrinkType),
            resolve: (user) => {
                //getRecentDrinks(user)
                //return 
            }
        },
        
    }) 
})


const DrinkType:GraphQLObjectType = new GraphQLObjectType({
    name: 'Drink',
    description: 'a drink',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        ingredients: {
            type: GraphQLList(IngredientType),
            resolve: (drink) => {
                return getIngredients(drink.id);//??
            }
        },
        creator: {
            type: UserType,

        }
    }) 
})

const IngredientType = new GraphQLObjectType({
    name: 'Ingredient',
    description: 'an ingredient',
    fields: () => ({
        //id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        measurement: {type: GraphQLNonNull(GraphQLFloat)},
    }) 
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        drink: {
            type: DrinkType,
            description: 'a drink',
            args: {
                name: {type: GraphQLString},
                id: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve:  async (parent, args) => {
                /*console.log("got to resolver, name is:", args.name);
                const drink = getDrinkByName(args.name);
                console.log('resolving query with drink:', drink);
                drink.then(() => {console.log('promise resolved to:', drink)});*/
                console.log("Reached resolver");
                const drinkPromise =  await getDrinksByCreator(args.creator);
                console.log("initiated db fetch, promise: ", drinkPromise);
                return drinkPromise;
                //drinkPromise.then(() => {console.log(drinkPromise); return drinkPromise});
                /*
                () => {
                    console.log("resolved promise, drink is:", drinkPromise);
                    return drinkPromise
                }
                */
            },//getDrinkByIngredient(args.ingredients)
        },
        drinks: {
            type: new GraphQLList(DrinkType), //new?
            description: 'list of drinks',
            args:{
                creator: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve: () => {}//getDrinks
        },
        user: {
            type: UserType,
            description: 'a user',
            args: {
                name: {type: GraphQLString},
                id: {type: GraphQLString}
            },
            resolve: async (parent, args) => {
                return await getUserByID(args.id)
            }
        },
        friends: {
            type: new GraphQLList(UserType),
            description: 'a users friends',
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (parent, args) =>  {return getFriends(args.id)}
        }
    })
})



const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            description: 'Create a User',
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                email: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
                const user = createUser(args.name, args.email);
                return user;
            }
        },
        /*addDrink: {
            type: DrinkType,
            description: 'Add an drink',
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                ingredients: {type: GraphQLList(IngredientType)},
                glassType: {type: GraphQLString},
                creator: {type: GraphQLNonNull(GraphQLInt)}, //userID
                instructions: {type: GraphQLString},
                img: {type: GraphQLString}, //How to send an image to the server?
            },
            resolve: (parent, args) => {
                const drink = createDrink(args.name, args.ingredients, args.creator) //user ids ints or strings?
                return drink
            }
        }*/
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true
}))
app.listen(8080, () => console.log('Server running'))



