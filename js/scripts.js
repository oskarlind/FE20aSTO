//console.log("Hello from scripts.js")

/**
 * Slider for recipes
 */
let currentRecipe = 1;
let nextRecipe = () => {
    document.getElementById("recipe"+currentRecipe).style.display = "none";
    document.getElementById("recipe"+(currentRecipe+1)).style.display = "block";
    currentRecipe++;
}
let prevRecipe = () => {
    document.getElementById("recipe"+currentRecipe).style.display = "none";
    document.getElementById("recipe"+(currentRecipe-1)).style.display = "block";
    currentRecipe--;
}

/**
 * Ingredient calculator
 * 
 */
let calculateQuantity = function(originalAmount, multiplier) {
    let result = '';
    let multiply = function(amount) {
        return amount * multiplier;
    }
    result += multiply(originalAmount);
    return result;
}

/**
 * Constructor for Car model
 */
function Car(year, make, color) {
    this.year = year;
    this.make = make;
    this.color = color;
}
let car1 = new Car(1991, "VW", "red");
let car2 = new Car(1997, "Fiat", "yellow");

/**
 * Recipe constructor
 */
function Recipe(title, ingredients) {
    this.title = title;
    this.ingredients = ingredients;
}
let applePie = new Recipe("Apple pie", ["Apples", "Flour", "Butter"]);
let blueberrySmoothie = new Recipe("Blueberry smoothie", ["Bluberries", "Sugar"]);
const recipes = [applePie, blueberrySmoothie];
