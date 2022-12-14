/*
type Ingredient {
  name: String!,
  measurement: Int
}
*/
const typeDefs = `#graphql
type Drink {
  id: String!
  name: String!
  ingredients: [Ingredient]
  instructions: String
  creator: User
  img: String
  external: Boolean
  glass:String
  type:String
}

type User {
  id: String!
  token: String
  name: String!
  email: String!
  myBar: [String]!
  friends: [User]
  favoriteDrink: Drink
  likedDrinks: [String]
  createdDrinks: [Drink]
}

type Ingredient{
    name: String, 
    measurement: String
}

type APIdrink {
    strDrink: String,
    strDrinkThumb: String,
    idDrink: String
}

input Ingredientinput {
  name: String!,
  measurement: String
}

type Query {
  getUser(id: String, name: String): User
  getUsers: [User]
  getDrink(community:Boolean, name: String, id:String): Drink
  getDrinks(community:Boolean, ingredients: [String]): [Drink]
  login(email:String, password:String): User
  getAPIdrinks(ingredients:[String]): [APIdrink]
  getAllIngredients: [String] 
  getAllGlasses: [String] 
  getAllTypes: [String]
  getIngredient(id:String):Ingredient
}

type Mutation {
  register(name: String!, email: String!, password: String!, confirmPassword: String!): User
  createDrink(name: String!, ingredients: [Ingredientinput]!, glassType: String, instructions: String!, img: String, type: String): Drink
  changeMyBar(newMyBar:[String]): [String]
  changeLikedDrinks(drinkID:String!, add:Boolean): Boolean
  addFriend(friendID:String!): [User]
  changeDrink(id: String!, name: String, ingredients: [Ingredientinput], glassType: String, instructions: String, img: String): Drink
}
`;

//Fix get all ingredients return type

export { typeDefs }