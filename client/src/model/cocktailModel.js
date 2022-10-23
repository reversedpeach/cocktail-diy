import { CommentsDisabledOutlined } from "@mui/icons-material";

class CocktailModel {
	constructor() {
		this.isAuth = false
		this.userID = "";
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
		this.createddrink = { ingredients: [], measurements: [], instructions: "", img: "", glass: "", type: "" }
		this.favoritedrinks = "Pink Moon";
		this.likeddrinks = ["Abbey Cocktail", "Pink Moon", "Singapore Sling"];
		this.recentdrinks = ["Lone Tree Cocktail", "Rose", "Tom Collins", "Martini"];
		this.following = ["Beatrice", "Marcus", "Rongfei", "Mr.unknown"];
		this.users = ["asdf", "b23", "sdfas", "mhj", "vbv0", "xcer", "sdua", "x45w", "ppoz", "mnvr"];
		this.userdrinks = ["whaha water"];
		this.alluserdrinks = ["whaha water", "rapsolja", "mainbudle", "testing drinks"];
	}

	setUser(data) {
		console.log("Setting user in model with:", data, data.name, data.id, data.myBar);
		this.username = data.name;
		this.seeingUsername = data.name;
		this.userID = data.id;
		this.mybar = data.myBar || [];
		this.favoritedrinks = data.favoritedrink || [];
		this.alluserdrinks = data.createdDrinks || [];
		localStorage.setItem("token", data.token);
		this.isAuth = true;
		this.notifyObservers();
	}

	setUserName(username) {
		this.username = username;
		this.notifyObservers();
	}

	setSeeingUserName(seeingUsername) {
		this.seeingUsername = seeingUsername;
		this.notifyObservers();
	}

	addMyBar(ing) {
		ing = ing.toLowerCase();
		if (this.mybar.indexOf(ing) === -1) {
			this.mybar = this.mybar.concat(ing);
			this.notifyObservers();
		}
	}

	addFollowing(friend) {
		if (this.following.indexOf(friend) === -1) {
			this.following = this.following.concat(friend);
		}
		this.notifyObservers();
	}

	addMeasurementsDrink(mea) {
		this.createddrink.measurements.push(mea)
		this.notifyObservers();
	}

	addIngredientsDrink(ing) {
		this.createddrink.ingredients.push(ing)
		this.notifyObservers();
	}

	addInstructionsDrink(ins) {
		this.createddrink.instructions = ins;
		this.notifyObservers();
	}

	addTypeDrink(ty) {
		this.createddrink.type = ty;
		this.notifyObservers();
	}

	addGlassDrink(gla) {
		this.createddrink.glass = gla;
		this.notifyObservers();
	}

	addImgDrink(img) {
		this.createddrink.img = img;
		this.notifyObservers();

	}

	addLikedDrink(drink) {
		this.likeddrinks.push(drink);
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

	removeElemBar(ing) {
		this.mybar = this.mybar.filter((elem) => elem !== ing);
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
