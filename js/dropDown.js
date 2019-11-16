/*
    The Final Project (Marine Life Care Centre).

    dropDown.js
    Author: Olena Kostrova (T00622879).
    Date:   08/26/2019.

    Functions:
    dropDownMenu() - generates the menu for dropdown list in mobile view.

    dropDownMenu(itemId) - displays/hides categories for references.

    readMoreMenu(event) - displays/hides additional inforamation for elements (event - the element that triggered event).

    fillInnerList() - inserts elements to categories.
*/

function dropDownMenu() {
    var navList = document.getElementById("navDropDown");

    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
}

function fillReferences(itemId) {
    try {
        var categoryItems = document.getElementById(itemId.id);
        var plusMinusEl = itemId.previousElementSibling;
        var elText = plusMinusEl.innerHTML.split("</i>")[1];

        plusMinusEl.innerHTML = "";

        if (categoryItems.style.display == "none") {
            categoryItems.style.display = "block";
            plusMinusEl.innerHTML = "<i class=\"fas fa-minus\"></i>" + elText;
        } else {
            categoryItems.style.display = "none";
            plusMinusEl.innerHTML = "<i class=\"fas fa-plus\"></i>" + elText;
        }
    } catch (er) {
        console.log(er);
    }
}

function readMoreMenu(event) {
    try {
        var detailsDiv = event.nextElementSibling;

        if (detailsDiv.style.display == "block") {
            detailsDiv.style.display = "none";
            event.innerHTML = "Read more <i class=\"fas fa-chevron-down\"></i>";
        } else {
            detailsDiv.style.display = "block";
            event.innerHTML = "Close <i class=\"fas fa-chevron-up\"></i>";
        }
    } catch (er) {
        console.log(er);
    }
}

function fillInnerList() {
    var listNode = event.target.children[1];
    var toogleEl = event.target.firstChild;

    if (listNode.style.display == "none") {
        listNode.style.display = "block";
        toogleEl.setAttribute("class", "fas fa-minus");
    } else {
        listNode.style.display = "none";
        toogleEl.setAttribute("class", "fas fa-plus");
    }
}
