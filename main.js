function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(oper, num1, num2) {
  if(oper === '+') {
    return add(num1, num2);
  } else if(oper === '-') {
    return subtract(num1, num2);
  } else if(oper === '*') {
    return multiply(num1, num2);
  } else if(oper === '/') {
    return divide(num1, num2);
  }
}

const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.oper');
const equalOper = document.querySelector('.equals');
const dispNum = document.querySelector('.num');
const btnClear = document.querySelector('.clear');


buttons.forEach(num => {
  num.addEventListener('click', e => {
    if(dispNum.textContent.length <= 15) {
      dispNum.textContent += num.textContent;
    }    
  });
});

let num1;
let num2;
let op;

operators.forEach(op => {
  op.addEventListener('click', e => {
    num1 = dispNum.textContent;
    if(dispNum.textContent.charAt(dispNum.textContent.length - 1) != '+' &&
     dispNum.textContent.charAt(dispNum.textContent.length - 1) != '-' && dispNum.textContent.charAt(dispNum.textContent.length - 1) != '*' && 
     dispNum.textContent.charAt(dispNum.textContent.length - 1) != '/') {
      dispNum.textContent += op.textContent;
     }
    
  });
});

equalOper.addEventListener('click', e => {
  arrayNum = dispNum.textContent.split('');
  num2 = arrayNum.slice(num1.length + 1).join('');
  op = arrayNum.slice(num1.length, num1.length + 1).join('');
  if(num1 != '' && num2 != '') {
    dispNum.textContent = operate(op, +num1, +num2);
  }  
  num1 = dispNum.textContent;  
});

btnClear.addEventListener('click', e => {
  dispNum.textContent = '';
});



