/* ORO.JS 1.0 June 10 2024 by oroicecream.com */
"use strict";
var oro = {};
        
var topBar = document.getElementById("topBar");
var afterTop = document.getElementById("afterTop"); //header
var sticky = topBar.offsetTop;


oro.toggleMobileNavMenu = function () {
    var x = document.getElementById("mobileNav");
    if (x.className.indexOf("w3-show") == -1) {
        x.classList.add("w3-show");
    } else { 
        x.classList.remove("w3-show");
    }
}

oro.toggleTopBar = function () {
    if (window.pageYOffset > sticky) {
        topBar.classList.add("w3-top");
    } else {
        topBar.classList.remove("w3-top");
    }
}

oro.accordionDrop = function (id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}

const d = new Date();
let day = d.getDay();
console.log(day);
if (day == 0 || day == 6) {
    document.getElementById("market-street-map").classList.add("w3-hide");
} else { 
    document.getElementById("fox-run-map").classList.add("w3-hide");
}

window.onscroll = function() {oro.toggleTopBar()};
