let currentInput = '';
let currentResult = '';

function addToScreen(value) {
    currentInput += value;
    document.getElementById('result').textContent = currentInput;
}

function clearLastDigit() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    document.getElementById('result').textContent = '0';
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('result').textContent = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
}