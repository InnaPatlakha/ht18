/* Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.
Обидва числа і знак виходять від користувача.*/

function doMath(x, znak, y) {
  x = Number(prompt("Введіть перше число"));
  y = Number(prompt("Введіть друге число"));
  znak = prompt("Введіть бажану операцію: +, -, *, /, %, ^ ");
  let result;

  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;  
    case "%":
      result = x % y;
      break;
    case "^":
      result = Math.pow(x,y);
      break;    
  }
  return result;
}

alert(doMath());