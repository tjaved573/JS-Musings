// PROTOTYPAL INHERITANCE IN JS - a feature of ES5 replaced by constructor() in ES6 for class inheritance
//! @params:
//// options: an object (aka a hash in JS)

function Car(options) {
  this.model = options.model;
}
Car.prototype.drive = function () {
  return "vroom";
};
honda = new Car({ model: "Civic" });
console.log(honda.model);
console.log(honda.drive());

function Toyota(options) {
  Car.call(this, options); // calling constructor of parent class - Car
  this.color = options.color;
}
Toyota.prototype = Object.create(Car.prototype); // this line extends methods defined in parent class to child class

Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function () {
  return "beep";
};

const t = new Toyota({ color: "red", model: "Corolla" });
console.log(t.model);
console.log(t.drive());
console.log(t.honk());

// ------------ USING ES6 to write parent-child classes (as mentioned above)
console.log("---------------------------------");

class CarES6 {
  // constructor (options)
  // applying destructuring on options hash in the constructor
  constructor({ title }) {
    this.title = title;
  }

  //! in ES6, no need to seperate methods within a class w commas

  // enhanced object literal syntax
  drive() {
    return `As a ${this.title}, I exude luxury!`;
  }
}
const bmw = new CarES6({ title: "730Li" });
console.log(bmw.drive());

class SportsCar extends CarES6 {
  constructor(options) {
    super(options); //! important to call parent class' constructor before initializing child class attributes
    this.hp = options.hp; // called automatically whenever new() keyword is called on the class
  }

  honk() {
    return "I run. Fast.";
  }
}

s = new SportsCar({ hp: 343 });
console.log(s.honk());
console.log(s.hp);
console.log(s.drive());
