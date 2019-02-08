// For Loops
/*
  For the longest time for loops were always loops over the indexes of a list.

*/
var array = [3, 2, 1, 0];
var sum = 0;
for (var i = 0; i < array.length; i++) {
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
for (var i_1 in array) { // Loops over indexes
    console.log(i_1);
}
// Or "of" to loop over values
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var i_2 = array_1[_i];
    console.log(i_2);
}
