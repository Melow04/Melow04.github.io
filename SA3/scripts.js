var currentDisplay = '0';
var displayElement = document.getElementById('display');
var lastClickedButton = null;
var currentGradientAngle = 45;

//function para sa display after mag take effect nung function
function updateDisplay() {
    displayElement.textContent = currentDisplay;
}


//function para sa pag clear sa display
function clearDisplay() {
    // rereset yung display to 0 para mabalik sa default na 0
    currentDisplay = '0';
    updateDisplay();
}

//function para maka backspace
function backspace() {
    //if may laman yunglength ng current displaydadawing 0
    if (currentDisplay.length === 1) {
        currentDisplay = '0';
    } else {
        currentDisplay = currentDisplay.slice(0, -1);
    }
    updateDisplay();
}

//function para sa pagidentify kung operator ba yung value
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function isOperatorLastInput() {
    return isOperator(currentDisplay.slice(-1));
}


//function para sa pag calculate
function calculate() {
    try {
        // slice operator
        if (isOperatorLastInput()) {
            currentDisplay = currentDisplay.slice(0, -1);
        }
        
        currentDisplay = eval(currentDisplay).toString();
        
        // zero div
        if (currentDisplay === 'Infinity' || currentDisplay === 'NaN') {
            currentDisplay = 'Error';
        }
    } catch (error) {
        currentDisplay = 'Error';
    }
    updateDisplay();
}

//function para sa pag rotate sa gradient
function rotateGradient() {
    currentGradientAngle = (currentGradientAngle + 45) % 360;
    document.body.style.background = `linear-gradient(${currentGradientAngle}deg, #B24C63, #4C202A)`;
}

//function para sa pag set sa last clicked button
function setLastClicked(button) {
    //Remove the last clicked para maadd yung bago
    if (lastClickedButton) {
        lastClickedButton.classList.remove('last-clicked');
    }
    
    // Add 
    button.classList.add('last-clicked');
    
    // Update the reference
    lastClickedButton = button;
}

//function para sa pag dagdag sa display
function appendToDisplay(value) {
    if (currentDisplay === '0' && value !== '.') {
        currentDisplay = value;
    } else {
        // pangstop ng decimal
        if (value === '.' && currentDisplay.includes('.') && 
            !isOperatorLastInput()) {
            return;
        }
        
        // pangstop ng operator
        if (isOperator(value) && isOperatorLastInput()) {
            currentDisplay = currentDisplay.slice(0, -1) + value;
        } else {
            currentDisplay += value;
        }
    }
    updateDisplay();
}








