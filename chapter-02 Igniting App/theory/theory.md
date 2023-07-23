Chapter-02 🚀 Igniting App

Question 1.

🎯 What is NPM?

👉 NPM is a package manager for the JavaScript programming language maintained by npm Inc. npm is the default package manager for the JavaScript runtime environment Node.js.

Question 2.

🎯 What is Parcel/Webpack?

👉 Parcel/WebPack are the bundlers used for javascript code that helps us to minify, clean and make our code compact so that it becomes easier to send or recieve the response from the server.

Question 3.

🎯 What is Parcel-cache?

👉 Parcel Cache stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

Question 4.

🎯 What is NPX?

👉 NPX is simply a NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

Question 5.

🎯 What is difference between dependencies and devDependencies ?

👉 Devdependencies are modules which are only required during development whereas dependencies are required at runtime.

Question 6.

🎯 What is Tree Shaking ?

👉 Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

Question 7.

🎯 What is Hot Module Replacement ?

👉 Hot Module Replacement is a feature that enables us to see code changes in the browser without having to refresh it, thus allowing us to preserve the state of our front-end application.

Question 8.

🎯 What are the five super powers of parcel and describe them ?

👉 Minification : Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! We need to run " parcel build index.html ", and our whole application will be built and optimized automatically.

👉 Image optimization : Parcel supports resizing, converting, and optimizing images! We need to pass query parameters for the format and size we need when referencing the image file in our HTML, CSS, JavaScript, etc. and Parcel will take care of the conversion and optimization process.

👉 Content hashing : Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the output is guaranteed not to change unless the name does.

👉 Transpilation : Parcel transpiles our JavaScript and CSS for our target browsers automatically! we just need to declare a browserslist in our package.json, and Parcel takes care of transpiling only what's needed.

👉 Differential bundling : When we use " <script type="module"> " Parcel automatically generates a nomodule fallback for old browsers as well, depending on our browser targets also this results in much smaller bundlers for a majority of users in modern browsers , while still supporting older browsers as well.

Question 9.

🎯 What is '.gitignore'? Which files should we add and which file we should't ?

👉 A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.
The files which can be regenerated in the project can be put into '.gitignore'.Example: "node_modules" , "parcel-cache" , "dist".

Question 10.

🎯 What isthe difference between package.json and package-lock.json ?

👉 package.json : The package. json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies. The file provides the npm package manager with various information to help identify the project and handle dependencies.

👉 package-lock.json : It records the exact version of every installed dependency, including its sub-dependencies and their versions.
