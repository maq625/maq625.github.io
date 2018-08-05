var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'This page is cool, ' + myName;
}


// Changes the images on click
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pulzar.jpg') {
      myImage.setAttribute ('src','images/space.jpg');
    } else {
      myImage.setAttribute ('src','images/pulzar.jpg');
    }
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Space is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}