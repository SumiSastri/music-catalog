The purpose of this documentation is to help understand the sequence of steps needed to introduce redux into a react app.

__Library imports__
``` npm i redux react-redux redux-thunk -- save``` or ```yarn add redux react-redux redux-thunk```

__Component-containers__

The complexity and frequency of changes in the component-container state is managed more efficiently with redux as an application scales.

The most important part of FE-design is the actual ui-ux design and the wireframing of the look-and-feel of the components before coding commences.

User journeys should be mapped and brand-books created to your personal requirements.

The ui-ux for this ToDos section is outlined here [https://docs.google.com/drawings/d/1FlbKJrreGEvBpsK_tfcj8h1gSbcuHR884zsaeVx04PQ/edit?usp=sharing]


In your app then set up the folder structure based on this design road-map.

__Folder Structure With Presentational And Class Components in the demo-ToDos__
1. Separate out the stateful vs. presentational components.
2. Design the presentational components and render them
3. Design your main stateful component and render it correctly (demoHomePageStage1.js)
4. Refactor and pass state down to the components that require state for presentational purposes
     - List component to render out a complete list (demoListPageStage1.js & demoHomePageStage2.js)
     - Refactor list page pass props to card to display one of the items in the list (demoListPageStage2.js & demoRedesignedCard.js). This card is unique to the id it holds therefore it can be updated or deleted. The Card is imported into the List page and the list page refactored.
     - A further refactor with the design of a loading page (demoLoadingPage.js) or tasks completed page can be moved out of the List page (demoListPageStage3.js)
5. Consider what functions you want to write to interact with this section - create a new to-do? edit and update an existing toDo? deleted a toDo? Show or hide some content? Add a counter?

List the functions in the home page without executing them - these functions if you do not have legacy react pages with stateful components can be written in the actions section. Skip directly to the actions section.

```
	createToDos = () => {};
	updateToDos = () => {};
	deleteToDos = () => {};
```     

If you have legacy react-pages that need to be refactored follow the steps in this next section.

__Refactor React Stateful Components and Lift State__



__Actions__ 
1. Set up action types based on these changes you anticipate
2. Write utility action functions that change the component state (action creators)
3. Identify the actions (payloads) required to be dispatched that will change and update the component-container-state to the reducers
4. Use the mapStateToStore() method with the connect() method to connect the actions, action-type-constants and action creators to the reducers in the redux library.

Once the actions have been moved out of the component, they need to be imported back into the component and passed as an argument of the ```mapStateToStore()``` and ```connect()``` methods. 

The dispatch method can be written here with middleware removing this method from the store and applying it in the component actions.

Actions that only have the instructions of the type and payload (changes to the ui) are forwarded to the reducer.

__Reducers__
Only the reducers can change state. The ```setState()``` method now is replaced by the methods and conditions in a reducer.

1. Set up Reducers - import the actions, import state from store
2. Initial state is moved from the component to the reducer and the component will at first render with the react library, mount and render initial state. Then the actions change this state with the switch conditions written in the reducer and the updated state is re-rendered.

The reducer is tightly coupled with the store. The information in the reducer is forwarded to the store. Each component may have its own reducer or a section may have one reducer. The app may have several reducers.

Combine all reducers to a single root reducer. Only the root reducer should be passed into the store to update the store state.

__Store setup__

While it is the practice to set up store first, it is both the starting and ending point of the journey of lifting state.

The store dispatches these changes to the components so the cycle of finding out whether your component has updated with the changes you have set up will not fire unless this loop is completed.

The conundrum is if you set up store, you do not have your root-reducer and you do not have your components asking for changes, moving state out of the component into actions-action-types and action-creators. The reducer has not updated state so your component will not fire any changes.

To ensure the set up is working, set up a demo process with a single test-component, write a single action-action-type and action creator, pass this to a single reducer forward this to a root-reducer, now you can set up store with the root reducer and set-up the test process.

Add components/ sections following this sequence - follow the data-flow and it becomes easier to follow the react-redux library.

I have followed several tutorials where each of these steps is done separately, non-sequentially and it has been confusing for me to understand where the process starts and ends.

The reason is it is a circular and continuous process and therefore it is not easy to say the process starts with the component state or ends with the store.

However, logically for me, if the user does not interact with the component, then there is no change required. Therefore, to me the logical first step is the component-ui, changes there and how the data held locally in the component state is moved out of this position into the store.
