import { RESTDataSource } from '@apollo/datasource-rest';

interface Drink {
    idDrink: String,
    strDrink: String,
    strInstructions: String,
    strDrinkThumb: String,
    strAlcoholic: String,
    strGlass: String,
    strIngredient1: String
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strIngredient6: String,
    strIngredient7: String,
    strIngredient8: String,
    strIngredient9: String,
    strIngredient10: String,
    strIngredient11: String,
    strIngredient12: String,
    strIngredient13: String,
    strIngredient14: String,
    strIngredient15: String,
    strMeasure1: String,
    strMeasure2: String,
    strMeasure3: String,
    strMeasure4: String,
    strMeasure5: String,
    strMeasure6: String,
    strMeasure7: String,
    strMeasure8: String,
    strMeasure9: String,
    strMeasure10: String,
    strMeasure11: String,
    strMeasure12: String,
    strMeasure13: String,
    strMeasure14: String,
    strMeasure15: String,
}

interface Ingredient {
    idIngredient: String,
    strIngredient: String,
    strDescription: String,
    strType: String,
    strAlcohol: String,
    strABV: String,
}


class CocktailsAPI extends RESTDataSource {
    override baseURL = `https://www.thecocktaildb.com/api/json/v2//${process.env.APIKEY}/`;

    async getDrinks(ingredients: String[]): Promise<Drink[]> {
        console.log(`reached restapi method with ingredients: ${ingredients}`);
        return this.get(`filter.php?i=${encodeURIComponent(ingredients.toString())}`);
    }

    async getDrinkByID(id: String): Promise<Drink> {
        return await this.get(`lookup.php?i=${encodeURIComponent(id.toString())}`);
    }

    getAllIngredients(): Promise<Ingredient[]> {
        return this.get(`"list.php?i=list"`);
    }

    getIngredient(id: String): Promise<Ingredient> {
        return this.get(`search.php?i=${encodeURIComponent(id.toString())}`);
    }
}

export { CocktailsAPI, Ingredient, Drink }