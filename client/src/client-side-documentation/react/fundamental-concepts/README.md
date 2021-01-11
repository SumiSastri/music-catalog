This quiz app is built to provide answers to key interview questions and the questions are in no particular order of importance

1. What is React?

React is a front-end JavaScript library created by Facebook for user interfaces. It is maintained by Facebook and an open source developer community
It is used because it helps in scaling apps quickly and efficiently. React focuses on the developer experience. The key advantage of React is that it makes it easier for front-end developers to build rich user-interfaces without having to think about DOM manipulation, CSS-selectors, rendering and updating multiple pages as an application grows. As the underlying data that drives the pages change, the user interface is updated and changed automatically. This is done seamlessly under the hood with key React methods that have been written into the library.

2. What is the difference between a library and a framework

The key difference between a library and a framework is the amount of control a developer has over features and functionality. With a framework all features, functionality and architecture are pre-determined with limited options to change the control-flow or logic of the framework. It is a skeleton within which you can work. A library is a loose collection of tools that you can pick and mix and offers more control for the developer. The technical term for this limitation of control is called the inversion of control - with a library the flow can be controlled by the developer with a framework the framework controls the developers work flow and coding options. More from Freecodecamp [https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/]

3. How do you install React  in a project?
- Pre-requisites are node and a text editor
- Run npx create-react-app <app-name>
- node modules (all dependencies for the react app) - this is generated on npm install or the create-react-app CLI commands
- public (holds the root HTML file that renders the index.js - react controls the ui) -manifest json(progessive-web-apps)
- gitigonore (ignores files that need not be pushed to version control)
- package-lock.json (insures consistent installion of dependencies)
- package-json
- readme

Main folder for front-end developers is the source folder - src
- index.js (sends the app.js files to the HTML root DOM node)
- App.js (the file responsible for the single page app's view in the browser)
- App.css (styling)
- index.css (body-styling)
- serviceWorker (progressive web apps)
- App.test.js (sample unit tests that can be run)


4. What is imperative and declarative code? Which does React use? What are the advantages?

Imperative code prescribes an exact sequence of steps in the alogrithm for the code to run. Declarative code is when the outcome is described and the code takes care of the execution. React uses declarative code to build UI by the description of the actions required for the user-interface to be rendered. The advantage is that React under the hood complies and transpiles the changes you need for the UI and handles updating and rendering the components to the Virtual DOM first before it is rendered on the DOM. Therefore if you have an app that needs to display an updated price of a product when a user selects a product and proceeds to check out, React will only update the product selected, the addition to the cart and the new price for the additional item purchased. No changes are made to the other products in the inventory in the user interface or in the shopping cart.

5. What is state and how is it managed in React?

State is an object. It is the underlying data of a user interface, everytime this data changes the component is updated and re-rendered. State readable and writable with the method ```setState```, it is also managed with life-cycle methods written into the React Component Library. See question 15 for a more detailed explaination and an example in the file [src/components/stateful/message.js], if you change state directly without using the ```setState``` method the lifecycle methods will not be called upon and the state will change internally (you will see the changes in the console) but will not be rendered (you will not see the changed state in the rendering of the page). The ```setState``` method triggers the re-render of the page with the new information in the object that has been updated.

6. What is the Virtual DOM and why is it important?

The document object model or DOM is a visual representation of the state tree - or the underlying data of the app. The DOM is made up of nodes and each node holds some element of state in the node. In vanilla JavaScript, and libraries like J-Query, the developer needs to work on accessing each node via CSS-selectors. This is inefficient in run-time, costly and time-consuming. The Virtual DOM is a virtual copy of the DOM and is updated in the background via the inbuilt methods in the React library. This copy is stored in memory and everytime state needs to be changed, state is updated in the virtual DOM first before changes are made to the real DOM.

7. What is a React component?

Components are the building blocks of the React library. Components are small reusable blocks of code that help developers construct a complex user-interface.  It's reusable nature allows applications to be built in a modular fashion - a page for example may have a nav-bar, articles, images, buttons etc., each of these parts of the user interface can be broken down into a component. Components are nested one within the other to create a page layout. In other words components within another component is a nested component that helps build a page layout. A nav bar is a component with button components, a logo component nested in it.

8. What are the advantages of a component-based library?

Components help developers isolate features and build them independently. While one developer works on a nav-bar another can work on buttons, the components can be exported and imported to build a page. Facebook uses over 50,000 components for its user interface. Building smaller components also helps quickly solve and debug problems and test functionality of the component in isolation from the rest of the app before proceeding to end-to-end testing.

9. What is the difference between functional and class components and when should you use one over the other?

A functional component is a JavaScript function that describe the state of the user interface. They were also known as presentational or dumb components as they do could not access state or lifecycle hooks available in stateful components. Functional components have additional properties or props to make the rendering the component more dynamic. Props can be in the form of methods as well as primitive data types (strings, booleans, numbers). With the Hooks API (2018), functional components can access state and therefore are no longer considered 'dumb' components. There are no breaking changes and are 100% backwards compatible. Functional Components can now use the API and the method ``` useState Hook``` to access state and React LifeCycle methods.
 
Functional components must return a parent div that nests any other components or jsx tags - this simply returns hello world. It is recommended to use functional components where possible. Functional components do not have the ```this``` key word as it has no reference to state or the underlying data of the components.


```
function App() {
  return (
    <div>
<h1>Hello world<h1>
    </div>
  );
}

export default App;
```

Class, Container, Stateful or smart components contain state - or the underlying data that determines how the information on a page changes. Class Components are feature rich as they use ES-6 classes to extend the methods in the React Component library. The Component library has several life-cycle methods that help with the rendering of the data to the Virtual DOM as well as the root HTML node and the real DOM. These components hold complex logic and the react library's inbuilt methods. Class components can also receive props to update the user interface.

Class components must have a render method to display the information held in the state - or underlying data of the page. The ES-6 class constructor holds the data in an object - or the state of the component.

10. What is the meanining of uni-directional data flow in React?

Data can only flow from a parent component to a child component. This top-down data-flow allows data to be passed down as properties of the original component to the nested child components. A child component can not pass data up to the parent component.

11. What is a prop in React?

Properites of a component are also known by the shortened version, props. A prop is all the information about the component that can be dynamically passed down to child components. Props can be passed to both functional and class components. When props are passed to a class component, the key word ```this``` must be used.

12. What is JSX?

JSX stands for JavaScript XML that is transpiled back into JavaScript in the React Library so that browsers can read them. JSX superficially ressembles HTML and makes it easy for the developer to create page layouts using JavaScript functions and React methods within the JSX tags. JSX has tags, tag names, attributes and children. React can be written without JSX but it makes the developers' experience much better as the syntax is easy and familiar.

13. What are the two ways to create a functional component?

The named export 
```
export const Greet = () => (
	<div>
		<h1>Hello World</h1>
	</div>
);
```
Where the function is imported in curly braces
```import { Greet } from './components/functional/HelloWorld';```


The unnamed export 


where ```export default``` used to export the function and the import of the component to nest into another component can have a different name so long as the file path is correct  ```import HelloWorld from './components/functional/HelloWorld';``` or ```import Greet from './components/functional/HelloWorld';``` will also work.

14. What is the benefit of using props?

Props is the optional input a component can accept, it makes components dynamic. It keeps code DRY (don't-repeat-yourself) repeating code is inefficient and expensive in run-time. Examples of props in [src/App.js] as the parent component and how the props are passed from the parent component to the child [src/components/functional/HelloName.js]

The component GreetName is now reusable and dynamic. As functional components are pure functions they return the same result with each component, if you did not have props passed into the component it would always render just what is in the h1 jsx tag - in this case is Hello this is my...

14. What is the benefit of the props.children method?

Attributes of the component can be passed as props, but children of the parent component can also be rendered with the  ```props.children``` method. Write the children of the component in the component and pass the ```props.children``` method into the child component (refer to the files in question 14)

15. What is the difference between props and state?

Both props and state hold information that make components more dynamic with some differences in the way they are accessed and passed from one component to the other.

State is the underlying data in a component and is managed within the component. It is updated and rendered using methods that are native to the React Component library. State can be changed with the ```setState``` method. State is an object and the data can be accessed by ```this.state``` as it references the state in the class and the key word ```this``` points specifically to the state in the class component.

Props are additional properties of a component and get passed from a parent component to a child component. Props are immutable, parent owns the props and can not be changed by the children. They are function parameters and are accessed with ```props.propName``` while in a class component props need to use the ```this``` key word to reference the object the prop is pointing to, it is therefore accessed with ```this.props.propName```. State can be accessed with the Hooks API with the ```useState Hook``` reference files [src/components/stateful/message.js] and [src/components/functional/HelloName.js] compare them with each other and the [src/App.js] file to see how the two ways of passing props from parent component to the child component differ.

16. How do asynchronous calls to the ```setState``` method impact the execution of code in a class based component?

The ```setState``` method has two parameters, one is to change the data in state and the second is a call back function. Because the method is called asynchronously, when you are rendering numbers in a counter component the console value is one less than the rendered value. 

```
incrementVolume() {
		this.setState({
			count: this.state.count + 1
		});
		console.log(this.state.count);
	}
```  
In this example ```console.log()``` is being called before the state is set and the value is 0, while the rendered value will be one when the function is invoked in the ```onClick``` method in the ```render``` method. When you need to execute code after state or the underlying data in your component has changed, the code must be written in the callback function as the second parameter of the ```setState``` method not after the ```setState``` method has been invoked.

The ```setState``` method could also group together multiple calls in the call stack to update state into a single update for better performance. To avoid this, set needs to be set not as a new object but as a new function where the previous state is invoked and not the current state to get the right result. See the counter file [src/components/stateful/counter.js] and relationship with the main app files [src/App.js]

17. What is destructuring?

Destructuring is unpacking the components properties into single elements so that they can be passed down in a shorted version to the child components. In a functional component, it can be or declared as a variable

```
export const GreetName = (props) => {
	console.log(props);
	const { title, name, petAnimal, children } = props;
	return (
		<div>
			<h1>
				{title} {name} is my {petAnimal}
			</h1>
			{children}
		</div>
	);
};
```
Or can be passed as parameters of the component replacing the ```props``` param 

```
export const Greet = ({ welcome, example }) => (
	<div>
		<h1>Hello World</h1>
		<div>
			<p>
				{welcome} {example}
			</p>
		</div>
	</div>
);
```
In a class based component the destructuring of props and state happens  in the ```render``` method

```
	render(props) {
		const { name, noise } = this.props;
		const { message } = this.state;
		return (
			<div>
				<h3>
					{this.props.name} says {noise} but when {name} is angry you will hear{' '}
					<button onClick={() => this.changeMessage()}>Click to hear</button>
					<div>
						<h4>{message}</h4>
					</div>
				</h3>
			</div>
		);
	}
}
```