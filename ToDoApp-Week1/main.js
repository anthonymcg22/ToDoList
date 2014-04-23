var make = function () {
    "use strict";
    var chore = document.createElement("li");
    var list = document.getElementById("list");
    var input = document.getElementById("input");
    var X = document.createElement("div");
    X.innerHTML = "X";
    X.setAttribute("id", "removeButton");
    chore.innerHTML = input.value;
    chore.appendChild(X);
    list.appendChild(chore);
    X.setAttribute("onClick", "erase();");
    input.setAttribute("placeholder", "Enter item");
    input.value = "";
    chore.setAttribute("onClick", "strike();");
};

var strike = function () {
    "use strict";
    if (event.target.hasAttribute("class")) {
        event.target.removeAttribute("class");
    }
    else { event.target.setAttribute("class", "strike"); }
};
var erase = function () {
    event.target.parentNode.setAttribute("class", "hidden");
}