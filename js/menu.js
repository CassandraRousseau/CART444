$(document).ready(function() {
    // Function to handle fading out, loading, and fading in content
    function loadAndFadeInPages(pageUrl) {
        // Clear animation classes from buttons
        $(".buttonL, .buttonR").removeClass("slide-out");

        // Slide out buttons
        $(".buttonL").each(function(index) {
            var $button = $(this);
            setTimeout(function() {
                $button.addClass("slide-out");
            }, index * 100); // Adjust the delay as needed
        });

        // Slide out right buttons
        $(".buttonR").each(function(index) {
            var $button = $(this);
            setTimeout(function() {
                $button.addClass("slide-out");
            }, index * 100); // Adjust the delay as needed
        });

        // After animations, load new content
        setTimeout(function() {
            $(".page-container").fadeOut(800, function() {
                $(".page-container").load(pageUrl, function() {
                    $(".page-container").fadeIn(800);
                });
            });
        });
        <button type="button" class="buttonR" id="fadeAnim">Animation</button>
        <button type="button" class="buttonR" id="fadeDance">Dance</button>
            <button type="button"   class="buttonR" id="fadeDes" >Design</button>
            <button type="button" class="buttonR" id="fadeDraw" >Drawing</button>
            <button type="button"   class="buttonR" id="fadeGameDev">Game Dev</button>
            <button type="button"  class="buttonR" id="fadePaint" >Painting</button>
            <button type="button"  class="buttonR" id="fadePhoto" >Photography</button>
            <button type="button" class="buttonR" id="fadeSculpt" >Sculpting</button>
        <button type="button" className="buttonR" id="fadeAbout">About</button>
        <button type="button" className="buttonR" id="fadeResume">Resume</button>
    }

});
