// declare variable
const buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let num1 = ""
let num2 = ""
let operator = ""
let total = ""
let isFirstNum = true

// clear/reset function
function clr() {
    num1 = ""
    num2 = ""
    display.innerText = ""
}

// calculation
function add(num1, num2) {
    total = num1 + num2
    return total
}
function subtract(num1, num2) {
    total = num1 - num2
    return total
}
function multiply(num1, num2) {
    total = num1 * num2
    return total
}
function divide(num1, num2) {
    total = num1 / num2
    return total
}
// operation
function operate(operator, num1, num2) {
    switch(operator){
        case "+":
            add(num1, num2)
            display.innerText = total
            break;
        case "-":
            subtract(num1, num2)
            display.innerText = total
            break;
        case "*":
            multiply(num1, num2)
            display.innerText = total
            break;
        case "/":
            divide(num1, num2)
            display.innerText = total
            break;
    }
    console.log("total: " + total)
}

// display on HTML
function populateDisplay() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // assign button.id to btnId
            let btnId = button.id

            // condition where to store number
            if (!isFirstNum) {
                num2 += btnId
                console.log(` num2 ${num2} `)
                display.innerText = num2;
            } else {
                num1 += btnId
                console.log(` num1 ${num1} `)
                display.innerText = num1;
            }
            switch (btnId) {
                case "clr":
                    isFirstNum = true;
                    clr();
                    break;
                case "+":
                    isFirstNum = false
                    num1 = parseFloat(num1)
                    operator = btnId
                    break;
                case "-":
                    isFirstNum = false
                    num1 = parseFloat(num1)
                    operator = btnId
                    break;
                case "*":
                    isFirstNum = false
                    num1 = parseFloat(num1)
                    operator = btnId
                    break;
                case "/":
                    isFirstNum = false
                    num1 = parseFloat(num1)
                    operator = btnId
                    break;
                case "=":
                    num2 = parseFloat(num2)
                    operate(operator, num1, num2)
                    break;
            }
        })
    })
}

populateDisplay()