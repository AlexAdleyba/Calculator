var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMult = document.getElementById('buttonMult');
var buttonDivide = document.getElementById('buttonDivide');
var buttonC = document.getElementById('buttonC');
var result = document.getElementById('result');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');

function onButtonPlusClick () {
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var number1 = parseInt(number1.value);
var number2 = parseInt(number2.value);
var sum = number1 + number2;
result.value = sum
}

function onButtonMinusClick() {
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var number1 = parseInt(number1.value);
var number2 = parseInt(number2.value);
var minus = number1 - number2;
result.value = minus
}

function onButtonMultClick() {
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var number1 = parseInt(number1.value);
var number2 = parseInt(number2.value);
var mult = number1 * number2;
result.value = mult
}

function onButtonDivideClick() {
var number1 = parseInt(number1.value);
var number2 = parseInt(number2.value);
var divide = number1/number2;
result.value = divide   
}

function onButtonCClick() {

    number1.value = ' ';
    number2.value = ' ';
    result.value = " " ;
    }

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMult.addEventListener('click', onButtonMultClick)
buttonDivide.addEventListener('click', onButtonDivideClick)
buttonC.addEventListener('click', onButtonCClick)


       
       
