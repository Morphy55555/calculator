function addition(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
} 

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


firstNumber = null;
SecondNumber = null;
operator = null;

function operate(firstN,op,secondN) {
    return op(firstN, secondN)
}
