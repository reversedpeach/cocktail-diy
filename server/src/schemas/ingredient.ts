import mongoose from "mongoose";


const ingredientSchema = new mongoose.Schema({
    name: String,
    meassurement: Number,
})

export default mongoose.model("Ingredient", ingredientSchema);