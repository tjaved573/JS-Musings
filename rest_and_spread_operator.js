//! REST operator is used when rather than passing an array as a function arg
//! we pass in unknown number of arguments (could be laborious) and want to
//! treat them as a combined array of args.

function addNumbers(numbers) {
  return numbers.reduce((sum, num) => {
    return num + sum;
  }, 0);
}
numbers = [2, 2, 5, 51, 34];
console.log(addNumbers(numbers));

// if function signature accepts each of the entities as a seperate argument,
// could be laborious to enumerate every argument
function addNumbers2(a, b, c, d, e) {
  // add code
}

// could change above code to something like this
//! REST OPERATOR is used as function xyz(...param)
function addNumbers2(...num) {
  // add implementation
}

//! SPREAD OPERATOR builds on top of REST operator.
// used to flatten out multiple enumerables in (a way of concatenating multiple enumerable arguments)
const pets = ["dog", "cat", "rabbit"];
const food = ["bone", "milk", "carrot"];
const pets_food = [...pets, ...food]; // spread operator

//! spread operator works like array concatenation, but also
//! allows you to pass singular values.
const f = ["blue", ...pets, ...food];
console.log(f);

const f2 = function (...pets) {
  console.log(pets);
};

f2(2, 45, 22, 32);
