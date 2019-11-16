/*
   The Final Project (Marine Life Care Centre).

    render.js
    Author: Olena Kostrova (T00622879).
    Date:   08/26/2019.

    Functions:
    addEvents() - sets events for list items.
*/

window.onload = function () {
    addEvents()
};

function addEvents() {
    var innerUlList = document.querySelectorAll(".crefGroup>ul>li>ol");

    innerUlList.forEach(function (el) {
        el.parentElement.addEventListener("click", fillInnerList);
    });

    for (var i = 0; i < innerUlList.length; i++) {
        innerUlList[i].parentElement.innerHTML = "<i class=\"fas fa-minus\"></i>" + innerUlList[i].parentElement.innerHTML;
    }

    var endPoints = document.querySelectorAll(".crefGroup ol>li>a");

    endPoints.forEach(function (el) {
        el.parentElement.addEventListener("click", linkPage);
    });
}

function linkPage() {
    window.location.href = event.target.firstChild.getAttribute('href');
}
