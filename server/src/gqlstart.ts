import express from "express";
import mongoose from "mongoose";
import User from "./schemas/user";
import Drink from "./schemas/drink";
import {createDrink, createUser, getDrinkByIngredient, Ingredient, getDrinksByCreator, getDrinkByName, getUserByID, getUsers} from "./database";
import ingredient from "./schemas/ingredient";



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
    await mongoose.connect("mongodb://localhost/appdb");
    //const foundUser = await getUserByID('633dc8799f705b6a32206ca4');
    //const foundUsers = await getUsers(2);
    const foundUsers = await User.find().limit(2);
    console.log(typeof foundUsers);
    console.log(foundUsers);
    //console.log(foundUsers);
    /*
    const user = await createUser("Marcus","test@test.se");
    console.log("user id of created user:", user._id.toHexString());
    const ingredients:Ingredient[] = [{ name: "tequila", meassurement: 4}, {name:  "lemon", meassurement: 2}];
    const drink = await createDrink("newDrink", ingredients, user._id);
    const drink2 = await createDrink("anotherDrink", ingredients, user._id);
    console.log('saved drink: ',drink);
    //const foundUser = await User.findById(user._id);
    console.log('type of id',typeof user._id);
    console.log('found user test:',foundUser)
    const drinks = await getDrinksByCreator(user._id);
    console.log('Drinks found:', drinks);
    setTimeout(() => {console.log("finished waiting"), 1000});
    const foundDrink = getDrinkByName("newDrink");
    console.log('found:',foundDrink);
    foundDrink.then(() => {console.log("resolved to:", foundDrink)});

    
    //const user1 = await User.where("age").equals("12").where("name").equals("Marcus").populate("bestFriend").limit(1);
    //const user = new User({ name: "Kyle", age: 26 });
    //await user.save();

    //mongodb compass*/
}

