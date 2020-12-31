## Redux Forms

React-Redux Forms are a powerful combination of libraries to keep state in forms dynamic and controlled (virtually mimicking the functionality of HTML forms that holds state at all time). This project does not use HOCs from Redux-React forms, but I have included a note on package set up in case I want to re-factor this project to include this set-up.

Forms handle a high load of ui-changes. Some of these changes are immediate changes (synchronous) and some of them are based on event handlers being triggered (asynchronous). These synchronous and async changes are maintained and updated more deeply and dynamically in React-Redux forms.

Ideally data should be stored server side in redux to increase stability of the app’s store, but it can also be run client side as a predictable state container for javascript.

It can be stored project by project with a store wrapper as it is very light (2KB) including all dependencies, it makes the app and form handling fast and easy to install in legacy systems.

Components send information to the store via actions Redux forms need additional set up to work with store through some specialised methods and higher order components (HOC’s). The reduxform() method takes the form configuration object and returns a new function that wraps the changes coming in specifically from form actions.

With forms, higher order components (HOCs) connect the form components to the store object. Form components have several event listeners, the Redux form method looks at all of these event listeners and ensures that the higher order components are set up to register listeners of events and unregisters these listeners in the Store.

This is specifically important for the handleSubmit (onSubmit) event handler. On keyboard, mouse and other changes are also important to track form engagement via user experience events.

This higher order component, is exported at the bottom of the form - export default reduxForm({})

A little more about the special case of the event handler onSubmit Submitting all a forms information (data) has a chaining method to handle the submission of the information, spotting errors in the submission and catching these errors. Submission is with the values described by the user. OnSubmit(values) are passed as a JSON object. They need custom functions to handle both state (the values or data submitted) and validation (that the values and data submitted are correct). The error code block is a custom block that returns rejected props based on certain conditions and on
```
.then()
.throw new Submission Error({})
.catch()
```