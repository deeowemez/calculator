// https://www.codewithfaraz.com/img/calculator.png
// https://media.istockphoto.com/id/1031072096/vector/new-icon-of-a-simple-calculator-with-a-set-of-digits-vector-illustration-eps-10.jpg?s=612x612&w=0&k=20&c=MoqHgC60t78kKOIRXigDed-tUwkxS_zRx_JoQghSBnc=
// https://cdn.dribbble.com/users/2381635/screenshots/6893304/20190801.png?resize=400x0

let numOne = '';
let numTwo = '';
let operator = [];
let expression = '';
let splitArray = [];

function add(numOne, numTwo){
  return numOne + numTwo;
}

function subtract(numOne, numTwo){
  return numOne - numTwo;
}

function multiply(numOne, numTwo){
  return numOne * numTwo;
}

function divide(numOne, numTwo){
  return (numOne / numTwo).toFixed(3);
}

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

function split(){
  let splitExp = expression;
  console.log(operator);
  let tempChar = operator[0]; 
    for(let i = 1; i < operator.length; i++){
      splitExp = splitExp.split(operator[i]).join(tempChar);
    }
  splitArray = splitExp.split(tempChar);
  console.log(splitArray);

  for (let op of operator){
    console.log(splitArray[1]);
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
  prevDisplay.textContent = `${expression} = ${splitArray}`;
  currDisplay.textContent = splitArray;
}

function clearDisplay(){
  expression = '';
  console.log(expression);
  operator = [];
  console.log(operator);
  currDisplay.textContent = '0';
}

function deleteDigit(){
  let delArray = expression.split('');
  console.log(delArray);
  delArray.pop();
  expression = delArray.join('');
  console.log(expression)
  currDisplay.textContent = expression;
}

function clickBtn(e){
  // console.log(e.target.id);
  expression += e.target.id;
  currDisplay.textContent = expression;
  console.log(expression);
  if (e.target.id === '+' || e.target.id === '-' || e.target.id === '÷' || e.target.id === 'x'){
    operator.push(e.target.id);
    // operator = e.target.id;
    // console.log(operator);
  }
};

const currDisplay = document.getElementById('currentNumDisplay');
const prevDisplay = document.getElementById('prevNumDisplay');
const equals = document.getElementById('equals');
equals.addEventListener('click', (e) => split());
const clear = document.getElementById('C');
clear.addEventListener('click', () => clearDisplay());
const delDigit = document.getElementById('B');
delDigit.addEventListener('click', () => deleteDigit());
const numberBtn = document.getElementsByClassName('number');
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', (e) => clickBtn(e));
}




