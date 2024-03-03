// Array of URLs
var urls = [
    "../CART444/Pages/animation.html",
    "../CART444/Pages/dance.html",
    "../CART444/Pages/design.html",
    "../CART444/Pages/drawing.html",
    "../CART444/Pages/game-development.html",
    "../CART444/Pages/painting.html",
    "../CART444/Pages/photography.html",
    "../CART444/Pages/sculpting.html"
    // Add more URLs as needed
];
// Function to generate a random URL and redirect to it
function redirectToRandomPage() {
    var randomIndex = Math.floor(Math.random() * urls.length); // Generate a random index
    var randomUrl = urls[randomIndex]; // Get the URL at the random index
    window.location.href = randomUrl; // Redirect to the random URL
}

// Event listener for button click
document.getElementById('randomButton').addEventListener('click', redirectToRandomPage);