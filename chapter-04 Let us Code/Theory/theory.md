Chapter-04 🚀 Let Us Code.

Question 1.

🎯 Is JSX mandatory for React?

👉 JSX is not requirement for React. Using React without JSX especially convenient when you don't want to set up compilation in your build environment.

Question 2.

🎯 Is ES6 mandatory for React?

👉 No. ES6 is not mandatory for React but it is highly recommendable.

Question 2.

🎯 Is ES6 mandatory for React?

👉 No. ES6 is not mandatory for React but it is highly recommendable.

Question 3.

🎯 What is <React.Fragment></React.Fragment> and <></> ?

👉 <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.

Question 4.

🎯 What is Reconcilation in React?

👉 Reconcilation is the process through which React updates the Broswer DOM and makes React work faster. React use a Diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

Question 5.

🎯 What is React Fiber ?

👉 React Fiber is a concept of ReactJs that is used to render a system faster, smoother and smaller. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

    1. Pause, resume, and restart rendering work on components as new updates come in.

    2. Reuse previously completed work and even abort it if not needed.

    3. Split work into chunks and prioritize tasks based on importance.

Question 6.

🎯 Why do we need Keys in React?

👉 A key is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.

Question 7.

🎯 How can we write comments in JSX??

👉 {/\* \*/} - for single or multiline comments.

Question 8.

🎯 What is props in React?

👉 props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component). They are useful when you want the flow of data in our app to be dynamic.

Question 9.

🎯 What is Config Driven UI?

👉 Config Driven UI are based on the configurations of the data application when received. It is rather a good practice to use config driven UIs to make application dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
