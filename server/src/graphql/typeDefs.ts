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
  creator: User
  img: String
  community: Boolean
}

type User {
  id: String!
  token: String
  name: String!
  email: String!
  friends: [User]
  favoriteDrink: Drink
  likedDrinks: [Drink]
  recentlyMadeDrinks: [Drink]
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
  measurement: Int
}

type Query {
  getUser(id: String, name: String): User
  getUsers: [User]
  getDrink(community:Boolean, name: String, id:String): Drink
  getDrinks(community:Boolean, ingredients: [String]): [Drink]
  login(email:String, password:String): User
  getAPIdrinks(ingredients:[String]): [APIdrink]
  getAllIngredients: [Ingredient]
  getIngredient(id:String):Ingredient
}

type Mutation {
  register(name: String!, email: String!, password: String!, confirmPassword: String!): User
  createDrink(name: String!, ingredients: [Ingredientinput]!, glassType: String, instructions: String!, img: String): Drink
  changeMyBar(newMyBar:[String]): [String]
  addFriend(friendID:String!): [User]
  changeDrink(id: String!, name: String, ingredients: [Ingredientinput], glassType: String, instructions: String, img: String): Drink
}
`;

export { typeDefs }