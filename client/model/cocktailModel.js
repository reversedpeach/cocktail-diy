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
	}

	addIngShaker(ing) {
		this.currentdrink = this.currentdrink.concat(ing);
		console.log(ing + " is added");
		this.notifyObservers();
	}

	emptyShaker() {
		this.currentdrink = [];
	}

	removeIngShaker(ing) {
		this.currentdrink = this.currentdrink.filter((elem) => elem !== ing);
		console.log(ing + " is removed");
		console.log(this.currentdrink);
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
			console.log(callback);
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
