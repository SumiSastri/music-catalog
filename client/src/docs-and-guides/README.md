### Branch 3 nav-bar (set-up first front end components)
- Create a front-end folder (client)
- npx create-react-app client
- this creates the client side node modules, git-ignore package-lock-json src and public files/folders
- in the client-side package-json files add your proxy local host under the eject scripts
- in the server-side package-json files add scripts to run the client and server side

```
"scripts": {
		"client-install": "npm install --prefix client",
		"start-server": "nodemon server/server.js",
		"start-client": "npm start --prefix client"
```        
- npm install bootstrap react strap uuid react-transition-group
- start client-side server check rendering properly

- clear down React app css and logos
- set up your hello world root in app.js
- import bootstrap into app.js
- nav-bar is a stateful component because it it holds an open and closed state for the hamburger menu
- code the nav-bar with toggle in state

### Branch 4 music-catalog (stateful component with the music list for catalog)
- set up the component and check that it is rendering in the root app.js
- code the component with state to take the list from the api

### Branch 5 buttons (presentational button components)
- set up the folder and create 4 button components for create, delete, edit and default (submit)
- code the component with state to take the list from the api

### Branch 6 redux (SARCs)
 - Store - create store first (check with redux dev tools that store is set up - import it into app.js with the Provider HOC)
 - Provider takes one param which is the store object
 (Store is set up once) console log to make sure it is an object - it is the global store of state
 - Download the redux dev tools extension in chrome to debug as well as visualise state

 - ARCs is repeated with every new action

 - Actions describe changes in the component that are required
 - It is a function that returns an object
 - the object is strictly typed with a type
 - types need to be set up as string constants and imported into the actions file
 
 - Reducers - combine and reduce actions so that the payload can be dispatched to store
 - The root reducer must import each individual reducer so that they can be combined and sent to the store as a param
 - Reducers are, like actions, functions that return an object - the params are state and the action
 - It switches the action depending on the name - switches strictly matches the variables so each case must be a pure function  
		- set up root reducer that combines all actions from the individual reducers
		- set up any individual reducers
		- the individual reducer will take the action or changes to the component and dispatches it to the store
		- set up switch cases for each action to correspond to the reducer payload to be dispatched to the store

 - Subscribe to changes from store with mapStateToProps in the Component that requires state changes
	- Call the action function from the component that requires an action
	- Import connect object from react-redux
	- Set up connect - which maps state object to props 
	- Export default the connect object with the map to state  & get items function params to App.js (provider imports the module)
	- Add lifecycle method - ```componentDidMount``` to connect the actions object
	- Change ```this.state``` to ```this.props``` 

- Dispatch

### Branch 7 debugging	
    - used for debugging

### Branch 8 redux-delete-item	(ARCs in action)
 - ARCs is repeated with every new action
 - Actions -  set up the type in the types file, set up the delete action with the payload of id in the itemActions file
 - Reducers 
		- set up the delete reducer in a switch case
		- take out the changed state from the stateful component
		- here we want to filter out and remove the rendering of the deleted item
		- move this function therefore to the reducer as state is going to be managed by the store not the component
 - Subscribe the component to the delete reducer change
	- the ```onClick``` function now changes in the component and does not take a state change from the component
	- Connect  has already been imported from react-redux, so we add the deleteItem action to the imports t
	- And to the export of the connect method in the export default that maps state to props  
	- While the lifecycle method - ```componentDidMount``` to connect the read action to the component, delete occurs ```onClick```
	- This now can be refactored, instead of a function inside the jsx tag, we define the function after the lifecycle method and call it in the jsx tag
	- Check the functionality on the redux-dev tools

### Branch 9 modal-component
(presentational Modal)

- Reactstrap has several useful modal templates import what you need for your modal design
- The modal can be set up as a presentational one first
- Set up the modal by importing the jsx tags you want to import for the render method
- To render the modal in the app once it is set up  the export default of the component and import the file into App.js
- Check rendering - Clean up and style to personal preferences
- If you want to continue to use the component as a functional component you can import state by importing ```{useSelector, useDispatch}``` object from react-redux
- Declare state in a variable 
```const musicItems = useSelector (state => state.musicItems)``` just above the return method - you can then use it in the jsx as ```{musicItem}```
- The Dispatch object helps you dispatch the payload to the store as midware you need to store it in a variable and use it
- ```const dispatch = useDispatch();```
- With Thunk you do not need to do this

- Change the modal to a stateful one
- Take the functionality of the add button, the uuid out of the music catalog component
- Set state with 2 items - toggle as a boolean (false) this is because the modal remains closed until you click the add button that launches it
- the second item is name which is an empty string 

- (ARCs in action with the stateful modal)
- Actions -  set up the type in the types file, set up the add item action with the payload of the added item
     (these will be imported as action payload files and mapped as props in the modal component to be sent to the reducer)
 - Reducers 
		- set up the add item reducer in a switch case
		- this will return the state of the component when the item has changed and handled the input change in the form
		- It will also return the payload of the action new item and the payload of the updated state
 - Subscribe the modal component to the add item action payload 
		- import connect and connect the addItem action payload as an import and as an export
		- map state to props and define this as a constant
		- set up the functionality of the modal form content
		- handle change/ handle submit/ the open state of the toggle function and the close state post submit
		- add a uuid to the item for the redux store - this will change when we move to getting the data direct from mongodb
		- make sure that the functionality that was in the music catalog component has been successfully transferred to the modal component
	- Check the functionality on the redux-dev tools and on the front end with user inputs

### Branch 10 client-server-connectivity
- Install axios as the HTTP runner in the client folder (you can also use the Fetch API for this section)
- Uninstall uuid and remove static data from the app

- ARCs to SARCDs (Store-Actions-Reducers-Dispatch)
- Actions
 - set up a loading action type
 - set up an ```itemsLoading``` function in the itemAction file
- Reducers 
 - import the type from the action types file
 - remove the uuid static data from state and set state to an empty array
 - add loading to state (set as boolean - false)
 - set up the reduce case to switch state from false to true when state is returned from store
 
 - Dispatch
  - the dispatch function is the only way to trigger changes in state, once a change has been triggered the whole state tree is returned in its pristine and touched state to the reducer
  - to each of the actions in the items action, add a dispatch function to dispatch the action payload to the store
  - update all ids in the stateful components to _id as we have removed uuid and will be using the mongoDb _id
  - set up the actions with axios to call the data from the api in the back-end routes
  - clean up naming convention - the name-value pairs in the objects should be exactly the same
  - clean up code remove unwanted console logs and commented out code
		- When dispatch calls the reducer function, it
		* notifies component listeners to the “next” change in the state tree
		* rejects the props with errors and dispatches error messages
		* maps the “next” change in the state tree to the component
		* When it dispatches actions and state to the reducer, there are custom functions that are written in Middleware (like Thunk) and passed to the base-dispatch function. 
		* Custom dispatch function accepts sync or async actions via middleware. Middleware wraps the base dispatch function and can transform, delay, ignore, the payload, and pass the information down the middleware queue of data. Middleware will eventually dispatch a plain object actions using the dispatch method.
		* The base dispatch function always synchronously sends actions to the stores reducers along with the state tree to calculate the new state, actions are plain objects ready to be consumed by the reducer

The store receives the information from actions & updates the touched state-tree, both the pristine state and the touched state tree are dispatched back to the store. The store receives the map methods and via the dispatch(action) method converts the action payload to the dispatch payload. The dispatch method therefore takes the information from the reducer and dispatches it back to components. 

### Branch 10 styling

Now that the app is functional, presentational changes can be made and styled as required.