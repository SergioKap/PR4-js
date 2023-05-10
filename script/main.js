let myImage = document.querySelector('img');
let imageArray = ['images/firefox-icon.png', 'images/W.png', 'images/W (2).png'];

let index = 0;
myImage.onclick = function() {
  index = (index + 1) % imageArray.length;
  myImage.setAttribute('src', imageArray[index]);
};

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName() {

    let myName = prompt('Please enter your name');
    
    if(!myName) {
       setUserName();
   
    } else {
    
    localStorage.setItem('name', myName);
    
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    
    }
    
    }

    if(localStorage.getItem('name')) { 
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
      }
      
      myButton.onclick = function(){

        setUserName();
        
        }

  

