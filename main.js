// declare variable
const buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let num1 = ""
let num2 = ""
let isFirstNum = true

// clear/reset function
function clr() {
    num1 = ""
    num2 = ""
    display.innerText = ""
}

// calculation
function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}
// operation
function operate(operator, num1, num2) {

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
                console.log(` num2 ${num2} `)
                display.innerText = num1;
            }
            switch(btnId){
                case "clr":
                    isFirstNum = true;
                    clr();
                    break;
            }
        })
    })
}
