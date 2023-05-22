let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


const valueSpan = document.querySelector('#value');
const updateCounterValue = (newValue) => {
    counterValue = newValue;
    valueSpan.textContent = counterValue;
};


const counterDecrement = () => {
    updateCounterValue(counterValue - 1)};
const counterIncrement = () => {
    updateCounterValue(counterValue + 1)};
  
  decrementBtn.addEventListener('click', counterDecrement);
  incrementBtn.addEventListener('click', counterIncrement);
