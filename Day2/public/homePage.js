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

document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        {
        id: "idli",
        imgSrc: "https://source.unsplash.com/1600x1000/?idli",
        h3Content: "Idli",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, libero!",
        },
        // Add more card data objects as needed
    ];
    
    // Function to create a card element
    function createCard(data) {
        const card = document.createElement("div");
        card.className = "card";
        card.id = data.id;
    
        const img = document.createElement("img");
        img.className = "image";
        img.src = data.imgSrc;
    
        const h3 = document.createElement("h3");
        h3.textContent = data.h3Content;
    
        const description = document.createElement("p");
        description.className = "description";
        description.textContent = data.description;
    
        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(description);
    
        // Add an onclick event to the card element
        card.onclick = function () {
        openPageWithID(this);
        };
    
        return card;
    }
    
    // Get the parent container where the cards will be appended
    const cardContainer = document.getElementById("cardContainer");
    
    // Loop through the card data and create card elements
    cardData.forEach((card) => {
        const cardElement = createCard(card);
        cardContainer.appendChild(cardElement);
    });

});


function openPageWithID(clickedElement) {
    let junk = ["burger", "fish", "pizza", "pasta", "chicken", "sandwich"];
    let breakfast = ["idli", "dosa", "vada", "upma", "roti", "rice"];
    let sideDish = ["desserts", "snacks"];
    let id = clickedElement.id;
    let food;

    localStorage.setItem("id", id);

    if(junk.includes(id)) {
        food = "junk";
    } else if (breakfast.includes(id)){
        food = "breakfast";
    } else if (sideDish.includes(id)) {
        food = "sideDish";
    } else {
        food = null;
    }

    console.log("cusine", food);
    console.log("clicked", id);

    if (food) {
        window.location.href = `restaurantsList.html?id=${food}`;
    } else {
        alert("Oops! No results found.");
        window.location.href = `errorPage.html`;
    }
    
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

