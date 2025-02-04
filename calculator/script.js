let leftNumber = "";
let rightNumber = "";
let operand = "";
const operators = ['+', '-', '*', '/'];

const add = (num1, num2) => (num1 + num2);
const substract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);

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

const numbers = document.querySelectorAll("button.class")
