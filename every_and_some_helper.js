
// used in the case when we need to define whether SOME or ALL values satisfy a condition

var computers = [
  {name: 'Acer', ram: 50},
  {name: 'Sony Vaio', ram: 120},
  {name: 'Apple Macbook', ram: 40.5}
];

// want to check whether all values satisfy condition ram > 40
allSatisfy = true;
someSatisfy = false;
for (var i = 0; i < computers.length; i++){
  if (computers[i].ram < 40){
    allSatisfy = false;
  } else {
    someSatisfy = true;
  }
}
console.log("someSatisfy = ", someSatisfy, " allSatisfy = ", allSatisfy)



// EVERY - performs an AND between all boolean values returned by every iteration on the search condition
// SOME - performs an OR between all boolean values returned by every iteration on the search condition
console.log("All Satisfy = ", computers.every(function(computer){
  return computer.ram > 40;
}));
console.log("Some Satisfy = ", computers.some(function(computer){
  return computer.ram > 40;
}));

