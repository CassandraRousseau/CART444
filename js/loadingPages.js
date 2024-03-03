$(document).ready(function() {
    // Function to fade out and load content
    function loadAndFadeInContent(pageUrl) {
        $(".page-container").fadeOut(800, function() {
            $(".page-container").load(pageUrl, function() {
                    $(".page-container").fadeIn(800);
                });
            });
    };

    // Event delegation for menu buttons
    $("body").on("click", ".fadeAbout", function(event) {
        // Load and fade in content for About
        loadAndFadeInContent("Pages/about.html");
    });

    $("body").on("click", ".fadeResume", function(event) {
        // Load and fade in content for Resume
        loadAndFadeInContent("Pages/resume.html");
    });

    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeAnim", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/animation.html");
    });

    $(".page-container").on("click", "#fadeDance", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/dance.html");
    });
    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeDes", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/design.html");
    });

    $(".page-container").on("click", "#fadeDraw", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/drawing.html");
    });
    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeGameDev", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/game-development.html");
    });

    $(".page-container").on("click", "#fadePaint", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/painting.html");
    });

    $(".page-container").on("click", "#fadePhoto", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/photography.html");
    });
    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeSculpt", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/sculpting.html");
    });

});
