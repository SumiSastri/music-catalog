The purpose of this documentation is to outline the difference between action creators/ action payloads and action Types

__What are Actions?__

Actions are payloads that represent the intention to change state. They replace the ```setState()``` method in vanilla React in the component's mounting phase or updating phase as well as with change-events.

__What are ActionsTypes?__

These are string constants that hold the information of the action payloads (actions) and action creators (utility functions) - for more detail see the ```actionTypes.md``` file

__What are Actions Creators?__

Action creators are utility functions that describe the payload change from the component-container state from one state to another. This component-container state-change is then dispatched via the ```dispatch()``` method to the reducer which represents the next state change in the app.



