// Variables for calculator operation
let num1 = null;
let num2 = null;
let operator = "";
let noConat = false;
let noOperator = false;

// Functions for all basic operators
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const squareRoot = (num1) => Math.sqrt(num1);

// Operate function
function operate(num1, operator, num2) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "X") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
  if (operator === "sqrt") return squareRoot(num1);
  return "Error: Invalid operator";
}

// Select the display
const display = document.querySelector(".display");

// Add event listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", buttonHandling);
});

// Enable listening to keyboard keys
window.addEventListener("keydown", keyHandling);

// Event handling
function buttonHandling(event) {
  let btnKey = event.target.textContent;

  if (btnKey === "AC") {
    handleClear();
  } else if (btnKey === "DEL") {
    handleDelete();
  } else if (btnKey === "=") {
    handleEqual();
  } else if (btnKey === "+/-") {
    handleSign();
  } else if (btnKey === "sqrt") {
    handleSquareRoot();
  } else if ("+-*/".includes(btnKey)) {
    handleOperator(btnKey);
  } else {
    handleNumber(btnKey);
  }
}

// Key handling
function keyHandling(event) {
  let key = event.key;

  if (key === "=") {
    handleEqual();
  } else if ("+-*/".includes(key)) {
    handleOperator(key);
  } else if ("1234567890.".includes(key)) {
    handleNumber(key);
  }
}

// Clear function
function handleClear() {
  num1 = 0;
  operator = "";
  num2 = null;
  display.textContent = num1;
}

// Delete function
function handleDelete() {
  if (noOperator) return;

  if (num2 === null && operator !== "") {
    operator = "";
  } else {
    let array = display.textContent.split("");
    array.pop();
    if (array.length === 0 && num2 !== null) {
      num2 = null;
      display.textContent = num1;
    } else if (array.length === 0 && num2 === null) {
      display.textContent = 0;
    } else {
      display.textContent = array.join("");
    }
  }
}

// Equal function
function handleEqual() {
  let result = 0;
  if (operator === "") {
    return;
  } else if (num2 === null) {
    result = operate(num1, operator, num1);
    noConat = true;
  } else {
    num2 = Number(display.textContent);
    result = operate(num1, operator, num2);
    noConat = true;
  }
  displayAndClear(result);
}

// Sign function
function handleSign() {
  if (noOperator) return;
  if (num2 === null && operator !== "") return;
  if (display.textContent === "0") return;

  let array = display.textContent.split("");
  if (array[0] === "-") {
    array.shift();
  } else {
    array.unshift("-");
  }
  display.textContent = array.join("");
}

// Operator function
function handleOperator(operatorPressed) {
  if (noOperator) return;

  if (num2 === null) {
    operator = operatorPressed;
    num1 = Number(display.textContent);
    noConat = false;
  } else {
    num2 = Number(display.textContent);
    let result = operate(num1, operator, num2);
    displayAndClear(result);
    if (!noOperator) operator = operatorPressed;
  }
}

// Number function
function handleNumber(numberPressed) {
  if (noOperator) noOperator = false;

  if (noConat) {
    if (numberPressed === ".") {
      numberPressed = "0.";
    }
    display.textContent = numberPressed;
    noConat = false;
  } else if (num2 === null && operator !== "") {
    if (numberPressed === ".") {
      numberPressed = "0.";
    }
    num2 = Number(numberPressed);
    display.textContent = numberPressed;
  } else {
    display.textContent = concatToDisplay(numberPressed);
  }
}

// Concat to display function
function concatToDisplay(number) {
  let currentDisplay = display.textContent;

  if (currentDisplay === "0" && number !== ".") currentDisplay = "";

  if (currentDisplay.length === 14) return currentDisplay;

  if (currentDisplay.includes(".") && number === ".") return currentDisplay;

  return currentDisplay + number;
}

// Display and clear function
function displayAndClear(result) {
  num1 = result;

  if (Number.isNaN(result) || result === Infinity || result === -Infinity) {
    result = "MATH ERROR";
    noOperator = true;
    noConat = true;
  }

  if (result.toString().includes("e")) {
    result = "OUT OF BOUNDS";
    noOperator = true;
    noConat = true;
  }

  if (result.toString().length > 14) {
    let substring = result.toString().split(".");
    if (substring[0].length > 14) {
      result = "OUT OF BOUNDS";
      noOperator = true;
      noConat = true;
    } else {
      let cut = 14 - substring[0].length - 1;
      result = Number(result.toFixed(cut));
    }
  }

  display.textContent = result;
  operator = "";
  num2 = null;
}
