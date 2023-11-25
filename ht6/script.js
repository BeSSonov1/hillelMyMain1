// task 1.1

function minNam(array) {
  if (array.length === null) {
    return null;
  }

  let least = array[0];

  for (let x = 1; x < array.length; x++) {
    if (array[x] < least) {
      least = array[x];
    }
  } return least;
}
let result1 = minNam([1, 7, 5, 6, 0]);
let result2 = minNam([3, 1, -9, -3, 2, 8]);
console.log(result1);
console.log(result2);

//ответы на вопросы:
/* добавляем переменную - "let greatest = array[0];
Добавляем в конструкцию for... еще один if: в нем меняем "<" на ">"
if (array[i] > greatest) {
      greatest = array[i];
}
добавляем к "return least;" большее значение: "return { least, greatest };"
*/



// task 1.2

function polDrom(str) {
  if (str === "") {
    return false;
  }
  let palindrom = true;
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      palindrom = false;
      break;
    }
    start++;
    end--;
  }
  return palindrom;
}
console.log(polDrom(""));
console.log(polDrom("mom"));
console.log(polDrom("bag"));



// task 1.3

function number1(str) {
  let result = 0;

  for (let x = 0; x < str.length; x++) {
    const digit = str[x] - "0";

    let degree = 1;
    for (let j = x + 1; j < str.length; j++) {
      degree *= 10;
    }

    result += digit * degree;
  }

  return result;
}

console.log(number1("15")); // 15
console.log(number1("376")); // 376
console.log(number1("100500")); // 100500

//ответы на вопросы:
/* стоит просто изменить значение в "degree *= 10;" на нужную основу исчесления.
К примеру: ('101', 2) результатом ее работы было число 5. */





