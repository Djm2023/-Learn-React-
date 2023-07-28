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
