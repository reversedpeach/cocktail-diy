import { Schema, Types, model } from "mongoose";

interface IUser {
    name: String;
    email: String;
    password: String;
    createdAt: Date;
    updatedAt: Date;
    myBar: String[];
    friends: Types.ObjectId[];
    favoriteDrink: Types.ObjectId;
    likedDrinks: String[];
    createdDrinks: Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    myBar: [String],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    favoriteDrink: {
        type: Schema.Types.ObjectId,
        ref: "Drink"
    },
    likedDrinks: [{
        type: String,
        default: []
    }],
    createdDrinks: [{
        type: Schema.Types.ObjectId,
        ref: "Drink"
    },],
})

const userModel = model("User", userSchema);


export { userModel, IUser };