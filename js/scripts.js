//console.log("Hello from scripts.js")

let recipes = [];



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
function Car(...properties) {
    this.year = properties[1];
    this.make = properties[2];
    this.color = properties[3];
}
let car1 = new Car(1991, "VW", "red");
car1.isInsured = false;
let car2 = new Car(1997, "Fiat", "yellow");

/**
 * Recipe constructor
 */
function Recipe(title, ingredients, portions, isVegan, difficulty) {
    this.title = title;
    this.ingredients = ingredients;
    this.portions = portions;
    this.isVegan = isVegan;
    this.difficulty = difficulty;
}
let applePie = new Recipe("Apple pie", ["Apples", "Flour", "Butter"], 4, false, 3);
let blueberrySmoothie = new Recipe("Blueberry smoothie", ["Bluberries", "Sugar"], 2, true, 4);
let mashedPotatoes = new Recipe("Mashed potatoes", ["Potatoes", "Butter"], 8, false, 1);

recipes.push(applePie);
recipes.push(blueberrySmoothie);
recipes.push(mashedPotatoes);

let removeLastRecipe = () => {
    recipes.pop();
    document.getElementById("availableRecipes").innerHTML = "";
    recipes.forEach(renderRecipes);
}
