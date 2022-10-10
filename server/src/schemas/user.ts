import mongoose from "mongoose";

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

    

const userSchema = new mongoose.Schema({
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
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",}],
    favoriteDrink: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Drink"},
    likedDrinks: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Drink"},],
    recentlyMadeDrinks: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Drink"},],
})

userSchema.methods.sayHi = function(){
    console.log(`Hi, my name is ${this.name}`);
}

userSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, 'i')}) //i case insencitive
}
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
export default mongoose.model("User", userSchema);