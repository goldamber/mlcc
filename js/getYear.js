/*
   The Final Project (Marine Life Care Centre).

    getYear.js
    Author: Olena Kostrova (T00622879).
    Date:   08/26/2019.

    Functions:
    setYear() - displays the current year.
    lastEditedDate() - displays the date when the file was last modified.
*/

var yearF = new Date();
var result = "" + (yearF.getMonth() + 1) + "/" + yearF.getDate() + "/" + yearF.getFullYear() + " MLCC&trade;";

setYear();
lastEditedDate();

function setYear() {
    document.getElementById("yearFooter").innerHTML = result;
}

function lastEditedDate() {
    document.getElementById("lastModified").style.display = "block";
    document.getElementById("lastModified").innerHTML = "Last modified: " + document.lastModified;
}
