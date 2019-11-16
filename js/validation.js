/*
   The Final Project (Marine Life Care Centre).

    validation.js
    Author: Olena Kostrova (T00622879).
    Date:   08/26/2019.

    Functions:
    validateAdopt() - validates adoption form.
    validateDonate() - validates donation form.
    validateVolunteer() - validates volunteer application.

    generateText() - sets a value for slider.

    emptyCheck(formName, str, sHide) - checks all required fields. Parameters: the name of form, name of the field, whether/or not to show a message.
*/

window.onload = function () {
    if (typeof document.forms["adoptForm"] !== 'undefined')
        document.forms["adoptForm"]["adoptSubmit"].addEventListener("click", validateAdopt);

    if (typeof document.forms["donateForm"] !== 'undefined') {
        document.forms["donateForm"]["donateSubmit"].addEventListener("click", validateDonate);
        generateText();
    }

    if (typeof document.forms["volunteerForm"] !== 'undefined') {
        document.forms["volunteerForm"]["volunteerSubmit"].addEventListener("click", validateVolunteer);
    }
};

var showHide;

function validateAdopt() {
    var emptyStrings = ["firstName", "lastName", "shCity", "shState", "shCode", "shStreet", "phoneNumber", "emailAddress", "cardNumber", "cardMonth", "cardYear", "cardCVV"];

    var i = 0;
    showHide = true;
    while (i < emptyStrings.length) {
        emptyCheck("adoptForm", emptyStrings[i], showHide);
        i++;
    }
}

function validateDonate() {
    var emptyStrings = ["firstName", "lastName", "phoneNumber", "emailAddress", "cardNumber", "shCity", "shState", "shCode", "shStreet", "cardMonth", "cardYear", "cardCVV"];

    var i = 0;
    showHide = true;
    while (i < emptyStrings.length) {
        emptyCheck("donateForm", emptyStrings[i], showHide);
        i++;
    }
}

function validateVolunteer() {
    var emptyStrings = ["firstName", "lastName", "shCity", "shState", "shCode", "shStreet", "phoneNumber", "emailAddress"];

    var i = 0;
    showHide = true;
    while (i < emptyStrings.length) {
        emptyCheck("volunteerForm", emptyStrings[i], showHide);
        i++;
    }

    console.log("here");
}

function emptyCheck(formName, str, sHide) {
    var val = document.forms[formName][str].value;

    if (val == "") {
        if (sHide) {
            alert("Please, enter required information.");
            showHide = false;
        }

        var el = document.forms[formName][str].previousElementSibling;
        if (typeof el !== 'undefined') {
            el.style.backgroundColor = "#940728";
            el.style.color = "#dcebfa";
        }
    } else {
        var el = document.forms[formName][str].previousElementSibling;
        if (typeof el !== 'undefined')
            el.style.backgroundColor = "#25542a";
    }
}

function generateText() {
    var sliderEl = document.getElementById("sliderRange");
    var slText = document.getElementById("sliderText");
    slText.value = sliderEl.value;

    sliderEl.oninput = function () {
        slText.value = this.value;
    }
}
