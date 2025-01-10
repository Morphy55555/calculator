const display = document.querySelector('.display');
const btn = document.querySelectorAll('button'); 

firstNumber = '';
secondNumber = '';
operator = '';


function addition(num1, num2) {
    return +num1 + +num2;
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

function resetCalc() {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}


function operate(firstN, opp, secondN) {
    const operations = {
        '+': addition,
        '-': subtract,
        '*': multiply,
        '/': divide
    };

    const operationFunction = operations[opp]; 
    if (operationFunction) {
        console.log(operationFunction(firstN, secondN))
        return operationFunction(firstN, secondN); 
    
}
}


function displayOnBtnClick(){
btn.forEach(button => {
    button.addEventListener('click', (e) => {
        clickedButton = e.target.id;
        const displayText = document.createElement('span');
        displayText.textContent = clickedButton;
        display.appendChild(displayText);

        if (clickedButton === '-' || 
            clickedButton === '+' || 
            clickedButton === '*' || 
            clickedButton === '/') {
            operator += clickedButton;

        } else if (operator !== '' && clickedButton !== '=' && clickedButton !== 'AC') {
            secondNumber += clickedButton;
        } else  if (clickedButton !== '=' && clickedButton !== 'AC') {
            firstNumber += clickedButton;
        } else if (clickedButton === 'AC') {
            resetCalc();
        };

        if (clickedButton === '=') {
            display.textContent = ''; 
            const result = operate(firstNumber,operator,secondNumber);
            const displayText = document.createElement('span');
            displayText.textContent = result;
            display.appendChild(displayText);
        }
        console.log(clickedButton);
        
    })
});
};




displayOnBtnClick();
