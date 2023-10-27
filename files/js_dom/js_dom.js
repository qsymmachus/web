window.onload= function(){

//RELEASE 0: Link this script to the js_dom.html file and analyze what this code does. 

document.getElementsByTagName('body')[0].style.backgroundColor = "#red";

//RELEASE 1:
  //Add code here to select elements of the DOM 

var body = document.querySelector('body');
var h1 = document.querySelector('h1');

//RELEASE 2: 
  // Add code here to manipulate the DOM.

body.style.backgroundColor = "#80c8f8";
h1.style.color = "white";
h1.style.fontFamily = "Menlo";
h1.style.textAlign = "center";
h1.style.border = "2px solid grey";
h1.innerHTML = "Bonjour! Welcome to the JS DOM Manipulation Challenge!";

//RELEASE 3: Event Listener
  // Add the code for the event listener here and replace the console.log code with code that changes the color of some DOM element

var colors = ["blue", "red", "green", "orange", "yellow", "black"]

var beep = document.getElementById('color-switcher');
beep.onclick = function() {
	body.style.backgroundColor = colors[Math.floor((Math.random()*10)/2)];
}

//RELEASE 4 : Experiment on your own

var dog = document.getElementById('dog-friend');

var boop = document.getElementById('fun-times');
boop.onclick = function() {
	dog.style.display = "block";
}

}  // end of the window.onload function do not remove or write DOM manipulation below this.