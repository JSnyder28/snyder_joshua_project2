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

// appendChild Methods
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
// END

// Checking the value
var date = document.getElementById("dateAdded");

var getValue = function() {
		//console.log(date.value);
};
// END

// Is a checkbox checked or unchecked.
var checkbox = document.getElementById("go_to_meal");
//console.log(goToMeal);
var getValue = function () {
		if (checkbox.checked) {
				console.log(checkbox.value);
		}
};

addIt.addEventListener("click", getValue);