/*
    The Final Project (Marine Life Care Centre).

    slider.js
    Author: Olena Kostrova (T00622879).
    Date:   08/26/2019.

    Functions:
    nextSlide() - show the next slide.
    prevSlide() - show th previous slide.
    changeSlide(index) - displays requested slide.
*/

window.onload = function () {
    changeSlide(this);
};

function nextSlide(elem) {
    changeSlide(elem);
}

function prevSlide(elem) {
    changeSlide(elem);
}

function changeSlide(elem) {
    try {
        var slideArr = document.getElementsByClassName("slide");
        if (elem == window) {
            for (var i = 0; i < slideArr.length; i += 2) {
                slideArr[i].style.display = "block";
            }
            return;
        }

        var firstSlide = elem.parentElement.children[0];
        var secondSlide = elem.parentElement.children[1];

        if (firstSlide.style.display == "block") {
            firstSlide.style.display = "none";
            secondSlide.style.display = "block";
        } else {
            firstSlide.style.display = "block";
            secondSlide.style.display = "none";
        }
    } catch (e) {
        console.log(e.message);
    }
}
