// Joshua Snyder
// VFW 1211
// Project 2

// Target element by tag name array
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
// END

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

// Checking the value
var getCatValue = function () {
		var _category = document.getElementById("category");
		console.log(_category.value);
};

var getDateValue = function() {
		var date = document.getElementById("dateAdded");
		console.log(date.value);
};

var getNameValue = function() {
		var name = document.getElementById("rcpName");
		console.log(name.value);
};

var getDirectionsValue = function () {
		var _directions = document.getElementById("directions");
		console.log(_directions.value);
};

var getRatingValue = function () {
		var _rating = document.getElementById("rating");
		console.log(_rating.value);
};
// END

// Is a checkbox checked or unchecked.
var getValue = function () {
		var checkbox = document.getElementById("go_to_meal");
		if (checkbox.checked) {
				console.log(checkbox.value);
		}
};
// END

// Confirming the creation of a recipe.
var confirmRcp = function () {
		var _confirm = confirm("Create Recipe?");
		if (_confirm) {
				
		} else {
			alert("Recipe was not added");
		}
};
// END

addIt.addEventListener("click", confirmRcp);
addIt.addEventListener("click", getCatValue);
addIt.addEventListener("click", getDateValue);
addIt.addEventListener("click", getNameValue);
addIt.addEventListener("click", getDirectionsValue);
addIt.addEventListener("click", getValue);
addIt.addEventListener("click", getRatingValue);
