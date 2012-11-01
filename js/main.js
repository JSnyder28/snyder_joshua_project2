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
// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

			// getElementById Function.
			function $(x) {
					var _element = document.getElementById(x);
					return _element;
			}

			// Create select field element and populate with options.
			function makeCats() {
					var formTag = document.getElementsByTagName("form"),
							selectLi = $('select'),
							makeSelect = document.createElement('select');
							makeSelect.setAttribute("id", "category");
					for(var i=0, j=foodCategories.length; i<j; i++) {
							var makeOption = document.createElement('option');
							var optText = foodCategories[i];
							makeOption.setAttribute("value", optText);
							makeOption.innerHTML = optText;
							makeSelect.appendChild(makeOption);
					}
					selectLi.appendChild(makeSelect);
			}

			// Find value of checkbox.
			var getCheckboxValue = function () {
					if($('goToMeal').checked) {
							favoriteValue = $('goToMeal').value;
					} else {
							favoriteValue = "No"
					}
			}

			// Find value of range slider.
			var  getRatingValue = function () {
						var ratingValue = $('rating').value;
			}

			function storeData() {
					var id = Math.floor(Math.random()*100000001);
					// Gather all form values and store it as an object.
					// Object properties contain an array with form labels and inout values.
					getCheckboxValue();
					var item 						= {};
							item.cat 				= ["Category:", $('category').value];
							item.date 			= ["Date Added", $('dateAdded').value];
							item.rcpName 		= ["Recipe Name:", $('rcpName').value];
							item.directions = ["Directions:", $('directions').value];
							item.favorite 	= ["Go-To-Meal?:", favoriteValue ];
							//item.rating 		= ["Rating:", ratingValue];
				
					// Save data to local storage using stringify.
					localStorage.setItem(id, JSON.stringify(item));
					alert("Recipe added!");

			}

			var getData = function () {
					// Write data from the local storage to the browser.
					var makeDiv = document.createElement('div');
					makeDiv.setAttribute("id", "items");
					var makeList = document.createElement('ul');
					makeDiv.appendChild(makeList);
					// Creates container.
					for(var i=0, j=localStorage.length; i<j; i++) {
							var makeLi = document.createElement('li');
							makeList.appendChild(makeLi);
							var key 	= localStorage.key(i);
							var value = localStorage.getItem(key);
							var obj 	= JSON.parse(value);
							// JSON.parse converts local storage string value to an object.
							
					}

			}

			// Variable Defaults
			var foodCategories = ["--Choose One--", "American", "Chinese", "Italian", "Japanese", "Mexican", "Seasonal"];
					favoriteValue = "No";
			makeCats();

			// Set Link $ Submit Click Events
			var viewLink = $('viewLink');
			viewLink.addEventListener("click", getData);
			var clearLink = $('clearAll');
			clearLink.addEventListener("click", clearData);
			var save = $('addIt');
			save.addEventListener("click", storeData);
});

/* Confirming the creation of a recipe.
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

var clearRcps = function () {
		localStorage.clear();
};

// EventListeners
_cat.addEventListener("blur", captureLocalData);
//_date.addEventListener("blur", captureLocalData);
//_name.addEventListener("blur", captureLocalData);
//_directions.addEventListener("blur", captureLocalData);
//_goTo.addEventListener("blur", captureLocalData);
//_rating.addEventListener("blur", captureLocalData);
addIt.addEventListener("click", getLocalData);
clearAll.addEventListener("click", clearRcps);

// END */
