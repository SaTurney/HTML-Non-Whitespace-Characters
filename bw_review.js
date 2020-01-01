"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Sabrina Turney
   Date:   10/22/19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/  
/*=================================================================*/


//   countCharacters(textStr)
      //Returns the number of a non-whitespace characters
      //within textStr
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   
//Here, the code is basically completed for us, but for clarity, it uses regular 
//expressions to replace everything with a blank string, and take that value to the
//"0/1000" character count of the users "review". I have just moved it here.


window.onload = init;
//First step of the case, we have to make this function load first!



   //init() - First function!
      //Initializes the contents of the web page and sets up the
      //event handlers.
function init() {
   var stars = document.querySelectorAll("span#stars img");
   for (var i=0; i < stars.length; i++) {
      stars[i].style.cursor = "pointer";
      stars[i].addEventListener("mouseenter", lightStars);
   }
   document.getElementById("comment").addEventListener("keyup", updateCount);
}

//Using a for loop, we go through each star length possibility and add event listeners
//This allows the page to understand when we're hovering stars by our mouse.




   //lightStars(e)
      //Function that colors the stars representing the user rating
      //for the book.
function lightStars(e) {
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < starNumber; i++) {
      stars[i].src = "bw_star2.png";
   }
   for (var i = starNumber; i < 5; i++) {
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = starNumber + " stars";
   e.target.addEventListener("mouseleave", turnOffStars);
   e.target.addEventListener("click",
      function() {
         e.target.removeEventListener("mouseleave", turnOffStars);
      }
   );  
}
//A lot more complex to write, but simple to execute. For each mouse hover over each
//star value, we go to the images included in the folder to make a star "highlighted".
//If a star is not highlighted, it uses the "mouseleave", turnOffStars to make the
//stars *appear* to be "empty" again.




   //turnOffStars(e)
      //Function that restores the stars to empty colors, removing
      //the user rating for the book.

function turnOffStars() {
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < 5; i++) {
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = "";
}

//Using the opposite of the above, we already know that if a star is highlighted, 
//we can just loop through all of them and replace them with the "empty" star.




   //updateCount()
      //Updates the count of characters in the wordCountBox
      //element.
function updateCount() {
   var commentText = document.getElementById("comment").value;
   var charCount = countCharacters(commentText);
   var wordCountBox = document.getElementById("wordCount");
   wordCountBox.value = charCount + "/1000";
   if (charCount > 1000) {
      wordCountBox.style.color = "white";
      wordCountBox.style.backgroundColor = "red";
   } else {
      wordCountBox.style.color = "black";
      wordCountBox.style.backgroundColor = "white";
   }    
}
//To volley off the first function- Here, we check how much the user is writing
//into the textbox and change its color accordingly for a "review" being given.

//If a user goes too crazy in making a review, the box says "calm down", otherwise
//it "allows" the user to post a review. These are fake repercussions but 
//some people do type too much in their book reviews- and if you're me, you
//type too much in your code!




/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}  