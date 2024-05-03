const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
const displayArea = document.querySelector('.display');

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
  console.log(value);

  if (value === 'AC') {
    valueToDisplay = '';
    return display(valueToDisplay);
  }
  if (value === 'C') {
    valueToDisplay = valueToDisplay.slice(0, -1);
    return display(valueToDisplay);
  }
  if (value === '=') {
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
  const total = eval(valueToDisplay) + prankValue;
  // console.log(total);
  valueToDisplay = total.toString();
  display(valueToDisplay);
};
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // console.log(btn);
    const value = btn.innerText;

    // console.log(value);
    // console.log(valueToDisplay);
    actionButton(value);
  });
});
