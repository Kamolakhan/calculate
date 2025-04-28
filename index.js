let current = 0;
let operator = null;
let newNumber = false;

  function pressNumber(num) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || newNumber) {
      display.innerText = num;
      newNumber = false;
    } else {
      display.innerText += num;
    }
  }

  function pressOperator(selectedOperator) {
    const display = document.getElementById('display');
    if (operator !== null) {
      calculate();
    } else {
      current = parseFloat(display.innerText);
    }
    operator = selectedOperator;
    newNumber = true;
  }

  function pressEqual() {
    if (operator !== null) {
      calculate();
      operator = null;
    }
  }

  function pressClear() {
    document.getElementById('display').innerText = '0';
    current = 0;
    operator = null;
    newNumber = false;
  }

  function calculate() {
    const display = document.getElementById('display');
    let number = parseFloat(display.innerText);
  
    if (operator === '+') {
      current += number;
    } else if (operator === '-') {
      current -= number;
    } else if (operator === '*') {
      current *= number;
    } else if (operator === '/') {
      if (number !== 0) {
        current /= number;
      } else {
        alert("Ошибка: деление на ноль");
        pressClear();
        return;
      }
    }
  
    display.innerText = current;
  }