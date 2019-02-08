"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To import you can either import specific type
var _1 = require("."); // No filename then 'index.ts' of the directory is used
// Or import the whole file
var simpleTypes = require(".");
//And Classes!  Which are are new as of es2015
var Car = /** @class */ (function () {
    function Car() {
    }
    //static methods are bound to the class.
    Car.honk = function () {
        return this.kind + " car goes honk honk!";
    };
    //Instance methods are bound to the instance.
    Car.prototype.start = function () {
        return true;
    };
    Car.prototype.description = function () {
        return this.size.toString() + " " + this.color;
    };
    Car.prototype.toString = function () {
        return simpleTypes.Size[this.size] + " " + _1.Color[this.color] + " " + Car.kind;
    };
    Object.defineProperty(Car.prototype, "wheels", {
        get: function () {
            return 4;
        },
        enumerable: true,
        configurable: true
    });
    Car.kind = "Average";
    return Car;
}());
exports.Car = Car;
var car = new Car();
car.color = _1.Color.Blue;
car.size = simpleTypes.Size.Small;
console.log(car.description());
console.log(car.toString());
function drive(vehicle) {
    console.log("Vehicle has " + vehicle.wheels + " wheels");
}
drive(car);
/*
  In languages like Java you must explicitly use "implements" for a class to be considered an instance of an interface.  This is called "nominal" typing, you must name it to be it.  However, in the example above we never explicitly implemented `hasWheels`.  This is because TypeScript has "structural" typing, if the shapes match it is that type.  Languages like Go also have structural typing.

  However, TypeScript also has nominal typing, which often makes things clearer.
*/
var Bike = /** @class */ (function () {
    function Bike() {
        this.wheels = 2;
    }
    Bike.is = 0;
    return Bike;
}());
drive(new Bike());
