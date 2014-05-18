"use strict";
var collect = [];   //collects input values
    var list = document.getElementById("list");    // grabbing ordered list
    var input = document.getElementById("input");   // grabbing input type="text"
var runArray = function () {
    list.innerHTML = "";                            //clearing ordered list
    for (var j = 0; j < collect.length; j++) {         //going through array and adding list items 
        var add = '<li><span onclick="strike()">' + collect[j] + '</span><div onclick="erase(' + j + ')" class="button">X</div><div onclick="moveDown(' + j + ')" class="button">⇩</div><div onclick="moveUp(' + j + ')" class="button">⇧</div></li>';
        list.innerHTML += add;    //adding a list item to ordered list for each item in array
    }
}
var make = function () {
    if (input.value !== "")
        collect.push(input.value);    //if input value is not blank push to array
    runArray();        //run array function is called
    input.value = "";    //clear input value after adding item
};
var strike = function () {
    //if item has a strike class, remove it, else set it
    if (event.target.hasAttribute("class")) {
        event.target.removeAttribute("class");
    }
    else { event.target.setAttribute("class", "strike"); }
};
var erase = function (location) {
    collect.splice(location, 1);   //remove element from array at location
    runArray();         //run array
}
var moveUp = function (location) {
    if (location !== 0) {    //if item is not first list item because you can't move before 0
        var striked = [];  //create empty array to hold 1 or 0 depending on list items having a class or not
        for (var i = 0; i < collect.length; i++) {
            if (list.childNodes[i].firstChild.hasAttribute("class"))
                //nth child of list is some '<li>' element and 1st child of that is <span>  "input value" </span
                striked.push(1);
            else 
                striked.push(0);
        }
        //splicing striked array and collect array to add item then remove another item to switch out values
        striked.splice(location-1, 0, striked[location]);
        striked.splice(location + 1, 1);

        collect.splice(location - 1, 0, collect[location]);
        collect.splice(location + 1, 1);
        runArray();
        //go through array and set strike class to corresponding items
        for (var i = 0; i < striked.length; i++) {
            if (striked[i] === 1)
                list.childNodes[i].firstChild.setAttribute("class", "strike");
        };
    }
};
var moveDown = function (location) {
    if (location !== collect.length - 1) {
        var striked = [];
        for (var i = 0; i < collect.length; i++) {
            if (list.childNodes[i].firstChild.hasAttribute("class"))
                striked.push(1);
            else
                striked.push(0);
        }
        striked.splice(location, 0, striked[location + 1]);
        striked.splice(location + 2, 1);
        collect.splice(location, 0, collect[location + 1]);
        collect.splice(location + 2, 1);
        runArray();
        for (var i = 0; i < striked.length; i++) {
            if (striked[i] === 1)
                list.childNodes[i].firstChild.setAttribute("class", "strike");
        };
    }
};