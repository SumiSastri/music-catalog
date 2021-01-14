The purpose of this documentation is to clean up the blogs-section and make it production-ready. The notes while setting up the section are removed from the components with a high-level view here of what was done in this section.

__Folder Structure__

Initially the folder ```blog-containers-components``` were set up with vanilla React. State-management for the section is in the ```BlogHome``` stateful-component. State was passed down as props to the ```BlogList``` component and the nested child, ```BlogCard``` component.

In stateful components, as they are constructors, the body of the constructor function binds state to the constructor with the ```this``` key word. In the render method, state is baked into the method with the React Component Library - but not in the life-cycle methods where state mutates. Lambda or arrow functions also bind the constructor function body to the component (object/ constructor) that it points to. In this section we have not implicity bound state in this manner. 

In the render method, to route the page and distinguish between the router object and local state in the render method both state and the router's history prop were logged.

```     const { blogs } = this.state;
<!-- consel.log(blogs) -->
		const routerHistory = this.props.history;
		// console.log(this.props.history);
		// console.log('routerHistory', routerHistory);
```
	
__Challenges of Props Drilling__

As this section experiments with passing down state - an array of blogs down from the ```BlogsHome -> BlogList -> BlogCard``` it demonstrated the challenges faced with props drilling/ tunneling.

Routing for the ```BlogCard``` needed to pass via ```BlogList``` although this component did not consume the props.
Router, as a separate library had its own props and methods.  Props from this library only are one level-deep and need to be passed down like state. 
