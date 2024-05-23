// Sample menu data 
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Carbonara Arancini"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Risotto alla Milanese"],
    Desserts: ["Tiramisu", "Cheesecake", "Chocolate Fondant"]
};

// Function to display menu items by category
function displayMenuItems(menu) {

    // Getting the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Looping through each category and its items in the menu object

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

    const orderItemsList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");

    const listItem = document.createElement("li");
    listItem.textContent = itemName;
    listItem.addEventListener("click", () => {
        removeFromOrder.call(listItem);
    });
    orderItemsList.appendChild(listItem);

    const currentTotal = parseFloat(orderTotal.textContent);
    const itemPrice = 60;
    const newTotal = itemPrice + currentTotal ;
    orderTotal.textContent = newTotal.toFixed(2);

}

// Function to remove item from order 

function removeFromOrder() {
    const item = this;
    const orderItemsList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");

    orderItemsList.removeChild(item);

    const currentTotal = parseFloat(orderTotal.textContent);
    const itemPrice = 60;
    const newTotal = currentTotal - itemPrice;
    orderTotal.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Calling the function to display menu items
    displayMenuItems();

}
// Starting the menu system by calling the init function
initMenuSystem(menu);
