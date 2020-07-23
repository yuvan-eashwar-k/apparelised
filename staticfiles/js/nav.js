// VARIABLES
// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// EVENT LISTENERS
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// FUNCTIONS
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed")
        navbar.classList.add("top-0")
    } else {
            navbar.classList.remove("top-0");
            navbar.classList.remove("fixed")
        }
    }