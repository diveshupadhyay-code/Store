// script.js
// Script to open and close sidebar
var myIndex = 0;
carousel();

function carousel() {
  var x = document.getElementsByClassName("mySlides");
  Array.from(x).forEach(slide => slide.style.display = "none"); // Hide all slides
  myIndex++;
  if (myIndex > x.length) { myIndex = 1; }    
  x[myIndex - 1].style.display = "block"; // Show the current slide
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    if (expandImg && imgText) { // Check if elements exist
        expandImg.src = imgs.src;
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "block"; // Show the expanded image
    }
}

