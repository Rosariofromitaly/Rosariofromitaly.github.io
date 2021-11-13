let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/firefox-icon.png')
    {
        myImage.setAttribute('src','images/onepiece.png');
    }
    else 
    {
        myImage.setAttribute('src','images/firefox-icon.png');
    } 
}

// impostare un messeggio di benvenuto nella pagina

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {

    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUsername();
    }
    else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName; 
    }
}

if(!localStorage.getItem('name')) {
    setUsername();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUsername();
}