// To import you can either import specific type
import {Color} from "."; // No filename then 'index.ts' of the directory is used
// Or import the whole file
import * as simpleTypes from "."


//And Classes!  Which are are new as of es2015
export class Car {
  color: Color;
  size: simpleTypes.Size; //More verbose, but doesn't class with local definition.
  static kind: string = "Average";
  //static methods are bound to the class.
  static honk(): string {
    return `${this.kind} car goes honk honk!`;
  }
  //Instance methods are bound to the instance.
  start(): boolean {
    return true;
  }

  description(): string {
    return `${this.size.toString()} ${this.color}`
  }

  toString(): string {
    return `${simpleTypes.Size[this.size]} ${Color[this.color]} ${Car.kind}`
  }

  get wheels(): number {
    return 4;
  }
}


let car = new Car();
car.color = Color.Blue;
car.size  = simpleTypes.Size.Small;
console.log(car.description());
console.log(car.toString())


//
// Interfaces
// Describes the "shape" of an object.

interface hasWheels {
  wheels: number
}

function drive(vehicle: hasWheels){
  console.log(`Vehicle has ${vehicle.wheels} wheels`);
}

drive(car);

/*
  In languages like Java you must explicitly use "implements" for a class to be considered an instance of an interface.  This is called "nominal" typing, you must name it to be it.  However, in the example above we never explicitly implemented `hasWheels`.  This is because TypeScript has "structural" typing, if the shapes match it is that type.  Languages like Go also have structural typing.

  However, TypeScript also has nominal typing, which often makes things clearer.
*/

class Bike implements hasWheels {
  wheels: number = 2;
  static is = 0;
}

drive(new Bike());
