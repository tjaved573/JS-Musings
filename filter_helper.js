

var items = [
  {name: 'apple', type: 'fruit'},
  {name: 'banana', type: 'fruit'},
  {name: 'tomato', type: 'veggie'},
  {name: 'gourd', type: 'veggie'},
];
// only filters those items for which the condition specified is TRUE
// RETURN condition is very important inside 'FILTER' helper method
var new_array = [];
new_array.push(items.filter (function(item) {
  return item.type === 'fruit'; 
}));
console.log(new_array);



var items2 = [
  {name: 'apple', type: 'fruit', price: 343, quantity: 4},
  {name: 'banana', type: 'fruit', price: 92, quantity: 12},
  {name: 'tomato', type: 'fruit', price: 22, quantity: 100},
  {name: 'gourd', type: 'veggie', price: 50, quantity: 5},
];
var output = [];
output.push(
  items2.filter( function (item){
    return item.price < 80 && item.quantity > 4 && item.type === 'fruit';   // string comparison being done here.
  })
);
console.log(output);
console.log('----------------');



var posts = {id: 4, content: 'Hello this is my first post'};
var comments = [
  {post_id: 3, likes: 3},
  {post_id: 4, comments: 232},
  {post_id: 4, comments: 32},
];
var output = [];
output.push(
  comments.filter( function (comment) {
    return comment.post_id === posts.id;   
  })      // anonymous function 
);
console.log(output);
console.log('----------------');


var comments = [
  {post_id: 3, likes: 3},
  {post_id: 4, likes: 232},
  {post_id: 4, likes: 32},
];
new_posts = [];
new_posts = comments.map(function(comment){
  return comment.likes *= 10;
});
console.log('New Posts are');
console.log(new_posts);


var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers = [];
filteredNumbers = (
    numbers.filter(function(number){
        return number > 50;
    })
);
console.log('----------------');
console.log(filteredNumbers);
