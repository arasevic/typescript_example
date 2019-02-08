

// You can have normal functions.
function hello(): string {
  return "world";
}
console.log(hello());

// And new "arrow" functions, with replace anonymous functions
let _hello = (): string => "world";
console.log(_hello());


// Closures
// Functions are first class types, meaning you can pass to other other functions.
// It also means that they can defined anywhere and they form a "closure", capturing variables in their scope.

function main(){
  var s = "in Main";
  let f = () => s;
  return f;
}
let str: () => string = main()
console.log(str())

// This
// In other languages 'this' or 'self' is a reference to the instance of an object. JavaScript is originally a 'prototype' language.

function Car(){
  this.size = 10;
  this.drive = () => console.log("vroom");
  this.getSize = function () {
    return this.size;
  }
}

let car = new Car();
console.log(car.size);
console.log(car.getSize())
console.log(car);

Car.prototype.realDrive = ()=> console.log("Vroom " + this.size);
console.log(car.realDrive);
