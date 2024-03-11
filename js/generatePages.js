var urls = [
    "../Pages/animation.html",
    "../Pages/dance.html",
    "../Pages/design.html",
    "../Pages/drawing.html",
    "../Pages/game-development.html",
    "../Pages/painting.html",
    "../Pages/photography.html",
    "../Pages/sculpting.html",
    "../Pages/about.html",
    "../Pages/resume.html"
    // Add more URLs as needed
];

// Function to generate a random URL and redirect to it
function redirectToRandomPage() {
    var randomIndex = Math.floor(Math.random() * urls.length);
    var randomUrl = urls[randomIndex];
    window.location.replace(randomUrl);
}

// Event listener for button click
document.getElementById('shuffle').addEventListener('click', redirectToRandomPage);
