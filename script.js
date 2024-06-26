const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
const displayArea = document.querySelector('.display');
// load audio
const audio = new Audio('./assests/prank.mp3');

let valueToDisplay = '';
let lastOperator = '';
const operators = ['%', '/', '*', '-', '+'];
const display = (str) => {
  displayArea.innerText = str || '0.0';
};
const randomValue = () => {
  const num = Math.round(Math.random() * 10);
  return num < 4 ? num : 0;
};
const actionButton = (value) => {
  displayArea.classList.remove('prank');
  // console.log(value);

  if (value === 'AC') {
    valueToDisplay = '';
    return display(valueToDisplay);
  }
  if (value === 'C') {
    valueToDisplay = valueToDisplay.slice(0, -1);
    return display(valueToDisplay);
  }
  if (value === '=' || value === 'Enter') {
    lastOperator = '';
    // getting last character
    const lastChar = valueToDisplay[valueToDisplay.length - 1];

    // check if last char is one of the operators
    if (operators.includes(lastChar)) {
      valueToDisplay = valueToDisplay.slice(0, -1);
    }
    return totalValue();
  }

  //  showing only one last operator
  if (operators.includes(value)) {
    lastOperator = value;
    // console.log(value, '==');
    const lastChar = valueToDisplay[valueToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      valueToDisplay = valueToDisplay.slice(0, -1);
    }
  }

  if (value === '.') {
    const lastOperatorIndex = valueToDisplay.lastIndexOf(lastOperator);
    const lastNumberSet = valueToDisplay.slice(lastOperatorIndex);
    console.log(lastNumberSet);
    if (lastNumberSet.includes('.')) {
      return;
    }
    // console.log(lastOperatorIndex);
    // console.log('dot');
    if (!lastOperator && valueToDisplay.includes('.')) {
      return;
    }
  }

  valueToDisplay += value;

  display(valueToDisplay);
};
const totalValue = () => {
  const prankValue = randomValue();
  if (prankValue) {
    displayArea.classList.add('prank');
    audio.play();
  }
  const total = eval(valueToDisplay) + prankValue;
  // console.log(total);
  valueToDisplay = total.toString();
  display(valueToDisplay);
};
buttons.forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    btn.style.scale = '.9';
  });
  btn.addEventListener('click', () => {
    // console.log(btn);
    btn.style.scale = '1';
    const value = btn.innerText;

    // console.log(value);
    // console.log(valueToDisplay);
    actionButton(value);
  });
});

// binding keyboard with browser

document.addEventListener('keypress', (e) => {
  console.log(e.code);
  const value = e.key;
  if (e.code.includes('Key')) {
    return;
  }
  actionButton(value);
});
