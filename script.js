// Display is declared, and every click on a calculator button calls "appendToDisplay"
const display = document.getElementById("display");
// Every time there is a click on a button, that button's input is added
// to the display
function appendToDisplay(input) {
    display.value += input;
}
// Logic sets value of display to an empty string
function clearDisplay() {
    display.value = "";
}

function calculate() {
    let expression = display.value;
    let operator;
    let operands;
    // This conditional "includes" allows us to determine the type of operator 
    if (expression.includes("+")) {
        operator = "+";
    } else if (expression.includes("-")) {
        operator = "-";
    } else if (expression.includes("x")) {
        operator = "x";
    } else if (expression.includes("/")) {
        operator = "/";
    }
    // This line allows us to split the two numbers with the operator as a reference point
    operands = expression.split(operator);
    // Project requirement has us with two operands at a time.
    if (operands.length !== 2) {
        display.value = "ERROR";
        return;
    }
    // The parsing from string to float is done because by default, the operands are strings. 
    let operand1 = parseFloat(operands[0]);
    let operand2 = parseFloat(operands[1]);
    let result;
    // The switch determines which operator is present in the "operator" variable, and determines which 
    // arithmetic function the calculator should execute.
    switch (operator) {
        case "+":
            result = add(operand1, operand2);
            break;
        case "-":
            result = subtract(operand1, operand2);
            break;
        case "x":
            result = multiply(operand1, operand2);
            break;
        case "/":
            result = divide(operand1, operand2);
            break;
    }
    // Final step is to set the "value" in the display to the return value
    display.value = result;
}

/* Section for add, sub, mul, and div operations */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        return "Err, div by zero";
    }
    return a / b;
}