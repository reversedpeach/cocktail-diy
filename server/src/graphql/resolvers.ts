import { addFriend, setMybar, getDrinksByIngredients, getDrinkByName, getDrinkByID, getUsers, getUserByID, createDrink, Ingredient } from "../database";
import { registerNewUser, login } from "../auth";
import { GraphQLError } from "graphql";
import { constructIngredientsArray } from "../util";


const resolvers = {
    Query: {
        getUser: async (parent, args, context, info) => {
            return await getUserByID(args.id);
        },
        getUsers: async (parent, args: any, context, info) => {
            return await getUsers();
        },
        getDrink: async (parent: any, args, { dataSources }, info: any) => {
            console.log(args);
            if (args.community) {
                if (args.name !== null) {
                    return await getDrinkByName(args.name);
                }
                if (args.id !== null) {
                    return await getDrinkByID(args.id);
                }
            }
            const response = await dataSources.cocktailsAPI.getDrinkByID(args.id);
            const drink = response.drinks[0];
            const ingredients = constructIngredientsArray(drink);
            console.log(ingredients);
            return {
                name: drink.strDrink,
                id: drink.idDrink,
                img: drink.strDrinkThumb,
                ingredients: ingredients
            }
        },
        getDrinks: async (parent: any, { ingredients, community }: { ingredients: String[], community: boolean }, { dataSources }, info: any) => {
            if (community) {
                /*const drinks = await getDrinksByIngredient(ingredients);
                const communityDrinks = drinks.map((drink) => {
                    drink.community:true;
                })*/
                return await getDrinksByIngredients(ingredients);
            }
            const response = await dataSources.cocktailsAPI.getDrinks(ingredients);
            const reformattedResponse = response.drinks.map((drink) => {
                //console.log(drink);
                //const ingredients= constructIngredientsArray(drink);
                return {
                    name: drink.strDrink,
                    id: drink.idDrink,
                    img: drink.strDrinkThumb,
                    //ingredients: ingredients
                }
            })
            console.log(reformattedResponse);
            return reformattedResponse
        },
        login: async (parent, { email, password }: { email: String, password: String }, context: any, info: any) => {
            return await login(email, password);
        },
        getAPIdrinks: async (parent, args, { dataSources }, info) => {
            const response = await dataSources.cocktailsAPI.getDrinks(args.ingredients);
            return response.drinks;
        },
        getAllIngredients: async (parent, args, { dataSources }, info) => {
            return await dataSources.cocktailsAPI.getAllIngredients();

        },
        getIngredient: async (parent, args, { dataSources }, info) => {
            const response = await dataSources.cocktailsAPI.getIngredient(args.id);
            console.log(response.ingredients[0].strIngredient);
            return response.ingredients[0].strIngredient;
        },
    },
    Mutation: {
        register: async (parent: any, args: any, context: any, info: any) => {
            console.log(args.name, args.email);
            console.log(context);
            try {
                return await registerNewUser(args.name, args.email, args.password, args.confirmPassword);
            } catch (error) {
                return error;
            }
        },
        createDrink: async (parent, { name, ingredients, glassType, instructions, img }: { name: String, ingredients: Ingredient[], glassType: String, instructions: String, img: String }, context: any, info: any) => {
            if (!context.user) throw new GraphQLError("you must be logged in to access this feature");
            return await createDrink(name, ingredients, context.user, glassType, instructions, img)
        },
        changeMyBar: async (parent, { newMyBar }, context, info) => {
            if (!context.user) throw new GraphQLError("you must be logged in to access this feature");
            return await setMybar(newMyBar, context.user);
        },
        addFriend: async (parent, { friendID }, context, info) => {
            if (!context.user) throw new GraphQLError("you must be logged in to access this feature");
            return await addFriend(context.user, friendID);
        }
    }
}

export { resolvers };