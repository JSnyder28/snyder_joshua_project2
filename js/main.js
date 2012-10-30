// Joshua Snyder
// VFW 1211
// Project 2

/* Target element by tag name array
var uoList = document.getElementsByTagName("li");
		//console.log(uoList[4]);
// END

// Change border when input field is active/inactive
var addRecipe = document.getElementById("addIt");
var rcpField = document.getElementById("rcpName");

var changeBorder = function () {
		rcpField.setAttribute("class", "hasFocus");
};

var defaultBorder = function () {
		rcpField.removeAttribute("class", "hasFocus");
};

rcpField.addEventListener("focus", changeBorder);
rcpField.addEventListener("blur", defaultBorder);
// END

// createElement Methods
var rcpList = document.createElement ("ol");
var rcpListItems = document.createElement ("li");
// END */

/* appendChild Methods
var parentList = document.getElementById("rcpInfo");
var recipeArr = [
		"Chicken", "Beef", "Pork", "Turkey", "Ham"
		];
parentList.appendChild(rcpList);
	//rcpList.appendChild(rcpListItems);
for (i=0, j=recipeArr.length; i<j; i++) {  // Use for the creation of the stored recipes page, possibly.
		var rcpListItems = document.createElement("li");
		rcpListItems.innerHTML = recipeArr[i];
		// Setting attributes dynamically.
		if (i%2 == 0) {
				rcpListItems.setAttribute("class", "even");
		}
		rcpList.appendChild(rcpListItems);
}
// END */

/* Checking the value
var getCatValue = function () {
		var _category = document.getElementById("category");
		//console.log(_category.value);
};

var getDateValue = function() {
		var date = document.getElementById("dateAdded");
		//console.log(date.value);
};

var getNameValue = function() {
		var name = document.getElementById("rcpName");
		//console.log(name.value);
};

var getDirectionsValue = function () {
		var _directions = document.getElementById("directions");
		//console.log(_directions.value);
};

var getRatingValue = function () {
		var _rating = document.getElementById("rating");
		//console.log(_rating.value);
};
// END

// Is a checkbox checked or unchecked.
var getCkValue = function () {
		var checkbox = document.getElementById("goToMeal");
		if (checkbox.checked) {
				//console.log(checkbox.value);
		}
};
// END */

// Confirming the creation of a recipe.
var confirmRcp = function () {
		var _confirm = confirm("Create Recipe?");
		if (_confirm) {
				alert("Recipe was added");

		} else {
			alert("Recipe was not added");
		}
};
// END

var _cat = document.getElementById("category");
var _date = document.getElementById("dateAdded");
var _name = document.getElementById("rcpName");
var _directions = document.getElementById("directions");
var _goTo = document.getElementById("goToMeal");
var _rating = document.getElementById("rating");

// Storing data using local storage.
var captureLocalData = function () {
		localStorage.setItem("Category", _cat.value);
		localStorage.setItem("Date Added", _date.value);
		localStorage.setItem("Recipe Name", _name.value);
		localStorage.setItem("Recipe Directions", _directions.value);
		localStorage.setItem("Go-To-Meal", _goTo.value);
		localStorage.setItem("Rating", _rating.value);
};

// END

// Displaying stored data.
var getLocalData = function () {
		for(i=0, j=localStorage.length; i<j; i++) {
				var localKey = localStorage.key(i);
				var localVal = localStorage.getItem(localKey);
				console.log(localKey+ " : " +localVal);
		}
};

//END

// EventListeners
_cat.addEventListener("blur", captureLocalData);
//_date.addEventListener("blur", captureLocalData);
//_name.addEventListener("blur", captureLocalData);
//_directions.addEventListener("blur", captureLocalData);
//_goTo.addEventListener("blur", captureLocalData);
//_rating.addEventListener("blur", captureLocalData);
addIt.addEventListener("click", getLocalData);

// END
