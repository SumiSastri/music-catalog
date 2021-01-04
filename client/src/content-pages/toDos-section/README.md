__Actions__
3. Add action-type-constants - what do you want your user to be able to interact with on the page?
4. Set up the action functions based on the ui-design of your components and the actions you want the user to take


Net Ninjas: Add item forms
[https://www.youtube.com/watch?v=0EAr12s8vkM&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=18&ab_channel=TheNetNinja]

1. utility function
addItem = (newItem) => {};
2. newItem = submit payload 
3. submit payload is the state of the component after event-target-value updated
4. addItem() called with submit payload in the handler - handleSubmit = () => { addItem(this.state)}
5. To access this addItem() function pass it down as a prop from parent to the submit handler function - stateful component link as prop attribute