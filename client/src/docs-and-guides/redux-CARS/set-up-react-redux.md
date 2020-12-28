## Setting up react-redux in an app

__Library imports__
``` npm i redux react-redux redux-thunk -- save``` or ```yarn add redux react-redux redux-thunk```

__Component-containers__

The complexity and frequency of changes in the component-container state is managed more efficiently with redux as an application scales.

The most important part of FE-design is the actual ui-ux design and the wireframing of the look-and-feel of the components before coding commences.

User journeys should be mapped and brand-books created so that the FE developer only needs to think about how to implement design changes that have already been signed off by product-brand-marketing-customer teams and senior management.

The app components-containers then need to be connected to redux with the connect constructor which allows the information of the action creators/ actions/ action types to be mapped to the store and dispatched to the redux-reducer method.

__Actions__ 
1. Set up action types based on these changes you anticipate
2. Write utility action functions that change the component state (action creators)
3. Identify the actions (payloads) required to be dispatched that will change and update the component-container-state to the reducers
4. Use the mapStateToStore() method with the connect() method to connect the actions, action-type-constants and action creators to the reducers in the redux library.

__Reducers__
1. Set up Reducers - import the actions, import state from store

The components that need to be aware of state subscribe to the store

components are set up with listeners to subscribe to these payload changes via the subscribe(listener) method they unsubscribe by switching the listener off Components listen for changes and switch from subscribe (listening to changes and performing the render function according to these changes) and unsubscribing when the changes have been executed


Step 5 : Set-Up Dispatch
The dispatch function is the only way to trigger a change in state. The function when run - either sends the action and state tree data to the reducer to be transformed.

The dispatch method can also call the reducer function

When it calls the reducer function, it

notifies component listeners to the “next” change in the state tree rejects the props with errors and dispatches error messages maps the “next” change in the state tree to the component When it dispatches actions and state to the reducer, there are custom functions that are written in Middleware (like Thunk) and passed to the base-dispatch function. Custom dispatch function accepts sync or async actions via middleware. Middleware wraps the base dispatch function and can transform, delay, ignore, the payload, and pass the information down the middleware queue of data. Middleware will eventually dispatch a plain object actions using the dispatch method.

The base dispatch function always synchronously sends actions to the stores reducers along with the state tree to calculate the new state, actions are plain objects ready to be consumed by the reducer

Once the store receives the information from actions and converts these actions that update state the new state needs to be dispatched back to the components via the dispatch method.

The dispatch method therefore takes the information from the reducer and dispatches it back to components.

The store receives the map methods and via the dispatch(action) method converts the action payload to the dispatch payload

Set up Dispatch changes to the components that have subscribed to the changes store.dispatch(action) function, the mapDispatchToProps(dispatch) sends user data like admin fields, how toggles change, error handling to the component.

__Store setup__

Go to the section on the store and follow set-up instructions this should be the next step - keep a place holder for the root reducer file path as this will not be set up at this stage.