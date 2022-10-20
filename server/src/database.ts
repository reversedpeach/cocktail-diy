//Here all database queries are defined.
import mongoose from "mongoose";
import {userModel, IUser} from "./schemas/user";
import Drink from "./schemas/drink";
import ingredient from "./schemas/ingredient";
const User =userModel;

//Create user
async function createUser(name: String, email: String){
    const user = new User({ name: name, email: email});
    console.log("hejsan", user);
    user.save();
    console.log("Saved user: ", user);
    return user;//.id
}

async function getUsers(){
    console.log('reached getting users');
    return await User.find().populate('friends');
    /*console.log(typeof users);
    return users;*/
}

async function getUserByID(id:String){
    console.log('reached getUser with id ',id);
    const user = await User.findById(id).populate('friends');
    return user;
}

async function getUserByName(name:String){
    console.log('reached getUser with name ',name);
    User.findOne({'name': name}, 'name', function (err, results){
        console.log(err);
        console.log(results);
        return results;
    })
}

async function getFriends(id:String){
    const user = await User.find({"id": id}).populate('friends')
    console.log('user:', user);
    //return friends;
}


async function getIngredients(id:String){
    const drink = await Drink.find({"id": id}).populate('ingredients')
    //const ingredients = drink['ingredients'];
    console.log('Drink:', drink);
    //return ingredients;
}

//Create drink 
async function createDrink(name: String, ingredients: Ingredient[], creatorID: String, glassType: String, instructions: String, img: String ){ //mongoose.Types.ObjectId
    //console.log("ingredients:", ingredients);
    const drink = await Drink.create({ 
        name: name,
        ingredients: ingredients,
        creator: creatorID,
        glassType : glassType,
        instructions: instructions,
        img: img,
    });
    drink.save();
    return drink;
}

interface Ingredient{
    name: String, 
    measurement: Number
}
//Get drink by ingredient 
async function getDrinksByIngredient(ingredients:Ingredient[]) {
    //console.log('ingredients: ', ingredients.map(ingredient => {return ingredient.name;}));
    console.log(ingredients);
    const ingrednames = ingredients.map((ingredient) =>{return ingredient.name});
    const drinks = await Drink.find({"ingredients.name": {"§in":ingredients} });
    return drinks;
}

async function getDrinksByCreator(id:mongoose.Types.ObjectId) {
    //console.log('id:',id.toString());
    const user = await User.findById(id);
    console.log('found user via get drinks:',user);
    const drinks = await Drink.findOne({"creator": id});
    return drinks;
}

async function getDrinkByName(name:String) {
    console.log("got to getDrink function, name is:", name);
    const drink = await Drink.find({"name": name});
    console.log("Found drink in db:",drink);
    return drink;
}



//Get drink by ingredients

export {createDrink, createUser, getDrinksByCreator, getDrinkByName, getUserByID,getUserByName, getUsers, getFriends, getIngredients, getDrinksByIngredient, Ingredient}

