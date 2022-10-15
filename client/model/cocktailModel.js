class CocktailModel {
	constructor() {
		this.subscribers = [];
		this.mybar = [
			"Gin",
			"Vodka",
			"Cointreau",
			"Amaretto",
			"Rum",
			"Whiskey",
			"Champagne",
			"Bourbon",
			"Tequila",
			"Bacardi",
		]; // array with objects of drinks
		this.currentdrink = []; // array with ingredients
		this.drinkdetails = null;
		this.favoritedrinks = "Pink Moon";
		this.likeddrinks = ["Abbey Cocktail", "Pink Moon", "Singapore Sling"];
		this.recentdrinks = ["Lone Tree Cocktail", "Rose", "Tom Collins", "Martini"];
	}

	addMyBar(ing) {
		this.mybar = this.mybar.concat(ing);
		this.notifyObservers();
	}

	setIngList(ingList) {
		this.currentdrink = ingList;
		this.notifyObservers();
	}

	addIngShaker(ing) {
		if (this.currentdrink.indexOf(ing) == -1) {
			this.currentdrink = this.currentdrink.concat(ing);
		}
		console.log(ing + " is added");
		this.notifyObservers();
	}

	emptyShaker() {
		this.currentdrink = [];
	}

	setDetails(drink) {
		this.drinkdetails = drink;
		this.notifyObservers();
	}

	getDetailsDrink() {
		return this.drinkdetails;
	}

	removeIngShaker(ing) {
		this.currentdrink = this.currentdrink.filter((elem) => elem !== ing);
		this.notifyObservers();
	}

	getCurrentDrink() {
		return this.currentdrink;
	}

	addObserver(obs) {
		this.subscribers = this.subscribers.concat(obs);
		return () => this.removeObserver(obs);
	}

	notifyObservers() {
		this.subscribers.forEach((callback) => {
			//console.log(callback);
			try {
				callback();
			} catch (err) {
				console.error("Error ", err, callback);
			}
		});
	}
	removeObserver(obs) {
		this.subscribers = this.subscribers.filter((o) => o !== obs);
	}
}

export default CocktailModel;
