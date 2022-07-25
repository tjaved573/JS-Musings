// PRINT INSIDE JS FUNCTION.
var temp = 23;
console.log(temp);

// Array Helper Methods
  // Goal: avoid using for..i loops, rather use 'Array Helper Methods'
    // Array Helper methods for ES6 JS:
      // f̶o̶r̶E̶a̶c̶h̶ l̶o̶o̶p̶
      // map
      // filter
      // find
      // every
      // some
      // reduce

// FOR..EACH ARRAY HELPER METHOD!!!!

var colors = ['red', 'black', 'green'];
colors.forEach(function (color) {      // passed in anonymous iterator function
  console.log(color);
});


var numbers = [2,343,54,56,7787,345,26];
var sum = 0;
numbers.forEach( function (num) {         // iterator function
  sum += num;
});
console.log(`total sum = ${sum}`);        // js string interpolation


sum = 0;
function adder (num){
  sum += num;
}
numbers.forEach( adder );                 // passing in a defined function
console.log(`total sum using for each loop = ${sum}`);        // js string interpolation


// appending to array in JS
var areas = [];
areas.push(23);
console.log(areas);


// To access attribute of a hash, use '.' notation
var city = { name: 'Seattle', area_code: 98101};
console.log('city name = ' + city.name);


// traversing through array of hashes
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach( function (img) {
  areas.push(img.height * img.width);
});
// Object.entries(images).forEach( ([key, value]) => {
//   var area = 1;
//   Object.entries(value).forEach ( ([key, val]) => {
//     area *= val;
//   });
//   areas.push(area);
// }) ;
console.log(areas);
