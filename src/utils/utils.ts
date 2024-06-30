export const data = [
   {
      id: 1,
      title: "Create a New React App",
      category: "React js",
      language: "javascript",
      timeStamp: "Tue Jun 25 2024 14:43:57 GMT+0530 (India Standard Time)",
      authour: "Shiv Shankar Prasad",
      headingTitle: "How to setup and create a new react application",
      item: {
         code: {
            code1: `node -v\nnpm -v`,
            code2: `npm install -g create-react-app`,
            code3: `cd my-react-app\nnpx create-react-app my-react-app`,
            code4: `cd my-react-app`,
            code5: "npm start",
            code7: "npm run build",
         },
         steps: {
            step1: "React is a popular JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application effectively.<li> In this guide, I'll walk you through the process of creating a new React app from scratch using Create React App</li> <li> a tool that sets up a new React project with a modern build configuration.</li>",
            step2: "Create React App is a command-line tool that sets up a new React project with a sensible default configuration. You can install it globally on your machine using npm:",
            step3: "Now that you have Create React App installed, you can create a new React project. Run the following command in your terminal or command prompt:",
            step4: "Once the project is created, navigate to the project directory:",
            step5: "To start the development server and see your new React app in action, run:",
            step6: `Your new React project comes with a basic structure. Here's a quick overview of the most important files and directories:
                public/: This directory contains the public assets of your app, including the index.html file.
                src/: This directory contains the source code of your app. You'll write most of your code here.
                index.js: The entry point of your application.
                App.js: A sample React component.
                node_modules/: This directory contains the dependencies of your project.
                package.json: This file contains the metadata of your project, including dependencies and scripts.`,
            step7: `Now that your app is running, you can start building your UI by modifying the files in the src directory. For example, you can edit src/App.js to change the content displayed on the homepage.
  
        When you're ready to deploy your app, you can create a production build by running:`,
         },
         headings: {
            heading1: "Install Node.js and npm",
            heading2: "Install Create React App",
            heading3: " Create a New React Project",
            heading4: "Navigate to Your Project Directory",
            heading5: "Start the Development Server",
            heading6: "Explore the Project Structure",
            heading7: "Modify and Build Your App",
         },
         conclusion:
            "Creating a new React app is straightforward with Create React App. This tool handles the setup and configuration, allowing you to focus on building your application. By following the steps outlined in this guide, you'll have a new React project up and running in no time. Happy coding!",
      },
   },
   {
      id: 2,
      title: "How to Make a Counter in React JS",
      category: "React js",
      language: "javascript",
      timeStamp: "Thu Jun 27 2024 14:43:57 GMT+0530 (India Standard Time)",
      authour: "Shiv Shankar Prasad",
      headingTitle: "How to create a counter in react js",
      item: {
         code: {
            code1: "npx create-react-app counter-app",
            code2: "cd counter-app && npm start",
            code4: `import React, { useState } from 'react';
  
  function App() {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div className="App">
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
  
  export default App;`,
         },
         steps: {
            step1: "First, we need to set up a new React application using Create React App. Run the following command:",
            step2: "Navigate to your project directory and start the development server with these commands:",
            step3: "Open the src/App.js file and replace its content with the code provided below to create a simple counter component:",
            step4: "In the code, we use the useState hook to manage the state of the counter. We initialize the count state to 0 and create two functions, increment and decrement, to increase and decrease the count respectively.",
            step5: "Save the file and go back to your browser. You should now see the counter and be able to increment and decrement the count by clicking the buttons.",
         },
         headings: {
            heading1: "Set Up the React Application",
            heading2: "Start the Development Server",
            heading3: "Create the Counter Component",
            heading4: "Use State to Manage the Counter",
            heading5: "Test the Counter in the Browser",
         },
         conclusion:
            "Creating a counter in React is a great way to get familiar with state management using hooks. By following these steps, you can easily build and understand how to manage state in your React applications. Happy coding!",
      },
   },
   {
      id: 3,
      title: "What is HOC and How to Implement It?",
      category: "React js",
      language: "javascript",
      timeStamp: "Sun Jun 30 2024 14:43:57 GMT+0530 (India Standard Time)",
      authour: "Shiv Shankar Prasad",
      headingTitle: "What is HOC and How to Implement It?",
      item: {
         code: {
            code1: "npx create-react-app hoc-example",
            code2: "cd hoc-example",
            code3: "npm start",
            code4: `import React from 'react';
  
  function withLogger(WrappedComponent) {
    return function(props) {
      console.log('Props:', props);
      return <WrappedComponent {...props} />;
    };
  }
  
  function HelloWorld(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  const HelloWorldWithLogger = withLogger(HelloWorld);
  
  function App() {
    return <HelloWorldWithLogger name="World" />;
  }
  
  export default App;`,
         },
         steps: {
            step1: "First, we need to set up a new React application using Create React App. Run the following command:",
            step2: "Navigate to your project directory and start the development server with these commands:",
            step3: "Now, let's open the src/App.js file and replace its content with the code provided below to implement an HOC:",
            step4: "In the code, we define a Higher-Order Component (HOC) called withLogger. This HOC is a function that takes a component and returns a new component. The new component logs the props of the wrapped component to the console.",
            step5: "Next, we create a simple component called HelloWorld that takes a prop name and displays a greeting.",
            step6: "We then wrap the HelloWorld component with the withLogger HOC. This new component, HelloWorldWithLogger, will log its props whenever it is rendered.",
            step7: "Finally, we use the enhanced component in our App component. When you run this code, you will see the props logged to the console whenever the HelloWorldWithLogger component is rendered.",
         },
         headings: {
            heading1: "Set Up the React Application",
            heading2: "Start the Development Server",
            heading3: "Implement the HOC",
            heading4: "Create a Simple Component",
            heading5: "Wrap the Component with the HOC",
            heading6: "Use the Enhanced Component",
         },
         conclusion:
            "Higher-Order Components (HOCs) are a powerful pattern for reusing logic in React components. By following these steps, you can create your own HOCs to enhance the functionality of your components. Happy coding!",
      },
   },
];
