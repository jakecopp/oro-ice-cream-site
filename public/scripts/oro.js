/* ORO.JS 1.0 June 10 2024 by oroicecream.com */
"use strict";
var oro = {};
        
var topBar = document.getElementById("topBar");
var afterTop = document.getElementById("afterTop");
var sticky = topBar.offsetTop;

var topPad = parseInt(afterTop.style.paddingTop);

var padingHeight = topBar.offsetHeight + topPad + "px";

oro.toggleMobileNavMenu = function () {
    var x = document.getElementById("mobileNav");
    if (x.className.indexOf("w3-show") == -1) {
        x.classList.add("w3-show");
    } else { 
        x.classList.remove("w3-show");
    }
}

oro.setPaddingHeight = function () {
    padingHeight = document.getElementById('topBar').offsetHeight + topPad + "px"
}

oro.toggleTopBar = function () {
    if (window.pageYOffset > sticky) {
        topBar.classList.add("w3-top");
        afterTop.style.paddingTop = padingHeight;
    } else {
        topBar.classList.remove("w3-top");
        afterTop.style.paddingTop = topPad + "px";
    }
}

window.onscroll = function() {oro.toggleTopBar()};
window.onresize = function() {oro.setPaddingHeight()};