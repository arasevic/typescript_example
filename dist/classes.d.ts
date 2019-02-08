import { Color } from ".";
import * as simpleTypes from ".";
export declare class Car {
    color: Color;
    size: simpleTypes.Size;
    static kind: string;
    static honk(): string;
    start(): boolean;
    description(): string;
    toString(): string;
    readonly wheels: number;
}
