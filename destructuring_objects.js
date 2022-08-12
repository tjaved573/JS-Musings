//// case 'OBJECT': used for referencing a property off of an object, and mandatorily
//// assigning it to the same variable name as the property name with lesser code;

//// case 'ARRAY': used for destructuring entities off of an array

const pet = {
  nme: "Bruno",
  type: "dog",
};

//! important to ensure that property and variable name match in case of variable assignment

// when {} are used on left side of =, that means create a variable and assign it to
// the property name referenced off of the object on the right side of assignment operator (= sign).
const { nme, type } = pet; //! ES6 variant of the above code

// in pursuit of ES6's goal - to reduce the amount of written code, we can also destructure properties
// out of an object passed in as an argument to a function straight up.
const car = {
  type: "sedan",
  make: "mercedes",
  variant: "E",
};

// ------------

function printAttributes(car) {
  console.log(
    `this car has type ${car.type}, ${car.make} with variant = ${car.variant}`
  );
}
printAttributes(car);
// notice code duplication above when referencing car object repetitively.
//! ES6 refactor for object destructuring. 'object' in JS refers to a hash

function printAttributesRefactored({ type, make, variant }, { person_name }) {
  // could pass in multiple objects in function signature
  console.log(
    ` ${person_name} has type ${type}, ${make} with variant = ${variant}`
  );
}
printAttributesRefactored(car, { person_name: "Taimoor" });

// ------------

//! DESTRUCTURING ARRAYS
const companies = ["Google", "FB", "MSFT"];
// referencing entities off of an array, which is defined to the right side of assignment operator
const [company1, company2, company3] = companies; // [] used for destructuring entities, in case of Array
const { length } = companies; // {} used for destructuring properties/methods, in case of Array
console.log(length);

const [com1, ...rest] = companies;
console.log(rest);

//! DESTRUCTURING ARRAYS and OBJECTS COMBINED
const hotels = [
  { city: "Murree", star: 3 },
  { city: "Skardu", star: 5 },
  { city: "Islamabad", star: 2 },
];

//! destructure stars of skardu hotel
// const [city1, city2, city3] = hotels;
// const { star } = city2; //// property name and variable name must match
// console.log(`Skardu has stars ${star}`);

//! destructure city of Murree hotel
const [{ city }, { star }] = hotels;
console.log(city, star);

//! DESTRUCTURING ARRAYS and OBJECTS COMBINED (cont'd) ....
// find first 2 locations of Google object
const Google = {
  locations: ["Mountain View", "New York", "Brisbane"],
};

const {
  locations: [location1, location2], // first we are destructuring an object into locations using {},
  //followed by destructuring locations array using [] brackets
} = Google;
console.log(`top 2 locations for Google are ${location1} and ${location2}`);

// ------------

////  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper. The resulting data structure looks like this:
//// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' },...]

// const classes = [
//   ["Chemistry", "9AM", "Mr. Darnick"],
//   ["Physics", "10:15AM", "Mrs. Lithun"],
//   ["Math", "11:30AM", "Mrs. Vitalis"],
// ];
// const classesAsObject = classes.map(([subject, time, teacher]) => {
//   return { subject, time, teacher };
// });
// console.log(classesAsObject);

const numbers = [1, 2, 3, 4, 5];
const output = [];

function double(nums, output) {
  if (nums.length > 0) {
    const [first_val, ...rest] = nums;
    output.push(first_val * 2);
    return double(rest, output);
  }
  return output;
}
console.log(double(numbers, []));

function doubleMod([number, ...rest]) {
  return !number ? [] : [number * 2, ...double(rest)];
}

arr = [1, 23, 4, 5, 4353];
function p([first, second, ...arr]) {
  console.log(
    `
    first =  ${first}
    second = ${second}
    remaining = ${arr}`
  );
  console.log(typeof arr);
}
p(arr);

function double([first_value, ...remaining]) {
  if (!first_value) return [];
  else {
    return [first_value * 2, ...double(remaining)];
  }
}
