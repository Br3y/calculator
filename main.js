// declare variable
const buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let num1 = ""
let num2 = ""
let isFirstNum = true

// calculation
function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}
// operation
function operate(operator, num1, num2){
    
}
function populateDisplay(){
    buttons.forEach((button) =>{
        button.addEventListener("click", () =>{
            let btnId = button.id

            if (!isFirstNum) {
                num2 += btnId
                console.log("num2 " + num2 + " ")
                display.innerText = num2;
            } else {
                num1 += btnId
                console.log("num1 " + num1 + " ")
                display.innerText = num1;
            }
        })
    })
}
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        let btn = button.id
        operate(btn)
    })
})