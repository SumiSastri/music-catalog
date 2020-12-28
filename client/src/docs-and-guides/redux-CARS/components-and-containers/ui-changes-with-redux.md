The purpose of this document is to briefly outline how complexity in component-container changes are managed by react-redux.

__Components, Containers and the Connect Method__

1. The next step is to actually design a wire-frame of your ui-components-containers for look and feel, user experience and user-journeys and determine how the module/section works before you create the react components-containers.The next step is to actually design a wire-frame of your ui-components-containers for look and feel, user experience and user-journeys and determine how the module/section works before you create the react components-containers.
2. Decide what data needs to be displayed from the back-end database
3. Decide what user actions will change the component-container ui
4. Code and display presentational components in React and make sure that the presentational components are rendering and that the ux-uxd-ui-uid (user experience, user experience design, user interfaces, user-interface-design) is what you want
5. Import the connect method into the components and containers that you anticipate will need to be updated frequently.

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