function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET";
  }
  return method;
}

// ES6 supports replacing setting default value for function args
// rather than 'if..else' blocks
function makeAjaxRequest2(url, method = "GET") {
  return method;
}

// By convention of JS, we use NULL => nothing exists here.

console.log(makeAjaxRequest("google.com"));
console.log(makeAjaxRequest2("google.com"));

console.log(makeAjaxRequest("google.com", null));
console.log(makeAjaxRequest2("google.com", null)); // NULL will NOT try to reassign any value to default method argument

console.log(makeAjaxRequest("google.com", undefined)); // for undefined, the method gets reassigned to default value
console.log(makeAjaxRequest2("google.com", undefined));

//// ----------------- example 2

class createUser {
  constructor(id) {
    this.id = id;
  }
}

//! constructor function in JS ; a difference between a function and a constructor function
//! is that a constructor function is called with the 'new' keyword which instantiates and
//! returns a new object with the passed in arguments.
//! Implementation wise, a func and constructor func are written pretty much the same way.

function createUserX(id) {
  this.id = id;
  return "user created";
}

function createAdminUser(user = new createUserX(generateRandomID()), i) {
  user.admin = 2 * i;
  return user;
}

function generateRandomID() {
  return Math.random() * 999;
}

const user = new createUserX(generateRandomID()); //! constructor function
// console.log(t.id);

ad1 = new createAdminUser(new createUserX(generateRandomID()), 2); //! constructor function
console.log(`admin user 1 id = ${ad1.id}`); // string literals

ad2 = createAdminUser(new createUserX(generateRandomID()), 3); //! function
console.log(`admin user 2 id = ${ad2.id}`); // string literals
