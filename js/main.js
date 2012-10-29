// Joshua Snyder
// VFW 1211
// Project 2

var uoList = document.getElementsByTagName("li");
	//console.log(uoList[4]);

var addRecipe = document.getElementById("addIt");
var rcpField = document.getElementById("rcpName");

var changeBorder = function () {
		rcpField.setAttribute("class", "hasFocus");
}
var defaultBorder = function () {
		rcpField.removeAttribute("class", "hasFocus");
}

rcpField.addEventListener("focus", changeBorder);
rcpField.addEventListener("blur", defaultBorder);

//console.log(rcpName);