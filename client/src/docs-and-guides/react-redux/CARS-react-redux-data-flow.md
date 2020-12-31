## Unidirectional data flows in redux explained with the CARs acryonym

The purpose of this document is to demonstrate how redux data flows from the back-end of an app to the app's component state.

All data flows from the store which is single source of state management in the app. This prevents lurking state and confusion as to what state holds during the process of prop-drilling in React.

For my own benefit, I have created the acronym CARS (it could have been ARCS or SARC) I simply found this an easy way for me to get my head around the React-Redux boiler plate. (CARDS - Component, Action, Reducer, Dispatch, Store)

1. C (components and containers)
All changes to the front-end app happen here due to user interactions

2. A (actions and action types)
These are the handle change functions that are written - either because we want to display information from a back-end api-call or a front-end request from an end-user. To strictly type these actions, string constants or action type constants are created. These can be serialised unlike vanilla string variables.

3. These actions then are mapped to the reducers. The reducer imports state in its pristine state and returns it in its pristine state in a switch statement. The switch statement allows the code to exit making only the changes required by the components requesting changes. It also imports the action types and dispatches these via a root reducer to the store. One single root-reducer helps in chunking and batching requests to the store.

4. The store is the single source of truth and holds the application state abstracted away from the components-containers and other app functions. It applies the changes in the reducer and sends these changes back to the components-containers requiring the changes and updating the component-container state with the requests from the root reducer.

I used CARS as it is the direction of the cycle of flow of data - it also helped me visualise the action as if it were a mini-racing track with different CARS in different circular speed/ trajectories in the application state.

Data flows are uni-direction from a React component to the Redux store via an action (or payload) the action is dispatched to the store.

The store holds the initial state which is sent to the reducer as a state tree. The reducer duplicates the state tree and updates the state tree with the changes specified by the actions dispatched. The duplicate and updated state-tree incorporating the actions from the actions object is sent back to the React component. The original state tree remains pristine and is never changed.

The React component subscribes to the changes from the Store with listeners. The updated state tree is decoded and the Component re-renders.


__The connect method__

The purpose of the connect method documentation[https://react-redux.js.org/using-react-redux/connect-mapstate]

The connect method connects the react library to the redux store. Now that the component-container is connected to the store the connect method is called. Connect encapsulates the logic of the action-creator and the action payload and takes care of updating the store with the changes required.


The connect method args[https://react-redux.js.org/using-react-redux/connect-mapdispatch]

 - The first arg the method ```mapStatetoProps()``` this method takes the state as it's argument and returns a plain object.

 eg:

 ```
 const mapStateToProps = (state) => ({
	// this is the root-reducer state
	keyOfTheStateObject: state.valueOfTheStateObject
});
```
The method should be a pure function and synchronous - documentation on usage[https://react-redux.js.org/using-react-redux/connect-mapstate#usage-guidelines] as component transformations/ updates/re-renders are expensive and it is not efficient.

__Gotchas with the mapStateToProps() method__

- will not run if the store and the state are named the same way.


 - This method is passed as the first argument of the ```connect()``` method, which calls as its first arg the ```mapStateToPropsMethod()```. Passing the specific action-creator/action-type/action-payload to this method alerts the store of exactly which component is asking for precisely what change.

 - The second arg of the ```connect()``` method is the component-container that needs to be updated and re-rendered with the state changes


```
export default connect(mapStateToProps, { functionNameOfActionCreator })(NameOfComponent-Container);
```

For advanced useage - per-instance memoization - used mainly for tables and large blocks of data that need constant and frequent update documentation [https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector]


Five: 24:00 onwards
