The purpose of this documentation is to provide a basic understanding of the React.js open source library.

Follows the React documentation [https://reactjs.org/docs/getting-started.html] 

__What is React__

React is a front-end JavaScript library created by Facebook for user interfaces. It is maintained by Facebook and an open source developer community.

It is used because it helps in scaling apps quickly and efficiently. React focuses on the developer experience. The key advantage of React is that it makes it easier for front-end developers to build rich user-interfaces without having to think about DOM manipulation, CSS-selectors, rendering and updating multiple pages as an application grows. 

As the underlying data that drives the pages change, the user interface is updated and changed automatically. This is done seamlessly under the hood with key React methods that have been written into the library.

__What is the difference between a library and a framework__
The key difference between a library and a framework is the amount of control a developer has over features and functionality. 

With a framework all features, functionality and architecture are pre-determined with limited options to change the control-flow or logic of the framework. It is a skeleton within which you can work. 

A library is a loose collection of tools that you can pick and mix and offers more control for the developer. 

The technical term for this limitation of control is called the inversion of control - with a library the flow can be controlled by the developer with a framework the framework controls the developers work flow and coding options. More from 

Freecodecamp [https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/]

__How do you install React in a project?__
- Pre-requisites are node and a text editor (see installation docs)
- See doc ```create-react-app.md```

__What is imperative and declarative code? Which does React use? What are the advantages?__

Imperative code prescribes an exact sequence of steps in the alogrithm for the code to run.

Declarative code is when the outcome is described and the code takes care of the execution.

React uses declarative code to build UI by the description of the actions required for the user-interface to be rendered. 

The advantage is that React under the hood complies and transpiles the changes you need for the UI and handles updating and rendering the components to the Virtual DOM first before it is rendered on the DOM. Therefore if you have an app that needs to display an updated price of a product when a user selects a product and proceeds to check out, React will only update the product selected, the addition to the cart and the new price for the additional item purchased. No changes are made to the other products in the inventory in the user interface or in the shopping cart.

__What is the Virtual DOM and why is it important?__

The document object model or DOM is a visual representation of the state tree - or the underlying data of the app. The DOM is made up of nodes and each node holds some element of state in the node. In vanilla JavaScript, and libraries like J-Query, the developer needs to work on accessing each node via CSS-selectors. This is inefficient in run-time, costly and time-consuming. The Virtual DOM is a virtual copy of the DOM and is updated in the background via the inbuilt methods in the React library. This copy is stored in memory and everytime state needs to be changed, state is updated in the virtual DOM first before changes are made to the real DOM.

__What is the meanining of uni-directional data flow in React?__

This is one of the most important concepts in React. It significantly impacts how you can pass data from one component to another. While conceptually it is easy to understand, getting to grips with the way data flows determines how you debug code in a commercial app as well as how to plan the set-up of your ui-ux as you build your own side-projects.

Data can only flow from a parent component to a child component. This top-down data-flow allows data to be passed down as properties of the original component to the nested child components. A child component can not pass data up to the parent component - except in the case of stateful components. 

The ability of a stateful child to pass props to a stateful parent is used extensively in forms.

__What is a React Component?__

Components are the building blocks of the React library. 

Components are small reusable blocks of code that help developers construct a complex user-interface. It's reusable nature allows applications to be built in a modular fashion - a page for example may have a nav-bar, articles, images, buttons etc., each of these parts of the user interface can be broken down into a component. 

Components are nested one within the other to create a page layout. In other words components within another component is a nested component that helps build a page layout. A nav bar is a component with button components, a logo component nested in it.

- Documentation[https://reactjs.org/docs/components-and-props.html]

__What is JSX in a component?__

JSX stands for JavaScript XML that is transpiled back into JavaScript in the React Library so that browsers can read them. Babel transpiles JSX back into a function call for an HTML element. React.createElement()

JSX superficially ressembles HTML and makes it easy for the developer to create page layouts using JavaScript functions and React methods within the JSX tags. JSX elements are immutable. Once created neither the children nor the attributes of the JSX can be changed.

JSX has tags, tag names, attributes and children. React can be written without JSX but it makes the developers' experience much better as the syntax is easy and familiar. Under the hood this is what JSX transpiles JavaScript into an object, stores it in a variable. This JavaScript object representing the JSX is rendered.

```
let location = {
  city: "Madrid",
  country: "Spain"
}
ReactDOM.render(React.createElement("div", {style: {backgroundColor:red}}, React.createElement("h1", {style: {color:blue}}, {location.city} is located in {location.country})),
  document.getElementById('root')
```

JSX must be enclosed in a parent div tag else it will throw a compile error. 

Sometimes, like in a routing component you may not want a div tag rendered, that is when you can use a React Fragment. 

__What is a React Fragment tag?__

A React Fragment is a Component that allows you to wrap JSX tags so that a div tag is not rendered on the DOM. 

A fragment is like a ghost element that wraps JSX in tags that removes the adjacent JSX need to be wrapped in a parent div error.

- Documentation for JSX[https://reactjs.org/docs/introducing-jsx.html] 
- Detailed documentation for JSX[https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]

__What are props?__

Props, or properties, is an object in React that contains properties about the component. 

With props we can display dynamic data within a component. 

```console.log (props)``` on any element you will see if it has props or not, it will log an empty object if the element has no properties. 

As it is an object, we use dot notation to access props if we pass props to another element - ```props.location.city``` 

Props have keys which identify each key-value pair in the object. It returns and array of objects. 

So if we ```console.log(Object.keys)``` it is going to return an array of keys from that ```object.console.log(Object.keys.props)``` is another log we can add to debug.

It's also common to see values from the props object de-structured for brevity. 

The props object provides data to a component to be displayed. 

Think of a React component as a function that takes in data as an argument and then returns React elements to create a user interface.

Props can be in the form of methods as well as primitive data types (strings, booleans, numbers). React only renders primitive data-types and arrays. If you try and render an object in react you will get an error ```[Object: Object]```. 

