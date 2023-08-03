let firstValue = '';
let firstValueCurrent = '';

let mathOperator = '';
let mathOperatorCurrent = '';

let secondValue = '';
let secondValueCurrent = '';

let waitingForSecond = false;

function addToDisplay(value) {
    // math operator
    if (value === '+' || value === '-' || value === '*' || value === '/') {

        mathOperator = document.querySelector('.button.btn > .button.btn');

        if (mathOperator === null) {
            mathOperator = '';
        }

        let screen = document.querySelector('.screen-placeholder');
        mathOperator += value
        mathOperatorCurrent += mathOperator;
        screen.textContent = mathOperatorCurrent;
        // second number
        waitingForSecond = true;
    } else if (waitingForSecond) {

        secondValue = document.querySelector('.button.btn > .button.btn');

        if (secondValue === null) {
            secondValue = '';
        }
        let screen = document.querySelector('.screen-placeholder');
        secondValue += value;
        secondValueCurrent += secondValue;
        screen.textContent = secondValueCurrent;

    }
    // first number
    firstValue = document.querySelector('.button.btn > .button.btn');

    if (firstValue === null) {
        firstValue = '';
    }

    let screen = document.querySelector('.screen-placeholder');
    firstValue += value;
    firstValueCurrent += firstValue
    screen.textContent = firstValueCurrent;

}

function clearDisplay() {

    firstValue = '';
    firstValueCurrent = '';
    mathOperator = '';
    mathOperatorCurrent = '';
    secondValue = '';
    secondValueCurrent = '';
    waitingForSecond = false;

    let screen = document.querySelector('.screen-placeholder');
    screen.innerHTML = firstValueCurrent;

}

function calculateResult() {

    let num1 = parseFloat(firstValueCurrent);
    let num2 = parseFloat(secondValueCurrent);

    let result = 0;
    switch (mathOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
        case '/':
            result = num1 / num2;
            break;
    }

    let screen = document.querySelector('.screen-placeholder');
    screen.innerHTML = result;

    firstValue = '';
    firstValueCurrent = '';
    mathOperator = '';
    mathOperatorCurrent = '';
    secondValue = '';
    secondValueCurrent = '';
    waitingForSecond = false;

}