The purpose of this documentation outline evolution of state-management with React-Redux in the blogs section.

__State management__

- Initially the folder ```blog-containers-components``` were set up with vanilla React. 
- State was held in and passed down to nested components ```BlogsHome -> BlogList -> BlogCard```.

__Challenges of Props Drilling__
This demonstrated challenges of prop-drilling (prop-tunnelling) once React-Router was added. Routing for the ```BlogCard``` needed to pass via ```BlogList``` although this component did not consume the props.
- Router, as a separate library had its own props and methods.  Props from this library only are one level-deep and need to be passed down like state. 

__Redux Refactor__

1. Refactoring involved moving state into the reducer and importing it back into the ```BlogHome``` component
2. Utility functions for the components moved into Action Creators with their correspondening types
3. Components connected with the react-redux ```connect()``` method and ```mapStateToProps()``` imported utility functions passed as arguments of this method and dispatched from the action creators file

__Challenge of Rendering__

- It is not clear how state or props are rendered in the component once state is removed from the ```BlogHome``` component
- The get method works and the data is flowing into the component but not rendering correctly

__Point of Failure__
 The point of failure in these lines is because the destructured blogPosts is not correctly identifying the array in the state tree.

 ```
 const { blogPosts } = this.props.blogPosts;
		const { routerHistory } = this.props.history;
		//DEBUG THIS POINT OF FAILURE
		return !blogPosts.length ? (
```			

