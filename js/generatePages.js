// Array of URLs
var urls = [
    "Pages/animation.html",
    "Pages/dance.html",
    "Pages/design.html",
    "Pages/drawing.html",
    "Pages/game-development.html",
    "Pages/painting.html",
    "Pages/photography.html",
    "Pages/sculpting.html"
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