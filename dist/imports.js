"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foo_1 = require("./foo");
//Or you can import the whole module.
var foo = require("./foo");
//Now you can reference Foo
var _foo = new foo_1.Foo("first");
var _foo2 = new foo.Foo("second");
var f = foo.Faa;
