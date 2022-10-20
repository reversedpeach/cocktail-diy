class CocktailModel {
	constructor() {
		this.username = "";
		this.password = "";
		this.seeingUsername = "User123";
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
		this.selectedmode = "discover";
		this.createddrink = [];
		this.favoritedrinks = "Pink Moon";
		this.likeddrinks = ["Abbey Cocktail", "Pink Moon", "Singapore Sling"];
		this.recentdrinks = ["Lone Tree Cocktail", "Rose", "Tom Collins", "Martini"];
		this.following = ["Beatrice", "Marcus", "Rongfei", "Mr.unknown"];
		this.users = ["asdf", "b23", "sdfas", "mhj", "vbv0", "xcer", "sdua", "x45w", "ppoz", "mnvr"];
		this.userdrinks = ["whaha water"];
		this.alluserdrinks = ["whaha water", "rapsolja", "mainbudle", "testing drinks"];
	}

	addMyBar(ing) {
		if (this.mybar.indexOf(ing) === -1) {
			this.mybar = this.mybar.concat(ing);
		}
		this.notifyObservers();
	}

	addFollowing(friend) {
		if (this.following.indexOf(friend) === -1) {
			this.following = this.following.concat(friend);
		}
		this.notifyObservers();
	}

	setIngList(ingList) {
		this.currentdrink = ingList;
		this.notifyObservers();
	}

	addIngShaker(ing) {
		var tempSet = new Set(this.currentdrink.concat(ing));
		this.currentdrink = Array.from(tempSet);
		console.log(ing + " is added");
		this.notifyObservers();
	}

	emptyShaker() {
		this.currentdrink = [];
	}
	setMode() {
		if (this.selectedmode === "discover") {
			this.selectedmode = "create";
		} else {
			this.selectedmode = "discover";
		}
		this.notifyObservers();
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
