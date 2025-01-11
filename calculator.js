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


let resetDisplay = false; 

function displayOnBtnClick(){
    btn.forEach(button => {
        button.addEventListener('click', (e) => {
            clickedButton = e.target.id;

            
            if (resetDisplay && !isNaN(clickedButton)) {
                display.textContent = ''; 
                resetDisplay = false; 
            }

            const displayText = document.createTextNode(' ');
            displayText.textContent = clickedButton;
            display.appendChild(displayText);

            if (clickedButton === '-' || 
                clickedButton === '+' || 
                clickedButton === '*' || 
                clickedButton === '/') {
                operator += clickedButton;
                display.textContent = '';
                display.appendChild(displayText);
                resetDisplay = true; 
            } else if (operator !== '' && clickedButton !== '=' && clickedButton !== 'AC') {
                secondNumber += clickedButton;
            } else if (clickedButton !== '=' && clickedButton !== 'AC') {
                firstNumber += clickedButton;
            } else if (clickedButton === 'AC') {
                resetCalc();
            }

            if (clickedButton === '=') {
                display.textContent = ''; 
                const result = operate(firstNumber, operator, secondNumber);
                
                displayText.textContent = result;
                display.appendChild(displayText);

                firstNumber = result;
                secondNumber = '';
                operator = '';
                resetDisplay = true; 
            }

            if (operator.length > 1) { 
                const displayText = document.createTextNode(' ');
                const result = operate(firstNumber, operator.charAt(0), secondNumber);
                
                displayText.textContent = result;
                display.appendChild(displayText);

                firstNumber = result;
                secondNumber = '';
                operator = clickedButton; 
                resetDisplay = true; 
            }
            
            console.log(clickedButton);
        });
    });
}

displayOnBtnClick();