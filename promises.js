// Promises in JS have 3 states
// - unresolved (default state) - waiting for action/event to occur
// - resolved   - action/event occured, and was successful  , CALLBACK: then()
// - rejected   - action/event occured, action failed       , CALLBACK: catch()

promise = Promise.new((resolve, reject) => {
  resolve(); // this sets promise to resolved state, and only triggers then() callbacks
  // reject(); // this sets promise to resolved state, and only triggers catch() callbacks
});

promise
  .then(() => {
    console.log("hey, you made a successful attempt 1");
  })
  .then(() => {
    console.log("hey, you made a successful attempt 2");
  })
  .catch(() => {
    console.log("Request failed");
  });

// fetch() method to fetch response from URL returns a Promise, which can be chained with handlers
