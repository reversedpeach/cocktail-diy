import {Schema,Types, model} from "mongoose";

/*
age: {
        type: Number,
        min: 1,
        validate:{
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`, //validation only runs via create and save method
        }
    },
 */

interface IUser{
    name: String;
    email: String;
    createdAt: Date;
    updatedAt: Date;
    friends: Types.ObjectId[];
    favoriteDrink: Types.ObjectId;
    likedDrinks: Types.ObjectId[];
    recentlyMadeDrinks: Types.ObjectId[];
}  

const userSchema = new Schema<IUser>({
    name: {type: String, required:true},
    email: {type: String, required:true},
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }, 
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",}],
    favoriteDrink: {
        type: Schema.Types.ObjectId,
        ref: "Drink"},
    likedDrinks: [{
        type: Schema.Types.ObjectId,
        ref: "Drink"},],
    recentlyMadeDrinks: [{
        type: Schema.Types.ObjectId,
        ref: "Drink"},],
})

const userModel = model("User", userSchema);

/*
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true, 
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updated: {
        type: Date,
        default: () => Date.now(),
    }, 
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",}],
    favoriteDrink: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drink"},
    likedDrinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drink"},],
    recentlyMadeDrinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drink"},],
})*/

/*
userSchema.methods.sayHi = function(){
    console.log(`Hi, my name is ${this.name}`);
}

userSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, 'i')}) //i case insencitive
}*/
/*
userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, 'i')}) //i case insencitive
}

userSchema.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`
})
//Middlewares
userSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    next();
})
userSchema.post('save', function(doc, next){
    doc.sayHi();
    next();
})
*/
export {userModel, IUser};