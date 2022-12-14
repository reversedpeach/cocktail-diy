import { CommentsDisabledOutlined } from "@mui/icons-material";

class CocktailModel {
	constructor() {
		this.isAuth = false;
		this.userID = "";
		this.username = "";
		this.password = "";
		this.seeingUsername = "User123";
		this.subscribers = [];
		this.mybar = []; // array with objects of liqours
		this.currentdrink = []; // array with ingredients
		this.drinkdetails = null;
		this.selectedmode = "discover";
		//this.createddrink = { ingredients: [], measurements: [], instructions: "", img: "", glass: "", type: "" }
		this.createddrink = { name: "", ingredients: [], instructions: "", img: "", glass: "", type: "" };
		this.favoritedrinks = "Pink Moon";
		this.likeddrinks = ["Abbey Cocktail", "Pink Moon", "Singapore Sling"];
		this.recentdrinks = ["Lone Tree Cocktail", "Rose", "Tom Collins", "Martini"];
		this.following = ["Beatrice", "Marcus", "Rongfei", "Mr.unknown"];
		this.users = ["asdf", "b23", "sdfas", "mhj", "vbv0", "xcer", "sdua", "x45w", "ppoz", "mnvr"];
		this.userdrinks = ["whaha water"];
		this.alluserdrinks = ["whaha water", "rapsolja", "mainbudle", "testing drinks"];
		this.communityDrink = false;
	}

	setUser(data) {
		this.username = data.name;
		this.seeingUsername = data.name;
		this.userID = data.id;
		this.mybar = data.myBar || [];
		this.favoritedrinks = data.favoritedrink || [];
		this.alluserdrinks = data.createdDrinks || [];
		this.likeddrinks = data.likedDrinks || [];
		localStorage.setItem("token", data.token);
		if (data) {
			this.isAuth = true;
		}
		this.notifyObservers();
	}

	logOut() {
		localStorage.setItem("token", null);
		this.setUser(null);
		this.isAuth = false;
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

	resetCreatedDrink() {
		this.createddrink = { name: "", ingredients: [], instructions: "", img: "", glass: "", type: "" };
		//this.currentdrink = [];
	}

	addNameDrink(name) {
		this.createddrink.name = name;
		this.notifyObservers();
	}

	addMeasurementsDrink(mea) {
		this.createddrink.measurements.push(mea);
		this.notifyObservers();
	}

	addIngredientsDrink(ing, amount) {
		this.createddrink.ingredients.push({ name: ing, measurement: amount });
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
		if (!this.likeddrinks.includes(drink)) {
			this.likeddrinks = [...this.likeddrinks, drink];
			this.notifyObservers();
			return true
		}
		return false;
	}

	removeLikedDrink(drink) {
		if (this.likeddrinks.includes(drink)) {
			this.likeddrinks = this.likeddrinks.filter((elem) => elem !== drink);
			this.notifyObservers();
			return true
		}
		return false
	}

	setIngList(ingList) {
		this.currentdrink = ingList;
		this.notifyObservers();
	}

	addIngShaker(ing) {
		var tempSet = new Set(this.currentdrink.concat(ing));
		this.currentdrink = Array.from(tempSet);
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

	setDetails(drinkID, external) {
		this.drinkdetails = drinkID;
		this.communityDrink = false;
		if (drinkID) {
			if (!external) {
				this.communityDrink = true;
			}
		}
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
		this.mybar = this.mybar.filter((elem) => elem.toLowerCase() !== ing.toLowerCase());
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
