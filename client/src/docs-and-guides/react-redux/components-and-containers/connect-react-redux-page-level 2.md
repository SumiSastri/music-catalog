The purpose of this documentation is to outline how the ```connect()``` method connects the 2 libraries react and redux together at a page level.

__What is the connect() method?__

Once the dependencies are installed for react-redux, the higher order component, or HoC, of the Provider, provides the whole app with the properties and methods of the store. 

One of the stores methods is the ```connect()``` a function that takes 2 arguments - the state that is mapped as props and the component itself. As a HoC, the connect method, can return the component requesting the change and forward the state of the component to the reducer.

To invoke the method it needs to be imported into the component. As this is a method that belongs to the joining of the 2 libraries you are importing ```react-redux```.

```import { connect } from 'react-redux';```

The method ```mapStateToProps()``` needs to be written and then the method can be invoked in the export default section of the component. More detail on the ```mapStateToProps()``` method is in a separate document ```map-state-to-props.md```

```
export default connect(mapStateToProps)(BlogsHome);
```

This method connects the movement of state from the component onwards to the reducer that then is the only way to modify state.

In classic react, the state is modified within a component with the ```setState()``` method. This method is no-longer used when you use the react-redux library.

With react-hooks you use hooks like ```useState``` - there is an on-going debate on whether hooks will result in redux becoming obsolete in react apps. This is unlikely to happen as there are several legacy react-apps that use redux and some of them do not even use react-hooks.

Legacy react has yet to be modernised by many dev-teams, therefore redux - as painful as it is to set-up and understand is likely to remain in several large applications coupled with react to manage frequent and numerous state changes.