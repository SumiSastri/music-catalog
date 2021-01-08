The purpose of this document is to demonstrate what the ```mapStateToProps()``` method achieves and how props are now passed from a stateful component to other components.


__What does the mapStateToProps() method do?__

In a stateful legacy React component, each component holds state. If you are refactoring these components. State in these components will no longer be passed down as props to children components.

Instead, the props are mapped as props from state to the store.

The ```mapStateToProp()``` method takes one argument - state. It returns state as a plain object. The function is written just before the component ```export default NameOfComponent```statement. 

eg: (Note this method takes a return statement not just an implicit es6 arrow function return)

```
const mapStateToProps = (state) => {
	return {
		blogs: state.blogs,
        loading: false,
        images. state.images
	};
};
```

The method is invoked in the ```connect()``` method which connects react at the page level to the redux store.

```export default connect(mapStateToProps)(nameOfComponent)```