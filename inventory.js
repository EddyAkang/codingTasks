// Define object constructor function
function Shoes(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
}

// Create five instances of the Shoes object
let shoeInventory = [];

let shoe1 = new Shoes("Trainers", "TN001", 10, 80);
let shoe2 = new Shoes("Boots", "BT002", 25, 100);
let shoe3 = new Shoes("Sandals", "SD003", 15, 30);
let shoe4 = new Shoes("Runners", "RN004", 5, 60);
let shoe5 = new Shoes("Flip Flops", "FF005", 20, 10);

shoeInventory.push(shoe1, shoe2, shoe3, shoe4, shoe5);

// Function to search for a shoe within the array
function searchShoe(name) {
    const foundShoe = shoeInventory.find(shoe => shoe.name === name);
    if (foundShoe) {
        console.log("Shoe found:");
        console.table([foundShoe]);
    } else {
        console.log("Shoe not found.");
    }
}

// Function to find the shoe with the lowest value per item
function findLowestValuePerItem() {
    const lowestValueShoe = shoeInventory.reduce((prev, curr) => prev.valuePerItem < curr.valuePerItem ? prev : curr);
    console.log("Shoe with lowest value per item:");
    console.table([lowestValueShoe]);
}

// Function to find the shoe with the highest value per item
function findHighestValuePerItem() {
    const highestValueShoe = shoeInventory.reduce((prev, curr) => prev.valuePerItem > curr.valuePerItem ? prev : curr);
    console.log("Shoe with highest value per item:");
    console.table([highestValueShoe]);
}

// Function to edit all four properties for each of the five shoe instances
function editShoes() {
    shoeInventory.forEach(shoe => {
        shoe.name += " Updated";
        shoe.productCode += "_updated";
        shoe.quantity += 5;
        shoe.valuePerItem += 10;
    });
    console.log("All shoes updated successfully.");
}

// Function to order all the objects in ascending order based on the “Value per item” property
function orderByValuePerItem() {
    const orderedShoes = shoeInventory.slice().sort((a, b) => a.valuePerItem - b.valuePerItem);
    console.log("Shoes ordered by value per item (ascending):");
    console.table(orderedShoes);
}
// Test the functions
searchShoe("Trainers");
findLowestValuePerItem();
findHighestValuePerItem();
editShoes();
orderByValuePerItem();