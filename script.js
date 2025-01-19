'use strict';


function handleSubmit() {
    let num1= document.getElementbyId("num1");
    let num2= document.getElementbyID("num2");
num1= Number(num1.value)
num2= Number(num2.value)

let area = num1 * num2

output.innerHTML = "<p>" + area + "</p>";
"<p> 4565 </p>"
} 

let button = document.getElementbyId("submit")

button.addEventListener("click", handleSubmit)





