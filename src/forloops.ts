// For Loops

/*
  For the longest time for loops were always loops over the indexes of a list.

*/
let array = [3, 2, 1, 0];
let sum = 0;

for (var i = 0; i < array.length; i++){
  sum += array[i];
}

console.log(sum);

// Note about let vs var
// var is globally scoped to their function or module and can "leak" scopes.
//

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 10 * i);
// }
//
// // Whereas let is block scoped
// for (let i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

// For "in" and "of"
// Instead of setting up the loop manually you can use "in"
//
for (let i in array) { // Loops over indexes
  console.log(i);
}
// Or "of" to loop over values
for (let i of array) {
  console.log(i);
}
