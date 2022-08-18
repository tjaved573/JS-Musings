// Generator functions are functions that run some code, return a value from the middle of the execution
// and then continue the function execution right from where the execution was paused.

// we can enter and exit a generator function multiple times, unlike a regular function in which we enter
// and exit once. Next time a regular function is called, it will run from the start through the end.

//! a function with an (*) is called a generator function
function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield "cash"; // every time a 'yield' keyword is encountered, the function returns the value passed in with yield.
  // the next time .next() is called, the generator function continues execution from here until the following yield statement.

  // for every yield statement in generator function, we must call .next() for equal number of times
  const cleanClothes = yield "laundry";

  // walking back home
  return [stuffFromStore, cleanClothes];
}

// stuff in the store
// const gen = shopping();
// console.log(gen.next()); // leaving our house

// console.log(gen.next()); // leaving our house
// console.log(gen.next()); // leaving our house

// ---------------

//// yield* -> run a generator with yield statements from within another generator. Used for
// Generator delegation -> when multiple generators need to be run together

const testingTeam = {
  tester1: "Jack",
  tester2: "Ben",
};

const engineerTeam = {
  dev: "Sylvia",
  senior_dev: "Michelle",
  manager: "Roger",
  testingTeam,
};

function* engTeamIterator(engTeam) {
  yield engTeam.dev;
  yield engTeam.senior_dev;
  yield engTeam.manager;

  // GOAL: collate engTeamIterator and testTeamIterator to be called using ONE 'for-loop'
  //// yield* -> run a generator with yield statements from within another generators called GENERATOR DELEGATION
  yield* testTeamIterator(engTeam.testingTeam);
}

function* testTeamIterator(tt) {
  yield tt.tester1;
  yield tt.tester2;
}

const devs = [];
for (let member of engTeamIterator(engineerTeam)) {
  devs.push(member);
}

// To clean up this code, ES6 offers a feature called Symbol Iterator
// Symbol.iterator tells for/of loop how it should iterate over an object
// When a for/of loop iterates over an object it looks whether the object has a defined Symbol.iterator property.
// Arrays have Symbol.iterator property defined on them, so we can run for/of loop on each element inside array
// Each yield in Symbol.iterator is going to populate the parameter inside the for/of loop.
// On any custom object, we can define a Symbol.iterator, with which for/of loop works seamlessly
// With generators, array helper methods (map, filter, reduce...) do NOT work.

//! refactoring above code to add generators to the objects themselves
const testingTeam2 = {
  tester1: "Jack",
  tester2: "Ben",
  [Symbol.iterator]: function* () {
    yield this.tester1;
    yield this.tester2;
  },
};

const engineerTeam2 = {
  dev: "Sylvia",
  senior_dev: "Michelle",
  manager: "Roger",
  testingTeam2,
  //key interpolation
  [Symbol.iterator]: function* () {
    // the * is used to denote an iterator
    yield this.dev;
    yield this.senior_dev;
    yield this.manager;
    yield* this.testingTeam2; //// yield* - yielding a generator within another generator
  },
};

const devs2 = [];
for (let member of engineerTeam2) {
  devs2.push(member);
}
console.log(devs2);

// To define a Symbol iterator on a class, use syntax *[Symbol.iterator](){}

class Comment {
  // @params
  //    children: array of nodes
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  // tree like structure to print content of every node
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("good comment", [
    new Comment("extra super comment", [
      new Comment("enlightened comment", []),
    ]),
  ]),
  new Comment("bad comment", []),
  new Comment("other comment", []),
];

const root = new Comment("Root comment", children);
for (let t of root) {
  console.log(t);
}
