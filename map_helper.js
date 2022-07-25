
// Array Helper Methods
  // Goal: avoid using for..i loops, rather use 'Array Helper Methods'
    // Array Helper methods for ES6 JS:
      // f̶o̶r̶E̶a̶c̶h̶ l̶o̶o̶p̶
      // m̶a̶p̶
      // filter
      // find
      // every
      // some
      // reduce

// MAP HELPER METHOD!!!!

var numbers = [2,45,89,32,11];
var doubleNumbers = [];

// ITERATIVE WAY
for (var i = 0; i < numbers.length; i++){
  doubleNumbers.push(numbers[i] * 2);
}
doubleNumbers;

// FUNCTIONAL WAY
var numbers = [2,45,89,32,11];
console.log(numbers);
var doubled = numbers.map(
  function (number){
    return number * 2;
  }
);
doubled;


// MAP CAN ALSO BE USED FOR PERFORMING A PLUCK OPERATION
var cars = [
  {name: 'Buick', model: '2019'},
  {name: 'Corolla', model: '2222'},
];
// pluck operation
car_names = cars.map( function (car) {
  return car.name;
});
console.log(car_names);
