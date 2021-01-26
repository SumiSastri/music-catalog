This section is an experimental section working with to-dos to understand how the moving parts work.

It follows several tutorials to get a good fundamental knowledge of how actions, reducers, components work together.

LI Learning - Sean Wassell

- Css styling may be adapted from this tutorial to experiment with separation of concerns


Net Ninjas: Add item forms
[https://www.youtube.com/watch?v=0EAr12s8vkM&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=18&ab_channel=TheNetNinja]

1. utility function
addItem = (newItem) => {};
2. newItem = submit payload 
3. submit payload is the state of the component after event-target-value updated
4. addItem() called with submit payload in the handler - handleSubmit = () => { addItem(this.state)}
5. To access this addItem() function pass it down as a prop from parent to the submit handler function - stateful component link as prop attribute