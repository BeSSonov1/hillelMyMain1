let x = prompt();

// ===== task 1 option 1

/* if ( x % 3 === 0 ) {
    alert('Fizz');
} else if ( x % 5 === 0 ) {
    alert('Buzz');
} else if ( x % 3 === 0 && x % 5 === 0 ) {
    alert('FizzBuzz');
} else {
    alert('Non Divisible');
}  */

// =====  task 1 option 2

/* switch (true) {
    case x % 3 === 0:
        alert('fizz');
        break;
    case x % 5 === 0:
        alert('buzz');
        break;
    case x % 3 === 0 && x % 5 ===0:
        alert('fizzBuzz');
        break;
    default:
        alert('Non Divisible');
        break;
}  */

// ===== task 1 option 3

/* let result = 
x % 3 ===0 && x % 5 ===0 ? 'FizzBuzz':
x % 3 === 0 ? 'Fizz':
x % 5 === 0 ? 'Buzz':
'Non Divisible';
alert(result); */

// ===== task 2 option 1

/* try {
  if (x === null) {
    alert("Ви відмінили введення.");
  } else if (!isNaN(x)) {
    alert("You entered a number.");
  } else if (x.toLowerCase() === "true" || x.toLowerCase() === "false") {
    alert("You entered a boolean.");
  } else if (typeof x === "string") {
    alert("You entered a string.");
  } else {
    alert("You entered a complex data.");
  }
} catch (error) {
  console.error("Сталася помилка:", error.message);
} */

// ===== task 2 option 2

/* try {
  if (x === null) {
    alert("Ви відмінили введення.");
  } else {
    switch (true) {
      case !isNaN(x):
        alert("You entered a number.");
        break;
      case x.toLowerCase() === "true" || x.toLowerCase() === "false":
        alert("You entered a boolean.");
        break;
      case typeof x === "string":
        alert("You entered a string.");
        break;
      default:
        alert("You entered a complex data.");
        break;
    }
  }
} catch (error) {
  console.error("Сталася помилка:", error.message);
} */

// ===== task 2 option 3

/* try {
  let result = !isNaN(x)
    ? "You entered a number"
    : x.toLowerCase() === "true" || x.toLowerCase() === "false"
    ? "You entered a boolean"
    : typeof x === "string"
    ? "You entered a string"
    : "You entered a complex data.";
  alert(result);
} catch (error) {
  console.error("Сталася помилка:", error.message);
}
 */
