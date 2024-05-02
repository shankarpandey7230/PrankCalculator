const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
const displayArea = document.querySelector('.display');
const display = (str) => {
  displayArea.innerText = str;
};

let valueToDisplay = '';
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // console.log(btn);
    const value = btn.innerText;
    valueToDisplay += value;
    // console.log(value);
    // console.log(valueToDisplay);
    display(valueToDisplay);
  });
});
