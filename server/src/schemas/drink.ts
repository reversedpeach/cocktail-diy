import mongoose from "mongoose";

const drinkSchema = new mongoose.Schema({
    name: String,
    ingredients: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Ingredient",
    }],
    glassType: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updated: {
        type: Date,
        default: () => Date.now(),
    }, 
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",},
    instructions: String,
    img: String,
})

drinkSchema.statics.findByIngredient = function(ingredient){
    return this.find({name: new RegExp(ingredient, 'i')}) //i case insencitive
}


export default mongoose.model("Drink", drinkSchema);