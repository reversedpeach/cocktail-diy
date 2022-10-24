//Here all database queries are defined.
import mongoose from "mongoose";
import { userModel, IUser } from "./schemas/user";
import { drinkModel } from "./schemas/drink";
import { createDiffieHellmanGroup } from "crypto";
const User = userModel;
const Drink = drinkModel;

//Create user
async function createUser(name: String, email: String, password: String) {
    const user = new User({ name: name, email: email, password: password });
    console.log("hejsan", user);
    user.save();
    console.log("Saved user: ", user);
    return user;//.id
}

async function setMybar(myNewBar: String[], userID: String) {
    const res = await User.updateOne({ "_id": userID }, { "myBar": myNewBar });
    const updatedUser = await User.findById(userID);
    return updatedUser.myBar;
}

async function getUsers() {
    console.log('reached getting users');
    return await User.find().populate('friends');
    /*console.log(typeof users);
    return users;*/
}

async function getUserByID(id: String) {
    const user = await await User.findById(id).populate('friends').populate("createdDrinks").populate("likedDrinks");
    return user;
}

async function getUserByName(name: String) {
    console.log('reached getUser with name ', name);
    User.findOne({ 'name': name }, 'name', function (err, results) {
        console.log(err);
        console.log(results);
        return results;
    })
}

async function getUserByEmail(email: String) {
    return await User.findOne({ 'email': email });
}

async function getFriends(id: String) {
    const user = await User.findById(id).populate('friends');
    return user.friends;
}

//Add validation for this, cannot add same friend twice or add oneself as friend
async function addFriend(userID: String, friendID: mongoose.Types.ObjectId) {
    const user = await User.findById(userID);
    var friends = user.friends;
    friends.push(friendID);
    const res = await User.updateOne({ "id": userID }, { "friends": friends });
    const updatedUser = await User.findById(userID).populate('friends');
    return updatedUser.friends;
}

//Create drink 
async function createDrink(name: String, ingredients: Ingredient[], creatorID: String, glassType: String, instructions: String, img: String, type: String) { //mongoose.Types.ObjectId
    const lowerCaseIngredients = ingredients.map((ingredient) => { return { name: ingredient.name.toLowerCase(), measurement: ingredient.measurement } });

    const drink = await Drink.create({
        name: name,
        ingredients: lowerCaseIngredients,
        creator: creatorID,
        glass: glassType,
        instructions: instructions,
        img: img,
        type: type,
    });
    drink.save();
    registerCreatedDrink(creatorID, drink._id);
    return drink;
}

async function registerCreatedDrink(userID: String, drinkID: mongoose.Types.ObjectId) {
    const user = await getUserByID(userID);
    var madeDrinks = user.createdDrinks;
    madeDrinks.push(drinkID);
    const res = await User.updateOne({ "_id": userID }, { "createdDrinks": madeDrinks });
}

interface Ingredient {
    name: String,
    measurement: String
}

function containsAllIngredients(drinkIngredients: String[], ingredients: String[]): boolean {
    const result = ingredients.every((ingred) => {
        const contains = drinkIngredients.includes(ingred);
        return contains;
    })
    return result;
}

async function getDrinksByIngredients(ingredients: String[]) {
    if (ingredients.length === 0) return await Drink.find();
    const drinks = await Drink.find({ "ingredients.name": { "$in": ingredients } }); //§
    const filteredDrinks = drinks.filter((drink) => {
        const drinkIngreds = drink.ingredients.map((ingred) => { return ingred.name });
        return containsAllIngredients(drinkIngreds, ingredients);
    })
    return filteredDrinks;
}

async function getDrinksByCreator(id: String) {
    const drinks = await Drink.find({ "creator": id });
    return drinks;
}

async function getDrinkByName(name: String) {
    console.log("fetching from database with name: ", name);
    const drink = await Drink.findOne({ "name": name });
    console.log(drink);
    return drink;
}

async function getDrinkByID(id: String) {
    return await Drink.findById(id);
}

export { addFriend, setMybar, createDrink, createUser, getDrinksByCreator, getDrinkByID, getDrinkByName, getUserByID, getUserByName, getUserByEmail, getUsers, getFriends, getDrinksByIngredients, Ingredient }

