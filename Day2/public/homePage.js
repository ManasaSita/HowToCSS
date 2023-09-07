// document.addEventListener("DOMContentLoaded", function() {
//     let showMenu = document.getElementById("menuButton");
//     let menu = document.getElementById("menu");

//     showMenu.addEventListener("click", function () {
//         if (menu.style.display === "none") {
//             menu.style.display = "block";
//         } else {
//             menu.style.display = "none";
//         }
//     });

//     $(document).ready(function() {
//         // Add click event to each list item
//         $(".list-item").click(function() {
//             // This code will run when a list item is clicked
//             console.log("Item clicked:", $(this).text());
//         });
//     });

//     $(document).click(function(event) {
//         if (!menu.is(event.target) && !showMenu.is(event.target)) {
//             menu.hide();
//         }
//     });
    
// });

// let menu = document.getElementById("menu");
// $(document).ready(function () {
//     $(".menuButton").click(function() {
//         if(menu.style.display === 'none'){
//             menu.style.display = "block";
//         } else {
//             menu.style.display = "none";
//         }
//     });
// });


// $(document).ready(function() {
//     let showMenu = $("#menuButton");
//     let menu = $("#menu");

//     // Toggle menu visibility
//     showMenu.click(function () {
//         menu.toggle();
//         showMenu.toggleClass("active");
//     });

//     // Event delegation for list items
//     $(document).on("click", ".list-item", function() {
//         console.log("Item clicked:", $(this).text());
//     });

//     // Hide menu when clicking outside
//     $(document).click(function(event) {
//         if (!menu.is(event.target) && !showMenu.is(event.target)) {
//             menu.hide();
//             showMenu.removeClass("active");
//         }
//     });

    
//     function openPageWithID(clickedElement) {
//         var elementID = clickedElement.id;
    
//         if (elementID) {
//             console.log("Clicked element ID: " + elementID);
//             // You can use elementID as needed
//         } else {
//             console.log("Clicked element has no ID.");
//         }
//     }
// });

function openPageWithID(clickedElement) {
    window.location.href = `restaurantsList.html?id=${clickedElement.id}`;
}

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the menu button and menu
    let showMenu = document.getElementById("menuButton");
    let menu = document.getElementById("menu");

    // Toggle menu visibility
    showMenu.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
        showMenu.classList.toggle("active");
    });

    // Event delegation for list items
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("list-item")) {
            console.log("Item clicked:", event.target.textContent);
        }
    });

    // Hide menu when clicking outside
    document.addEventListener("click", function (event) {
        if (event.target !== menu && event.target !== showMenu) {
            menu.style.display = "none";
            showMenu.classList.remove("active");
        }
    });

});

