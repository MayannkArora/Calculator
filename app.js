// Defining the elements in screen 

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operator = document.querySelector('#operator');
let sign = document.querySelector('#equalSign');
let result = document.querySelector('#result');
let slash = document.querySelector('#slash');


// Defining the elments in keys

// Defining elements in row 1

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let add = document.querySelector('#add');

// Defining elements in row 2

let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let subtract = document.querySelector('#subtract');

// Defining elements in row 3

let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let multiply = document.querySelector('#multiply');

// Defining elements in row 4

let clear = document.querySelector('#clear');
let zero = document.querySelector('#zero');
let equal = document.querySelector('#equalTo');
let divide = document.querySelector('#divide');

// Defining elements in row 5

let star = document.querySelector('#star');
let dot = document.querySelector('#dot');
let hash = document.querySelector('#hash');
let sqrt = document.querySelector('#sqrt');

// function oneChange(){
//     num1.innerText+=1;
// }

// Adding event listeners for all keys 

one.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=1;}
        else {
            num2.innerText+=1;
        }
});

two.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=2;}
        else {
            num2.innerText+=2;
        }
});

three.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=3;}
        else {
            num2.innerText+=3;
        }
});

four.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=4;}
        else {
            num2.innerText+=4;
        }
});

five.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=5;}
        else {
            num2.innerText+=5;
        }
});

six.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=6;}
        else {
            num2.innerText+=6;
        }
});

seven.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=7;}
        else {
            num2.innerText+=7;
        }
});

eight.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=8;}
        else {
            num2.innerText+=8;
        }
});

nine.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=9;}
        else {
            num2.innerText+=9;
        }
});

zero.addEventListener('click',()=>{
    if(operator.innerHTML){
        num1.innerText+=0;}
        else {
            num2.innerText+=0;
        }
});


// adding event listeners for operands

add.addEventListener('click', ()=>{
    operator.innerText='+';
})

subtract.addEventListener('click', ()=>{
    operator.innerText='-';
})

multiply.addEventListener('click', ()=>{
    operator.innerText='x';
})

divide.addEventListener('click', ()=>{
    operator.innerText='/';
})



// defining opertor functions
function sum (){
    let sum = parseInt(num1.innerText) + parseInt(num2.innerText);
    result.innerText = sum;
}

function minus (){
    let difference = parseInt(num2.innerText)- parseInt(num1.innerText);
    result.innerText = difference;
}

function division(){
    let quotient = parseInt(num2.innerText)/parseInt(num1.innerText);
    result.innerText = quotient;
}

function multplication(){
    let product = parseInt(num1.innerText) * parseInt(num2.innerText);
    result.innerText = product;
}


// defining equal to function

equal.addEventListener('click', ()=>{
if(operator.innerText=='+'){
    sum();
} else if (operator.innerText=='-'){
    minus();
} else if (operator.innerText=='x'){
    multplication();
} else {
    division();
}


});

// defining clear function 

clear.addEventListener('click',()=>{
    num1.innerText='';
    num2.innerText='';
    operator.innerText='';
    result.innerText='';

})