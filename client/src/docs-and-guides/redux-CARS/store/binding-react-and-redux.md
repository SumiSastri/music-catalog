The purpose of this document is to show how redux integrates with react. Redux is a state management tool for any JavaScript application and can be used with vanilla JavaScript as well as other JavaScript libraries - Vue, j-Query etc.

In the react-redux library, the provider constructor, 'provides' the contents of the store to the app. It is imported into ```App.js``` 

```
import { Provider } from 'react-redux';

```
As a higher order component (HoC), it wraps the app with an HoC in the React ```render()``` method. HoC's are components that create components. Here the Provider creates the store as a prop and shares it across the app.

```
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					...children
				</div>
			</Provider>
        )
    }
```