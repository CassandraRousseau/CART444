
//     $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({
//             left: '250px',
//             opacity: '0.5',
//             height: '150px',
//             width: '150px'
//         });
//     });
// });
    let slideIndex = 1;
    let slideIndex02 = 1;
    let slideIndex03 = 1;
    let slideIndex04 = 1;
    let slideIndex05 = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function plusSlides02(n) {
        showSlides02(slideIndex02 += n);
    }

    function plusSlides03(n) {
        showSlides03(slideIndex03 += n);
    }

    function plusSlides04(n) {
        showSlides04(slideIndex04 += n);
    }
    function plusSlides05(n) {
        showSlides05(slideIndex05 += n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    function showSlides02(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides02");
        if (n > slides.length) { slideIndex02 = 1; }
        if (n < 1) { slideIndex02 = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex02 - 1].style.display = "block";
    }

    function showSlides03(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides03");
        if (n > slides.length) { slideIndex03 = 1; }
        if (n < 1) { slideIndex03 = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex03 - 1].style.display = "block";
    }
    function showSlides04(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides04");
        if (n > slides.length) { slideIndex04 = 1; }
        if (n < 1) { slideIndex04 = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex04 - 1].style.display = "block";
    }
    function showSlides05(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides05");
        if (n > slides.length) { slideIndex05 = 1; }
        if (n < 1) { slideIndex05 = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex05 - 1].style.display = "block";
    }

    showSlides(slideIndex);

    showSlides02(slideIndex02);
    showSlides03(slideIndex03);
    showSlides04(slideIndex04);
    showSlides05(slideIndex05);


    document.getElementById("myForm01").addEventListener("click", function (event) {
        if (event.target.matches(".prev")) {
            plusSlides(-1);
        } else if (event.target.matches(".next")) {
            plusSlides(1);
        }
    });
    document.getElementById("myForm02").addEventListener("click", function (event) {
        if (event.target.matches(".prev")) {
            plusSlides02(-1);
        } else if (event.target.matches(".next")) {
            plusSlides02(1);
        }
    });
    document.getElementById("myForm03").addEventListener("click", function (event) {
        if (event.target.matches(".prev")) {
            plusSlides03(-1);
        } else if (event.target.matches(".next")) {
            plusSlides03(1);
        }
    });

    document.getElementById("myForm04").addEventListener("click", function (event) {
        if (event.target.matches(".prev")) {
            plusSlides04(-1);
        } else if (event.target.matches(".next")) {
            plusSlides04(1);
        }
    });
    document.getElementById("myForm05").addEventListener("click", function (event) {
        if (event.target.matches(".prev")) {
            plusSlides05(-1);
        } else if (event.target.matches(".next")) {
            plusSlides05(1);
        }
    });
