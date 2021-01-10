The purpose of this documentation is to give a brief overview of what redux is, the detail is outlined in each of the sections in this folder. This file also contains documentation and useful resources.

## What is Redux

Redux is a way to control data-flow in an app, it was created by Dan Abramov and Andrew Clark 2015 and is influenced by ELM & React-flux.

More in this article https://medium.com/@jtbennett/standard-actions-in-redux-c6a415c8aea4

## Benefits of Redux

There are several advantages and disadvantages with Redux. On the one hand, Redux is a load package manager that saves a lot of boiler plate code, on the other hand, there is a lot of initial boiler plate set up which is paradoxical.

As there is only one store of data in the app in the redux store, data flows are predictable and stable. The flow of data is from parent-to child and follows the same lifecycle method in a predictable pattern.

To understand its use, it is worth highlighting that vanilla React also has predictable data-flows where data only flows from parent-to-child. The purpose of Redux is one of scale. In a simple student-app, or side-project app, Redux adds unecissary boiler plate and is inefficient.

Redux therefore is worth considering when you need to scale an app when there is a need to change state in multiple places. 
 
Redux is the next step in the app data-management complexity curve.
 
In vanilla JavaScript data is browser based and resides in the DOM (Document-Object-Model) - this results in security issues, unexpected bugs and side-effects.
 
In vanilla React data lives in the component-container state and resides in a virtual DOM - data is more secure and when the data in the virtual-DOM is mounted on the DOM.

In React-Redux data lives in the store and is accessed by components, changes the virtual DOM and then is mounted on the DOM. 



How does Redux-React render components and pages?
These dispatch functions are connected via the {connect} higher order component import to the counter component and exported back to the store and the Provider component. Provider wraps the Redux HOC into the Redux library framework.

Writing the render functions wrapped in the Provider tag

Displays data from stateful components via props to stateless components

The stateless components are routed to Index.js, which registers the ReactDOM.render() method which registers the react virtual DOM

Redux is a wrapper in the React library via the Provider HOC, so it is passed as a prop of the react main.js (or app.js) component

If any change is required to the stateless component, actions need to be created to send them back to the stateful component and the whole cycle starts again.



Create store with initial state and import redux middleware, store and other redux library dependencies, import the reducer files that will replicate initial state and dispatch actions to components
Components
Map payloads as props to the store via creator actions (action payloads) and listen for change and receive redcuers (changed state payloads)

postsform.js posts.js

Actions
Creator actions - payloads that go from the components to store via map functions (mapStateToProps, mapDispatchToProps )

postActions.js types.js

Reducer
Dispatch actions - payloads change state in the store and dispatch the changed (reduced) payload back to the component

index.js - to store constants postReducers.js - for the reducer functions to dispatch payload back to the component

Store
Holds immutable state, recieves creator actions from component, state replicated and reduced via reducer actions (switch statements) and dispatched back to the component

React compo

## Useful resources and tutorials

- Documentation: https://react-redux.js.org/introduction/quick-start 
- Basics:(https://react-redux.js.org/introduction/basic-tutorial) 
- On the store: (https://react-redux.js.org/using-react-redux/accessing-store) 
- Redux: Crash-course https://www.youtube.com/watch?v=wjTAhHSKuPg Traversy Media https://www.youtube.com/watch?v=93p3LxR9xfM&t=1003s
- React and Redux - Net Nija PlayList: [https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&ab_channel=TheNetNinja]
