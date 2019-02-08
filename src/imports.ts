import {Foo} from "./foo";

//Or you can import the whole module.

import * as foo from "./foo";

//Now you can reference Foo

let _foo: Foo = new Foo("first");

let _foo2: foo.Foo = new foo.Foo("second");

let f = foo.Faa;
