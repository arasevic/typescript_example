"use strict";
//Basic Types
Object.defineProperty(exports, "__esModule", { value: true });
// Boolean
var isFun = true;
var isNot = true; // Type is infered.
// Number
/*
  In Javascript all numbers are floating point numbers, so there is only one number type.
*/
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//
// String
//
// Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
var color = "blue";
color = 'red';
//
//Template strings
//
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//
// Array
//
var list = [1, 2, 3];
//Or use generic Class
var list2 = [1, 2, 3];
//
// Enums
//
//A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
exports.Color = Color;
var c = Color.Green;
//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
// Or, even manually set all the values in the enum:
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Green;
//
// Any
//
/*

  Sometimes we might not know what the type of something is.  For example, we might depend on a JavaScript library that doesn't have types.  To get around this we can use the any type which tells the compiler this type could be anything.  The any type allows you to gradually opt-in and opt-out of type-checking during compilation. You might expect Object to play a similar role, as it does in other languages. But variables of type Object only allow you to assign any value to them - you can’t call arbitrary methods on them, even ones that actually exist:

  */
var notSure = 4;
// notSure.ifItExists();
// okay, ifItExists might exist at runtime
// notSure.toFixed();
// okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:
//
var list3 = [1, true, "free"];
list3[1] = 100;
//
// Void
//
// void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:
function warnUser() {
    console.log("This is my warning message");
}
// Declaring variables of type void is not useful because you can only assign undefined or null to them:
var unusable = undefined;
//
// Null and Undefined
//
// In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they’re not extremely useful on their own:
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
//However, when using the --strictNullChecks flag, null and undefined are only assignable to void and their respective types. This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined. Once again, more on union types later on.
//
// Object
/*
object is a type that represents the non-primitive type, i.e. any thing that is not number, string, boolean, symbol, null, or undefined.

With object type, APIs like Object.create can be better represented. For example:
*/
// declare function create(o: object | null): void;
//
// create({ prop: 0 }); // OK
// create(null); // OK
//
// function create(x){}
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
//
//Type assertions
//
/*
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax:
*/
var someValue = "this is a string";
var strLength = someValue.length;
// And the other is the as-syntax:
strLength = someValue.length;
//
// or by putting export in front
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Big"] = 2] = "Big";
})(Size = exports.Size || (exports.Size = {}));
