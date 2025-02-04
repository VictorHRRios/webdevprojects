let leftNumber = "";
let rightNumber = "";
let operand = "";
const operators = ['+', '-', '*', '/'];
const display = document.querySelector("div.display");

const add = (num1, num2) => (num1 + num2);
const substract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);

const addNumber  = (button) => {
    if (leftNumber === "") {
        display.textContent = '';
        display.textContent += button;
        leftNumber = button;
        console.log(leftNumber);
    } else if (operand === "") {
        display.textContent += button;
        leftNumber += button;
        console.log(leftNumber);
    } else{
        //TODO: NO me gusta esto de que se vuelva a asignar el valor
        display.textContent = rightNumber;
        display.textContent += button;
        rightNumber += button;
        console.log(rightNumber);
    }
}
const operate = (op, num1, num2) => {
    switch (op) {
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return substract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
    
        default:
            return "Syntax Error";
            break;
    }
}

const inputNumber = document.querySelectorAll("button.number");
const inputOperand = document.querySelectorAll("button.operand")
const clear = document.querySelector("button#clear");
const result = document.querySelector("button#equal");

inputNumber.forEach((input) => {
    input.addEventListener("click", () => addNumber(input.id))
});

inputOperand.forEach((input) => {
    input.addEventListener("click", () => {
        operand = input.id;
        console.log(operand);
    })
});

clear.addEventListener("click", () => {
    leftNumber = '';
    rightNumber = '';
    operand = '';
    display.textContent = 0;
})

console.table(inputNumber)
