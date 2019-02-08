var _this = this;
// You can have normal functions.
function hello() {
    return "world";
}
console.log(hello());
// And new "arrow" functions, with replace anonymous functions
var _hello = function () { return "world"; };
console.log(_hello());
// Closures
// Functions are first class types, meaning you can pass to other other functions.
// It also means that they can defined anywhere and they form a "closure", capturing variables in their scope.
function main() {
    var s = "in Main";
    var f = function () { return s; };
    return f;
}
var str = main();
console.log(str());
// This
// In other languages 'this' or 'self' is a reference to the instance of an object. JavaScript is originally a 'prototype' language.
function Car() {
    this.size = 10;
    this.drive = function () { return console.log("vroom"); };
    this.getSize = function () {
        return this.size;
    };
}
var car = new Car();
console.log(car.size);
console.log(car.getSize());
console.log(car);
Car.prototype.realDrive = function () { return console.log("Vroom " + _this.size); };
console.log(car.realDrive);
