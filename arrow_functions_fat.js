//// Arrow functions are used as a syntactic replacement for defining a function.
//// - a way to succintly express the code in as few characters as possible
//// fat arrow comes after the arguments.

//todo ; TRANSFORM this array into an array containing double the previous numbers
const nums = [1, 2, 3];
output = nums.map(function (num) {
  return num * 2;
});
// w ARROW FUNCTIONS
const numbers = [1, 2, 3];
output = numbers.map((num) => num * 2);
console.log(output);

//// NOTE: in the case of single parameters, one can omit the parentheses and just use a fat arrow.
//// In case of no params, or more than 1 params, using parentheses is required.
//// Also, drop the return keyword when doing the fat-arrow implementation.

//! fat arrow functions also bypass the use of 'this' keyword. HOW SO?
const teams = {
  members: ["Jake", "Jill"],
  teamName: "Team Alpha",
  printTeam: function () {
    return this.members.map(function (member) {
      return `${member} is a member of ${teams.teamName}`; // in place of teams, we cannot use 'this'. 'this' is not bind to the outer context.
    });
  },

  // Fat arrow functions use the concept of "lexical this". if 'this' keyword is used within the fat arrow function,
  // then fat arrow functions bind "this" with the surrounding context.
  printTeam2: function () {
    return this.members.map((member) => {
      return `${member} is a member of ${this.teamName}`; // if 'this' is used after fat arrow function, 'this' is binded to the outer context -> teams.
    });
  },
};
console.log(teams.printTeam());
console.log(teams.printTeam2());

const add = function (a, b) {
  return a + b;
};
const add_refactored = (a, b) => a + b;

// keep the {} curly braces and 'return' keyword for readability (if there are a lot of characters in a line)
const double = function (number1, number2) {
  return number1 * 2 + number2 * 2;
};
const double_factored = (number1, number2) => number1 * 2 + number2 * 2;
console.log(double_factored(4, 5));

const addition = function (a, b) {
  return a + b;
};
console.log(addition(2, 3));

const profile = {
  name: "Alex",
  getName: () => {
    //! 'this' does NOT work with the fat arrow function. WHY?
    return this.name;
  },
  getName2: function () {
    return this.name;
  },
};
console.log(profile.getName());
console.log(profile.getName2());
