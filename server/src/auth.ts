import { getUserByID, createUser, getUserByEmail, } from "./database";
import bcryptjs from "bcryptjs";
import { GraphQLError } from "graphql";
import UserInputError from '@apollo/server';
import { validateLoginInput, validateRegisterInput } from "./validators";
import jwt from "jsonwebtoken";

async function registerNewUser(name: String, email: String, password: String, confirmPassword: String) {
    try {
        validateRegisterInput(name, email, password, confirmPassword);
        console.log("validated input")
    } catch {
        console.log("invalid input");
        return new GraphQLError("invalid input");
    }
    console.log("trying to find user");
    const user = await getUserByEmail(email);

    if (user !== null) {
        console.log("user already exists");
        return new GraphQLError("User already exists");
    }
    const hashedPassword = await bcryptjs.hash(password.toString(), 10); //primitive string needed in hash
    const newUser = await createUser(name, email, hashedPassword);
    console.log('new User: ', newUser._id);
    const token = await generateJWToken(newUser);

    return {
        token: token,
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
        myBar: newUser.myBar,
        friends: newUser.friends,
        favoriteDrink: newUser.favoriteDrink,
        likedDrinks: newUser.likedDrinks,
        recentlyMadeDrinks: newUser.createdDrinks
    }
}

async function generateJWToken(user: any) {//fix type
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    },
        process.env.SECRET_KEY,
        { expiresIn: '2h' }
    );
}



async function login(email: String, password: String) {
    try {
        validateLoginInput(email, password)
    } catch (error) {
        console.log("invalid input");
        return new GraphQLError("invalid input");
    }
    const user = await getUserByEmail(email);
    //console.log('found user:', user);
    if (user !== null) {
        const passwordCheck = await bcryptjs.compare(password.toString(), user.password.toString());
        if (passwordCheck) {
            const token = await generateJWToken(user);
            console.log(token);
            return {
                token: token,
                id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                myBar: user.myBar,
                friends: user.friends,
                favoriteDrink: user.favoriteDrink,
                likedDrinks: user.likedDrinks,
                recentlyMadeDrinks: user.createdDrinks
            }
        }
    }
    console.log("incorrect email or password");
    return new GraphQLError("incorrect email or password");
}

//process.env.REFRESH_TOKEN_SECRET
async function getUser(token: any) {
    const user = await jwt.verify(token, process.env.SECRET_KEY, async (err: any, payload: any) => {
        if (err) return new GraphQLError("unauthorized");
        const userID = payload.id;
        const user = await getUserByID(userID);
        //console.log("verified user: ", user)
        return user;
    })
    //console.log("returning user: ", user)

    return user._id;
}

export { registerNewUser, login, getUser }
