The purpose of this documentation is to outline what the reducer does and it's importance in the ui-data(state) management process.

__What is a reducer__

Reducers take actions as imports. The state in the actions payloads are transformed it to the next state (updated state). This updated state is forwarded to the store via a root-reducer. Store now can update the original state with the reducer action payload and send this updated payload back to the container-component that has requested the update/change of state.

Reducers perform the function of lifting local state from the components and containers in React to the Redux store.

Each section of an app can lift the local state out of the components and containers into the reducers - this local state can be forwarded to the sections root reducer and several section root reducers can  be combined lifting local state containers all the way up to the redux store state-tree.

DEBUGGING: Ensure each time you lift state from a local component it is lifted with the right naming convention for the state tree eg ```{[key]stateObjectNameCanNotMutate: [value] nameCanChangeAsStateMutates}```

A reducer itself is a function that represents the next state of the ui-component/container requesting an update. If there is no update, the reducer returns the initial state of the component/container.

Reducers take in 2 args - state which is the initial state and actions that are imported from action-creators to outline the state changes the component is requesting. These are received by the reducer via the ```dispatch()`` method in the actions-creators utility functions.

- Reducers or the reducing function reduce the collection of values of the actions to one action. It is a use case for the higher order function reduce(fold)/ array.reduce() method where multiple values are passed with the view to getting a single new value without changing the state of the original data passed in.

- Under the hood, the reducer method has an accumulator and a value and a call back function ```reducer(accumulator, values){}```.

-  The accumulator is the state tree, values are the action-creator objects 

-  State is changed by reducers (pure functions with no side-effects) takes (current) state (also known as modified or touched, pristine state is the original state tree that never gets modified, only duplicated) 

- Once the pristine state has been duplicated, it is duplicated or "touched" and modified by a series of switch statements to execute the actions payloads sent to the store. 

- The switch statement makes sure that both the type and the arguments on either side of the conditional operator are absolutely true (both in type and in form) and then returns the new state tree to the component requesting (subscribing for) the update 

__Some general rules for reducer functions__

- Reducer changes state via pure functions
- The functions written in a reducer determines the changes needed or how state can be mutated - usually done with conditionals (switch) 
- If no change is needed the previous state is returned to the component and no updates are made 
- Root reducer combines all the changes required from multiple reducer functions 
- Pure functions means no api-calls, routing transitions returned in the reducers 
- Functions with dependencies like Math/ date functions (math.random/date.now) can not be passed
- With forms the formReducer() method is used, it is the specialised reducer that gets its information from actions related to higher order components that send the form payloads to the store.

__What is a root-reducer?__

- Several reducers can be combined into a single root reducer with the ```combineReducers()``` method.

- The combineReducers(){} method for the root reducer, calls all child reducers and gathers their result into one function, keys of the action correspond to the keys of the passed reducer function
