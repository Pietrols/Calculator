//functions for all basic operators
//addition
const add = (num1, num2) => num1 + num2;

//subtraction
const subtract = (num1, num2) => num1 - num2;

//multiplication
const multiply = (num1, num2) => num1 * num2;

//division
const divide = (num1, num2) => num1 / num2;

//square
const square = (num1) => num1 * num1;

//square root
const squareRoot = (num1) => Math.sqrt(num1);

//variables for calculator operation, consisting of a number, an operator and another number
const num1 = null;
const num2 = null;
const operator = null;

//create an operate function
function operate(num1, num2, operator) {
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
    return "Error:Invalid operator";
  }
}

//create
