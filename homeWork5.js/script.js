/* let a;

do {
  a = prompt("Введіть будь-яке число:");
  switch (true) {
    case isNaN(a):
      alert("Only numbers, please");
      break;
    case a >= 123:
      alert("Wow, you've ended this endless cycle!");
      break;
    default:
      alert("Should continue");
  }
} while (isNaN(a) || a < 123); */


// === task 2


/* let num1, num2;

do {
  num1 = prompt("please enter any first number");
  num2 = prompt("please enter any second number");
  switch (true) {
    case isNaN(num1):
      alert("only numbers please");
      break;
    case isNaN(num2):
      alert("only numbers please");
      break;
  }
} while (isNaN(num1) || isNaN(num2));

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let start, end;

if (num1 < num2) {
  start = num1;
  end = num2;
} else {
  start = num2;
  end = num1;
}

let Sum = 0;
let Product = 1;

for (let a = start; a <= end; a++) {
  if (a % 2 === 0) {
    Product *= a;
  } else {
    Sum += a;
  }
}
alert(`Sum = ${Sum}, Product = ${Product}`);

 */