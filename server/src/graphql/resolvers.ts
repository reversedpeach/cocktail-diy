import { likeDrink, unlikeDrink, addFriend, setMybar, getDrinksByIngredients, getDrinkByName, getDrinkByID, getUsers, getUserByID, createDrink, Ingredient } from "../database";
import { registerNewUser, login } from "../auth";
import { GraphQLError } from "graphql";
import { constructIngredientsArray } from "../util";
import { drinkModel } from "../schemas/drink";


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
                if (args.name) {
                    return await getDrinkByName(args.name);
                }
                if (args.id) {
                    const drink = await getDrinkByID(args.id);
                    console.log(drink);
                    return drink;
                }
            }
            if (args.community === null) { //if community isnt specified, return drink from either database or cocktaildb api
                const drink = await getDrinkByID(args.id);
                if (drink !== null) return drink;
            }
            const response = await dataSources.cocktailsAPI.getDrinkByID(args.id);
            const drink = response.drinks[0];
            const ingredients = constructIngredientsArray(drink);
            console.log(ingredients);
            return {
                name: drink.strDrink,
                id: drink.idDrink,
                img: drink.strDrinkThumb,
                ingredients: ingredients,
                instructions: drink.strInstructions,
                glass: drink.strGlass,
                type: drink.strAlcoholic
            }
        },
        getDrinks: async (parent: any, { ingredients, community }: { ingredients: String[], community: boolean }, { dataSources }, info: any) => {
            console.log("reached getDrinks")
            console.log(ingredients);
            const ingreds = ingredients.map((ingredient) => {
                return ingredient.toLowerCase();
            })
            if (community) {
                const drinks = await getDrinksByIngredients(ingreds);
                console.log(drinks);
                return drinks;
                /*const communityDrinks = drinks.map((drink) => {
                    drink.community:true;
                })*/
                //return await getDrinksByIngredients(ingredients);
            }
            const response = await dataSources.cocktailsAPI.getDrinks(ingreds);
            const communityDrinks = await getDrinksByIngredients(ingreds);
            /*const reformattedCommunityDrinks = communityDrinks.map((drink) => {
                return {
                    drink, community: true
                }

            })*/
            console.log("community drinks: ", communityDrinks);
            //console.log("Recieved from api on server: ", response);
            if (response.drinks == 'None Found') return communityDrinks;
            const reformattedResponse = response.drinks.map((drink) => {
                //console.log(drink);
                //const ingredients= constructIngredientsArray(drink);
                return {
                    name: drink.strDrink,
                    id: drink.idDrink,
                    img: drink.strDrinkThumb,
                    external: true,
                    //ingredients: ingredients
                }
            })
            //console.log(reformattedResponse);
            const result = [...communityDrinks, ...reformattedResponse];
            console.log("result: ", result);
            return result;
        },
        login: async (parent, { email, password }: { email: String, password: String }, context: any, info: any) => {
            return await login(email, password);
        },
        getAPIdrinks: async (parent, args, { dataSources }, info) => {
            const response = await dataSources.cocktailsAPI.getDrinks(args.ingredients);
            return response.drinks;
        },
        getAllIngredients: async (parent, args, { dataSources }, info) => {
            //console.log("made it to resolver", JSON.stringify(dataSources));
            const response = await dataSources.cocktailsAPI.getAllIngredients();
            //console.log("Ingredients recieved: ", response.drinks);
            return response.drinks.map((ingred) => { return ingred.strIngredient1 });

        },
        getIngredient: async (parent, args, { dataSources }, info) => {
            const response = await dataSources.cocktailsAPI.getIngredient(args.id);
            console.log(response.ingredients[0].strIngredient);
            return {
                name: response.ingredients[0].strIngredient,
                img: response.ingredients[0].strDrinkThumb
            }
        },
        getAllTypes: async (parent, args, { dataSources }, info) => {
            const response = await dataSources.cocktailsAPI.getAllTypes();
            return response.drinks.map((type) => { return type.strAlcoholic });
        },
        getAllGlasses: async (parent, args, { dataSources }, info) => {
            const response = await dataSources.cocktailsAPI.getAllGlasses();
            return response.drinks.map((glass) => { return glass.strGlass });
        },
    },
    Mutation: {
        register: async (parent: any, args: any, context: any, info: any) => {
            console.log(args.name, args.email);
            console.log(context);
            try {
                return await registerNewUser(args.name, args.email, args.password, args.confirmPassword);
            } catch (error) {
                console.log("throwing error ", error);
                throw new GraphQLError(error);
            }
        },
        createDrink: async (parent, { name, ingredients, glassType, instructions, img, type }: { name: String, ingredients: Ingredient[], glassType: String, instructions: String, img: String, type: String }, context: any, info: any) => {
            if (!context.user) throw new GraphQLError("you must be logged in to access this feature");
            try {
                return await createDrink(name, ingredients, context.user, glassType, instructions, img, type)
            } catch (error) {
                console.log("throwing error", error);
                throw new GraphQLError(error);
            }

        },
        changeMyBar: async (parent, { newMyBar }, context, info) => {
            if (!context.user) throw new GraphQLError("you must be logged in to access this feature");
            console.log("new bar: ", newMyBar, " user: ", context.user);
            return await setMybar(newMyBar, context.user);
        },
        addFriend: async (parent, { friendID }, context, info) => {
            if (!context.user) throw new GraphQLError("you must be logged in to access this feature");
            return await addFriend(context.user, friendID);
        },
        changeLikedDrinks: async (parent, args, context, info) => {
            if (!context.user) throw new GraphQLError("you must be logged in to access this feature");
            console.log("drink: ", args.drinkID, "add: ", args.add);
            var res = false;
            if (args.add) {
                res = await likeDrink(args.drinkID, context.user);
            } else {
                res = await unlikeDrink(args.drinkID, context.user);
            }
            console.log("success: ", res);
            return res;
        }
    }
}

export { resolvers };