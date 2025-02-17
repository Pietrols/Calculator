// //functions for all basic operators
// //addition
// const add = (num1, num2) => num1 + num2;

// //subtraction
// const subtract = (num1, num2) => num1 - num2;

// //multiplication
// const multiply = (num1, num2) => num1 * num2;

// //division
// const divide = (num1, num2) => num1 / num2;

// //square
// const square = (num1) => num1 * num1;

// //square root
// const squareRoot = (num1) => Math.sqrt(num1);

// //variables for calculator operation,
// let num1 = null;
// let num2 = null;
// let operator = null;

// //create an operate function
// function operate(num1, operator, num2) {
//   if (operator === "+") {
//     return add(num1, num2);
//   } else if (operator === "-") {
//     return subtract(num1, num2);
//   } else if (operator === "X") {
//     return multiply(num1, num2);
//   } else if (operator === "/") {
//     return divide(num1, num2);
//   } else if (operator === "exp") {
//     return square(num1);
//   } else if (operator === "sqr") {
//     return squareRoot(num1);
//   } else {
//     return "Error:Invalid operator";
//   }
// }

// //selct the display input
// const displayInput = document.querySelector(".display input");

// //add a clear button and add eventlistener
// const clearButton = document.querySelector(".clear");
// // Add event listener to the clear button
// clearButton.addEventListener("click", () => {
//   // Clear the display
//   displayInput.value = "";

//   // Reset variables
//   num1 = null;
//   operator = null;
//   num2 = null;
// });

// //making the buttons responsive
// //select all digit buttons
// const digitButtons = document.querySelectorAll(
//   ".seven, .eight, .nine, .four, .five, .six, .one, .two, .three, .zero"
// );
// //add event listeners to digit buttons
// digitButtons.forEach((button) => {
//   //append the buttons text to the display
//   button.addEventListener("click", () => {
//     if (shouldResetDisplay) {
//       displayInput.value = "";
//       shouldResetDisplay = false;
//     }
//     displayInput.value += button.textContent;
//   });
// });

// //handling period and decimals
// const periodButton = document.querySelector(".period");
// periodButton.addEventListener("click", () => {
//   if (!displayInput.value.includes(".")) {
//     displayInput.value += ".";
//   }
// });

// Functions for all basic operators
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const square = (num1) => num1 * num1;
const squareRoot = (num1) => Math.sqrt(num1);

// Variables for calculator operation
let num1 = null;
let num2 = null;
let operator = null;
let shouldResetDisplay = false; // Flag to reset the display after calculation

// Operate function
function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "X") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "exp") {
    return square(num1);
  } else if (operator === "sqr") {
    return squareRoot(num1);
  } else {
    return "Error: Invalid operator";
  }
}

// Select the display input
const displayInput = document.querySelector(".display input");

// Add event listener to the clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  displayInput.value = "";
  num1 = null;
  operator = null;
  num2 = null;
});

// Select all digit buttons
const digitButtons = document.querySelectorAll(
  ".seven, .eight, .nine, .four, .five, .six, .one, .two, .three, .zero"
);

// Add event listeners to digit buttons
digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (shouldResetDisplay) {
      displayInput.value = "";
      shouldResetDisplay = false;
    }
    displayInput.value += button.textContent