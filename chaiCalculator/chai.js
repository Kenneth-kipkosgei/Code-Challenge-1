// define function 
function calculatechaiingredients(numberOfCups) {
    // Define the ingredients per cup
    const waterPerCup = 200; // in milliliters
    const milkPerCup = 50; // in milliliters
    const teaLeavesPerCup = 1; // in teaspoons
    const sugarPerCup = 2; // in tablespoons

    // Calculate total ingredients by multiplying by number of cups
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    // Print the resultsto the console
    console.log(`To make ${numberOfCups} cups of chai, you need:`);
    console.log(`Water:${totalWater} milliliters`);
    console.log(`Milk:${totalMilk} milliliters`);
    console.log(`Tea Leaves (Majani):${totalTeaLeaves} teaspoons`);
    console.log(`Sugar (sukari):${totalSugar} tablespoons`);
    console.log(`Enjoy your chai!`);
}

// Prompt the user to enter how many cups of chai they want
const userInput = prompt("Karibu! How many cups of chai do you want to make?");
// Convert the user input to a number
const numberOfCups = Number(userInput);
// Check if the input is a valid number
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    // Call the function to calculate ingredients
    calculatechaiingredients(numberOfCups);
}else {
// If the input is not valid, alert the user
console.log("Tafadhali ingiza nambari halali ya vikombe vya chai.");
}   