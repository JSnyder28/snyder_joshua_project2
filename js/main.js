// Joshua Snyder
// VFW 1211
// Project 2

// Target element by tag name array
var uoList = document.getElementsByTagName("li");
		console.log(uoList[4]);
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
parentList.appendChild(rcpList);
	//rcpList.appendChild(rcpListItems);
for (i=0; i<5; i++) {  // Use for the creation of the stored recipes page, possibly.
		var rcpListItems = document.createElement ("li");
		rcpList.appendChild(rcpListItems);
}
// END

console.log(parentList);