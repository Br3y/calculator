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
function del(){
    if(!isFirstNum){
        num2 = num2.slice(0, -4)
        display.innerHTML = num2
    } else {
        num1 = num1.slice(0, -4)
        display.innerHTML = num1
    }
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
    // if operator is divide by 0
    if (operator == "/" && num2 === 0 || operator == "/" && num2 === "0") {
        display.innerText = "ERROR"
        return
    }
    // what operator pick to calculate
    switch (operator) {
        case "+":
            add(num1, num2)
            break;
        case "-":
            subtract(num1, num2)
            break;
        case "*":
            multiply(num1, num2)
            break;
        case "/":
            divide(num1, num2)
            break;
    }
    // limit the display output
    display.innerText = total.toFixed(2)
    console.log("total: " + total)
    // return total value
    return total
}

// display on HTML
function populateDisplay() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // assign button.id to btnId
            let btnId = button.id

            // condition when second number and operator is pick
            if (!isFirstNum && btnId == "+" || !isFirstNum && btnId == "-" || !isFirstNum && btnId == "*" || !isFirstNum && btnId == "/") {
                num1 = parseFloat(num1)
                num2 = parseFloat(num2)
                operate(operator, num1, num2)
                operator = btnId
                // when total is returned, assign num1 to total
                num1 = total
                num2 = ""
                isFirstNum = true
            }
            // condition where to store number
            else if (!isFirstNum) {
                num2 += btnId
                console.log(` num2 ${num2} `)
                display.innerText = num2;
            } else {
                num1 += btnId
                console.log(` num1 ${num1} `)
                display.innerText = num1;
            }
            // condition if operator, clr and equal is click
            switch (btnId) {
                case "clr":
                    isFirstNum = true;
                    clr();
                    break;
                case "del":
                    del();
                    break;
                case "+":
                    isFirstNum = false
                    num2 = ""
                    operator = btnId
                    break;
                case "-":
                    isFirstNum = false
                    num2 = ""
                    operator = btnId
                    break;
                case "*":
                    isFirstNum = false
                    num2 = ""
                    operator = btnId
                    break;
                case "/":
                    isFirstNum = false
                    num2 = ""
                    operator = btnId
                    break;
                case "=":
                    num1 = parseFloat(num1)
                    num2 = parseFloat(num2)
                    operate(operator, num1, num2)
                    // when total is returned, assign num1 to total
                    num1 = total
                    isFirstNum = true
                    break;
            }
        })
    })
}

// invoke populateDisplay to make populateDisplay work
populateDisplay()