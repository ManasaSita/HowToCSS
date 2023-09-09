let dish = localStorage.getItem("id");

function getDish(dish) {
    var newElement = document.createElement("h2");

    // Get the current <ul> element's id
    var currentULId = document.querySelector(".restaurantsList").id;

    newElement.textContent = toProperCase(dish);

    // Get a reference to the current <div> element with the corresponding id
    var container = document.getElementById("dish-" + currentULId);

    // Append the new element to the current <div> element
    container.appendChild(newElement);
}

getDish();

document.addEventListener("DOMContentLoaded", function () {

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    if (id) {
        // Hide all <ul> elements
        const ulElements = document.querySelectorAll("ul");
        ulElements.forEach(function (ul) {
            ul.style.display = "none";
        });

        // Show the <ul> element with the matching id
        const matchingUl = document.getElementById(id);
        if (matchingUl) {
            matchingUl.style.display = "block";
        } else {
            alert("Oops! No results found.");
            window.location.href = 'errorPage.html';
        }
    } else {
        alert("Dish not listed!");
        window.location.href = 'errorPage.html';
    }
});
