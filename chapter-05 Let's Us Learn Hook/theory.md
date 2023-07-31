Chapter-05 🚀 Let Us Get Hooked.

Question 1.

🎯 What is the difference between Named Export, Default Export and * as Export?

👉 ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: named export and default export. In Named export, one can have multiple named exports per file. Then import the specific exports they want surrounded in {} braces. The name of imported module has to be the same as the name of the exported module. In Named export, the component is exported from MyComponent.js file like:

export const MyComponent = () => {}
export const MyComponent2 = () => {}