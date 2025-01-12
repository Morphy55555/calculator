const display = document.querySelector('.display');
const btn = document.querySelectorAll('button'); 

firstNumber = '';
secondNumber = '';
operator = '';
currentTotal = '';


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
    if (num2 === '0') {
        return 'Get out of etttt';
    }
    return num1 / num2;
}

function toThePowerOf(num1, num2) {
    return num1 ** num2;
}

function squared(num1) {
    
    return num1 * num1; 
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
        '/': divide,
        '^' : toThePowerOf,
        'x2' : squared
    };

    const operationFunction = operations[opp]; 
    if (operationFunction) {
        return operationFunction(firstN, secondN); 
    
}
}


let resetDisplay = false; 

function displayOnBtnClick(){
    btn.forEach(button => {
        button.addEventListener('click', (e) => {
            clickedButton = e.target.id;
            const displayText = document.createTextNode(' ');
            
            
            if (resetDisplay && !isNaN(clickedButton)) {
                display.textContent = ''; // Clear the display
                resetDisplay = false; // Reset the flag
            }

            if (clickedButton !== '=') {
            displayText.textContent = clickedButton;
            display.appendChild(displayText);
            }

            if (clickedButton === '-' || 
                clickedButton === '+' || 
                clickedButton === '*' || 
                clickedButton === '/' || 
                clickedButton === '^' || 
                clickedButton === 'x2') {

                operator += clickedButton;   //Assigning operator value 

                display.textContent = '';
                display.appendChild(displayText);
                resetDisplay = true; // Set flag to clear display for the next number

            } else if (operator !== '' && clickedButton !== '=' && clickedButton !== 'AC') {       //If there is a operator value (it's not empty), assign to second number 
                secondNumber += clickedButton;
            } else if (clickedButton !== '=' && clickedButton !== 'AC') {
                firstNumber += clickedButton;  //Assign to first number when numbers are clicked
            } else if (clickedButton === 'AC') {
                resetCalc();
            }

            if (clickedButton === '=' || clickedButton === 'x2' && operator !== '') {
                if (operator === '') {
                    clickedButton = '';
                } else {
                display.textContent = ''; 
                const result = operate(firstNumber, operator, secondNumber);
                
                displayText.textContent = result;
                display.appendChild(displayText);

                firstNumber = result;
                secondNumber = '';
                operator = '';
                resetDisplay = true; 
                }
            }

            if (operator.length > 1) {  //Functionality for calculations via pressing operators
                const result = operate(firstNumber, operator.charAt(0), secondNumber);
                
                displayText.textContent = result;
                display.appendChild(displayText);

                firstNumber = result;
                secondNumber = '';
                operator = clickedButton; 
                resetDisplay = true; 
            }
            
            btn.forEach(button => button.classList.remove('active'));
            button.classList.add('active');
            

            console.log(clickedButton);
        });
    });
}

displayOnBtnClick();