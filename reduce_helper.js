var numbers = [2, 43, 5];

// reduce is used when we want to condense everything in the array to one value, given a starting value.

var numbers = [2, 43, 5];
sum = numbers.reduce(function (sum, number) {
  // argument signature varies for reduce compared to other
  return number + sum;
}, 10); // the second value is treated as the starting value AND the first param to the function
console.log("value of the sum = ", sum);

var primaryColors = [{ color: "red" }, { color: "blue" }, { color: "beige" }];
output = primaryColors.reduce(function (prefix, item) {
  return prefix + " " + item.color;
}, "All available colors = ");
console.log(output);

var primaryColors = [{ color: "red" }, { color: "blue" }, { color: "beige" }];
console.log(
  primaryColors.reduce(function (prev, item) {
    prev.push(item.color);
    return prev; // ALWAYS RETURN FROM INSIDE
  }, [])
);

// Classic case to use reduce_helper would be leetcode problem of BALANCED PARENTHESES.

var input_seq = "()()";
output = !input_seq.split("").reduce(function (prev, item) {
  if (prev < 0) {
    return prev;
  } // case for when sequence becomes negative altogether
  if (item === "(") {
    return ++prev;
  } else if (item === ")") {
    return --prev;
  } else return prev; // case for non bracket character
}, 0);
console.log(output);

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];
deskTypes = desks.reduce(
  function (prev, desk) {
    if (desk.type === "sitting") {
      prev["sitting"] += 1;
      return prev;
    } else if (desk.type === "standing") {
      prev["standing"] += 1;
      return prev;
    }
  },
  { sitting: 0, standing: 0 }
);
console.log(deskTypes);
console.log(Array.isArray(deskTypes));

// some iterator functions rely on truethy and false-y values.

var numbers = [12, 43, 115];
console.log(
  numbers.some(function (number) {
    // argument signature varies for reduce compared to other
    return number > 15;
  })
); // the second value is treated as the starting value AND the first param to the function

const chars = [-5, 6, 2, 0];

// Goal: return doubled positive numbers
output = chars
  .filter(function (char) {
    return char > 0;
  })
  .map(function (char) {
    return char * 2;
  });
console.log(output);

// SAME ACCOMPLISHED WITH ONE REDUCE METHOD AS FILTER()=>MAP()
output = chars.reduce(function (prev, char) {
  if (char > 0) {
    prev.push(char * 2);
    return prev;
  } else return prev;
}, []);
console.log(output);

// Goal: remove all duplicates in array
function unique(array) {
  return array.reduce(function (prev, item) {
    if (!prev.includes(item)) {
      prev.push(item);
      return prev;
    } else return prev;
  }, []);
}
array = [2, 4, 55, 6, 72, 1, 2, 3, 4];
console.log(unique(array));
