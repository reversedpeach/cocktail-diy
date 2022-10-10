//Here all database queries are defined.
import mongoose from "mongoose";
import User from "./schemas/user";
import Drink from "./schemas/drink";

//Create user
async function createUser(name: String, email: String){
    const user = new User({ name: name, email: email});
    console.log("hejsan", user);
    user.save();
    return user;
}
//Create drink
async function createDrink(name: String, ingredients: Ingredient[], creator: string){
    const user = await Drink.create({ 
        name: name,
        ingredients: ingredients,
        creator: creator,
    });
     
}

interface Ingredient{
    name: String, 
    meassurement: Number
}
//Get drink by ingredient
async function getDrinkByIngredient(ingredients:Ingredient[]) {
    const drink = await Drink.find({"ingredients.name": {"§in":ingredients} });
    return drink;
}

//Get drink by ingredients

export {createDrink, createUser, getDrinkByIngredient, Ingredient}

