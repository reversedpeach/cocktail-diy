import { Drink } from "./cocktail-api";

function constructIngredientsArray(drink: Drink) {
    let ingredients: { name: String, measurement: String }[] = [];
    for (let i = 1; i < 16; i++) {
        if (drink["strIngredient" + i] !== null) {
            console.log(drink["strIngredient" + i], drink["strMeasure" + i])
            ingredients.push({ name: drink["strIngredient" + i], measurement: drink["strMeasure" + i] });
            //console.log(ingredients);
        }
    }
    return ingredients;
}


export { constructIngredientsArray }