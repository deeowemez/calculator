// https://www.codewithfaraz.com/img/calculator.png
// https://media.istockphoto.com/id/1031072096/vector/new-icon-of-a-simple-calculator-with-a-set-of-digits-vector-illustration-eps-10.jpg?s=612x612&w=0&k=20&c=MoqHgC60t78kKOIRXigDed-tUwkxS_zRx_JoQghSBnc=
// https://cdn.dribbble.com/users/2381635/screenshots/6893304/20190801.png?resize=400x0

let numOne = '';
let numTwo = '';
let expression = '';
let splitArray = [];

function add(numOne, numTwo){return numOne + numTwo}
function subtract(numOne, numTwo){return numOne - numTwo}
function multiply(numOne, numTwo){return numOne * numTwo}
function divide(numOne, numTwo){return (numOne / numTwo).toFixed(3)}

function operate(numOne, numTwo, op){
  switch (op){
    case '+':
      return add(numOne, numTwo);
    case '-':
      return subtract(numOne, numTwo);
    case 'x':
      return multiply(numOne, numTwo);
    case '÷':
      return divide(numOne, numTwo);
  }
}

function currentDisplay(){
  if (expression === '') {
    currDisplay.textContent = '0';
  } else currDisplay.textContent = expression;
}

function resultDisplay(){
  prevDisplay.textContent = `${expression} = ${splitArray}`;
  currDisplay.textContent = splitArray;
}

function declareExpression(e){
  catSymbol();
  expression += e.target.id;
  currentDisplay();
  console.log(expression);
  catSymbol();
}

function hoverIn(e){
  if (e.target.className !== 'clear'){
    const hovInNum = document.getElementById(`${e.target.id}`) 
    hovInNum.style.cssText = 'background-color: #FFDB58;';  
  }else {
    const hovInClear = document.getElementById(`${e.target.id}`)
    hovInClear.style.cssText = 'background-color: #CB4154;'; 
  }
}

function hoverOut(e){
  const hovOut = document.getElementById(`${e.target.id}`)
  hovOut.style.cssText = 'background-color: rgb(243,241,244);'; 
}

function identifyOperators(){
  let operator = [];
  for (let dig of expression){
    if (dig === '+' || dig === '-' || dig === '÷' || dig === 'x'){
      operator.push(dig);
    }
  }
  return operator;
}

function clearDisplay(){
  expression = '';
  // console.log(expression);
  operator = [];
  // console.log(operator);
  currDisplay.textContent = '0';
}

function deleteDigit(){
  expression = expression.slice(0, -1);
  console.log(expression);
  currentDisplay();
}

function splitExpression(){
  let operator = identifyOperators();
  let splitExp = expression;
  // console.log(operator);
  let tempChar = operator[0]; 
    for(let i = 1; i < operator.length; i++){
      splitExp = splitExp.split(operator[i]).join(tempChar);
    }
  splitArray = splitExp.split(tempChar);
  console.log(splitArray);

  for (let op of operator){
    if (splitArray[1] === '0'){ 
      alert("Undefined! Division by Zero");
      return; 
    }
    let result = operate(Number(splitArray[0]), Number(splitArray[1]), `${op}`);
    console.log(result);
    splitArray.shift();
    splitArray[0] = result;
    console.log(splitArray);
  }
  resultDisplay();
}

function catSymbol(){
  const catBtn = document.getElementById('cat');
  catBtn.textContent = '≽^•o•^≼';
  setTimeout(() => {catBtn.textContent = '≽^•⩊•^≼';
  }, 200);
}


const currDisplay = document.getElementById('currentNumDisplay');
const prevDisplay = document.getElementById('prevNumDisplay');
const equals = document.getElementById('equals');
equals.addEventListener('click', (e) => splitExpression());
const clear = document.getElementById('C');
clear.addEventListener('click', () => clearDisplay());
const delDigit = document.getElementById('B');
delDigit.addEventListener('click', () => deleteDigit());
const numberBtn = document.getElementsByClassName('number');
for (let i = 0; i < numberBtn.length; i++) numberBtn[i].addEventListener('click', (e) => declareExpression(e));
for (let i = 0; i < numberBtn.length; i++) numberBtn[i].addEventListener('mouseover', (e) => hoverIn(e));
for (let i = 0; i < numberBtn.length; i++) numberBtn[i].addEventListener('mouseout', (e) => hoverOut(e));
const clearBtn = document.getElementsByClassName('clear');
for (let i = 0; i < clearBtn.length; i++) clearBtn[i].addEventListener('mouseover', (e) => hoverIn(e));
for (let i = 0; i < clearBtn.length; i++) clearBtn[i].addEventListener('mouseout', (e) => hoverOut(e));