First step in using redux is creating a store, aka an object that holds our reducer and state.

```javascript
const store = Redux.createStore();
``` 
*When we create a redux store, it expects us to pass in at least one reducer function. That is why an error will appear with this line of code.*

```javascript
const reducer = () => [];
const store = Redux.createStore(reducer);
```
*Here we add the reducer function, that returns an array whenever it gets invoked. Then we pass that reducer to the .createStore call*
---

Remember that store contains all of our application's state and all of our reducers (*however many you may have for the application*), in which you can ask the store for its current state any point in time. As done below:
```javascript
const reducer = () => [];
const store = Redux.createStore(reducer);

store.getState();
```
*So this tells us that by default, when a redux store is created and reducer is passed in, the reducer will be ran, and whatever the reducer returns, will become the application's or redux store state.*