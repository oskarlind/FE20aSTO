let purchaseList = [];

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

/*
/**
 * Add ingredient to purchase list
 */
let addIngredientToList = (ingredient) => {
    purchaseList.push(ingredient);
    document.getElementById("purchaseListContainer").innerHTML += "<li>"+ingredient+"</li>"
}

let clearPurchaseList = () => {
    document.getElementById("purchaseListContainer").innerHTML = "";
}
