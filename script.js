var moon = document.querySelector("#moon");
var earth = document.querySelector("#earth");
var mars = document.querySelector("#mars");
var mercury = document.querySelector("#mercury");
function onMoonOver(){
	moon.style.width = "35vh";
	document.body.style.backgroundImage = "url(img/galaxy3.jpg)";
	document.querySelector(".about-moon").style.display="block"
}
function onEarthOver(){
	earth.style.width = "60vh";
	document.body.style.backgroundImage = "url(img/galaxy.jpg)";
	document.querySelector(".about-earth").style.display="block"
}
function onMarsOver(){
	mars.style.width = "45vh";
	document.body.style.backgroundImage = "url(img/galaxy3.jpg)";
	document.querySelector(".about-mars").style.display="block"
}

function onMarsLeave(){
	mars.style.width = "25vh";
	document.querySelector(".about-mars").style.display="none"
}
function onMercuryOver(){
	mercury.style.width = "45vh";
	document.body.style.backgroundImage = "url(img/galaxy.jpg)";
	document.querySelector(".about-mercury").style.display="block"
}

function onMercuryLeave(){
	mercury.style.width = "25vh";
	document.querySelector(".about-mercury").style.display="none"
}

function onMoonLeave(){
	moon.style.width = "25vh";
	document.querySelector(".about-moon").style.display="none"
}
function onEarthLeave(){
	earth.style.width = "50vh";
	document.querySelector(".about-earth").style.display="none"
}
