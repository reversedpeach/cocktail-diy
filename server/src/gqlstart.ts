import express from "express";
import mongoose from "mongoose";
import User from "./schemas/user";
import Drink from "./schemas/drink";
import {createDrink, createUser, getDrinkByIngredient, Ingredient} from "./database";
import ingredient from "./schemas/ingredient";

mongoose.connect("mongodb://localhost/appdb");

/*const user = New User({name: "Kyle", age: 26});
user.save().then(()=> console.log("user saved"))*/

/*async function run(){
    await User.create({ name: "Kyle", age: 26 });
    //same as above
    const user1 = await User.where("age").equals("12").where("name").equals("Marcus").populate("bestFriend").limit(1);
    console.log(user1.namedEmail);
    const user = new User({ name: "Kyle", age: 26 });
    await user.save();
}*/

//const app = express();

run();

async function run(){
    const user = await createUser("Marcus","test@test.se");
    console.log("hej", user._id.toString());
    const ingredients:Ingredient[] = [{ name: "tequila", meassurement: 4}, {name:  "lemon", meassurement: 2}];
    const drink = await createDrink("newDrink", ingredients, user._id.toString());
    console.log(drink);
    
    //const user1 = await User.where("age").equals("12").where("name").equals("Marcus").populate("bestFriend").limit(1);
    //const user = new User({ name: "Kyle", age: 26 });
    //await user.save();
}

