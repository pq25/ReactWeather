var names = ["Andrew", "Peter","Damian"];

// names.forEach(function(name){
//   console.log('forEeach', name)
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe("Piotr"));

// var person = {
//   name: 'Andrew',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }
//
// person.greet();

//challenge area

function add(a,b){
  return a + b;
}

console.log(add(1,3));
console.log(add(0,9));

var addStatement = (a,b) => {
  return a + b
};

var addExpression = (a,b) => console.log(a+b);

console.log(addStatement(1,2));
console.log(addStatement(12,23));

addExpression(1,3);
addExpression(11,24);
