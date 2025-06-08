// Ask user amount to send
const userInput = prompt("Unatuma Ngapi? (KES):");

// Convert the input to number
const amountToSend = Number(userInput);

// Define function to calculate the fee
function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  const minFee = 10;
  const maxFee = 70;

  // Calculate 1.5% of the amount
  let calculatedFee = amountToSend * feePercentage;

  // Define minimum and maximum fee limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  // Calculate total amount to be debited
  const totalDebited = amountToSend + calculatedFee;

  // Display results in the console
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`Money Sent Securely!`);
}

// Validate input
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Please Enter Valid Amount.");
}