document.addEventListener("DOMContentLoaded", function() {
    let showMenu = document.getElementById("menuButton");
    let menu = document.getElementById("menu");

    showMenu.addEventListener("click", function () {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });

    $(document).ready(function() {
        // Add click event to each list item
        $(".list-item").click(function() {
            // This code will run when a list item is clicked
            console.log("Item clicked:", $(this).text());
        });
    });
    
});

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
