// Code allowing to generate random page when shuffle button pressed
// Array of all my website webpages
var urls = [
    "../Pages/animation.html",
    "../Pages/audiovisual.html",
    "../Pages/design.html",
    "../Pages/game-development.html",
    "../Pages/about.html",
    "../Pages/CV.html"
];

// Function to generate a random URL and redirect to it
function redirectToRandomPage() {
    var randomIndex = Math.floor(Math.random() * urls.length);
    var randomUrl = urls[randomIndex];
    window.location.replace(randomUrl);
}

// Event listener for button click
document.getElementById('shuffle').addEventListener('click', redirectToRandomPage);
