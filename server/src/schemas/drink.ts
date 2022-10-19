import {Schema,Types, model} from "mongoose";


interface IDrink{
    name: string;
    ingredients: {name:String, measurement: Number}, 
    glassType: string, 
    createdAt: Date;
    updatedAt: Date;
    creator: Types.ObjectId;
    instructions: string, 
    img: string;
}


const drinkSchema = new Schema<IDrink>({
    name: {type: String, required:true},
    ingredients: [{
        type: {name:String, measurement: Number},
    }],
    glassType: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }, 
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",},
    instructions: String,
    img: String,
})

/*
drinkSchema.statics.findByIngredient = function(ingredient){
    return this.find({name: new RegExp(ingredient, 'i')}) //i case insencitive
}*/


export default model("Drink", drinkSchema);