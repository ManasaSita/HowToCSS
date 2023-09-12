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
            const cuisine = event.target.dataset.cuisine;
            if (cuisine) {
                window.location.href = `restaurantsList.html?id=${cuisine}`;
            } else {
                alert("Oops! No results found.");
                window.location.href = "errorPage.html";
            }
        }
    });

    // Sample data for cards
    const cardData = [
        { id: "idli", imgSrc: "https://source.unsplash.com/1600x1000/?idli", h3Content: "Idli" },
        { id: "dosa", imgSrc: "https://source.unsplash.com/1600x1000/?masaladosa", h3Content: "Dosa" },
        { id: "vada", imgSrc: "https://source.unsplash.com/1600x1000/?vada", h3Content: "Vada" },
        { id: "upma", imgSrc: "https://source.unsplash.com/1600x1000/?upma", h3Content: "Upma" },
        { id: "roti", imgSrc: "https://source.unsplash.com/1600x1000/?roti", h3Content: "Roti" },
        { id: "rice", imgSrc: "https://source.unsplash.com/1600x1000/?rice", h3Content: "Rice" },
        { id: "burger", imgSrc: "https://source.unsplash.com/1600x1000/?burger", h3Content: "burger" },
        { id: "pizza", imgSrc: "https://source.unsplash.com/1600x1000/?pizza", h3Content: "Pizza" },
        { id: "pasta", imgSrc: "https://source.unsplash.com/1600x1000/?pasta", h3Content: "Pasta" },
        { id: "chicken", imgSrc: "https://source.unsplash.com/1600x1000/?fried-chicken", h3Content: "Chicken" },
        { id: "sandwich", imgSrc: "https://source.unsplash.com/1600x1000/?sandwich", h3Content: "Sandwich" },
        { id: "desserts", imgSrc: "https://source.unsplash.com/1600x1000/?desserts", h3Content: "Desserts" },
        { id: "snacks", imgSrc: "https://source.unsplash.com/1600x1000/?snacks", h3Content: "Snacks" },
        // { id: "", imgSrc: "https://source.unsplash.com/1600x1000/?", h3Content: "" },
        // { id: "", imgSrc: "https://source.unsplash.com/1600x1000/?", h3Content: "" },
        // { id: "", imgSrc: "https://source.unsplash.com/1600x1000/?", h3Content: "" },

    ];

    // Function to create a card element
    function createCard(data) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.id = data.id;

        const imgElement = document.createElement("img");
        imgElement.classList.add("image");
        imgElement.src = data.imgSrc;
        cardElement.appendChild(imgElement);

        const h3Element = document.createElement("h3");
        h3Element.textContent = data.h3Content;
        cardElement.appendChild(h3Element);

        const pElement = document.createElement("p");
        pElement.classList.add("description");
        pElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, libero!";
        cardElement.appendChild(pElement);

        cardElement.addEventListener("click", function () {
            openPageWithID(data.id);
        });

        return cardElement;
    }

    // Get the parent containers where the cards will be appended
    const breakfastContainer = document.getElementById("breakfast");
    const junkFoodContainer = document.getElementById("junk-food");
    const sweetSaltContainer = document.getElementById("sweet&salt");

    // Loop through the card data and create card elements for each cuisine
    cardData.forEach((card) => {
        let junk = ["burger", "fish", "pizza", "pasta", "chicken", "sandwich"];
        let breakfast = ["idli", "dosa", "vada", "upma", "roti", "rice"];
        let sideDish = ["desserts", "snacks"];
        const cardElement = createCard(card);
        if (breakfast.includes(card.id)) {
            breakfastContainer.appendChild(cardElement);
        } else if (junk.includes(card.id)) {
            junkFoodContainer.appendChild(cardElement);
        } else if (sideDish.includes(card.id)) {
            sweetSaltContainer.appendChild(cardElement);
        }
    });
    
});
