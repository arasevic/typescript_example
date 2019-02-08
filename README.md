# Simple TypeScript example

- `src`  - has the TypeScript source files
- `dist` - where javascript that TypeScript "compiles" to go.
- `node_modules` - where the npm packages are installed to.
- `package.json` - file that defines the package
- `tsconfig.json`- file that with options for typescript's compiler

# package.json
```
"devDependencies": {
  "@types/node": "^10.12.21",
  "ts-node": "^8.0.2",
  "typescript": "^3.3.1"
}
```
The dependencies needed to create the final package.

```
"scripts": {
  "build": "tsc",
  "watch": "tsc -w"
},
```

To run a script do `npm run build`, which compiles the TypeScript in `src` and puts it `dist`.
`npm run watch` will recompile when a file changes.


# tsconfig.json
```
{
   "compileOnSave": true,  <-- editors with typescript support will recompile on save
   "compilerOptions": {
       "module": "commonjs",
       "lib": ["es6", "dom"],
       "noImplicitAny" : false, <--- Example option for how strict the compiler is
       "outDir": "dist",        <--- Where to put the output files
       "declaration": true,     <--- Creates a .d.ts file, which define the types of the generated javascript
       "target": "es5"          <--- Which version of EMCAScript to compile to.
   },
   "include": [  <-- files to becompiled
    "src/**/*"
  ]
}
```
