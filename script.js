const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let expression = display.value;
    let operator;
    let operands;

    if (expression.includes("+")) {
        operator = "+";
    } else if (expression.includes("-")) {
        operator = "-";
    } else if (expression.includes("x")) {
        operator = "x";
    } else if (expression.includes("/")) {
        operator = "/";
    }

    operands = expression.split(operator);

    if (operands.length !== 2) {
        display.value = "ERROR";
        return;
    }

    let operand1 = parseFloat(operands[0]);
    let operand2 = parseFloat(operands[1]);
    let result;

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

    display.value = result;
}

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
    if (a / b === 0) {
        return "Error, div by"
    }
    return a / b;
}