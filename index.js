// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Carbonara Arancini"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Risotto alla Milanese"],
    Desserts: ["Tiramisu", "Cheesecake", "Chocolate Fondant"]
};

// Function to display menu items by category
function displayMenuItems(menu) {

    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object

    for (const [category, items] of Object.entries(menu)){

        const categoryElement = document.createElement("h3");
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        const itemsList = document.createElement("ul");
        itemsList.classList.add("order-items");
        menuContainer.appendChild(itemsList);

        items.forEach(item => {
            const itemElement = document.createElement("li");
            itemElement.textContent = item;
            itemElement.addEventListener("click", function (){
                addToOrder(item);
            });
            itemsList.appendChild(itemElement);

        });
    }         
}
displayMenuItems(menu);

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items

}

// Start the menu system by calling the init function
initMenuSystem(menu);
