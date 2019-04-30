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

---

If we change the return value from the reducer, the application state will change as well.
```javascript
const reducer = () => [123456789];
const store = Redux.createStore(reducer);

store.getState();

// [123456789]
```
*As we plug in values for our reducer function, the application state updates as well.*

---

Creating an Action.
```javascript
const reducer = () => [];
const store = Redux.createStore(reducer);

store.getState();

const action = {};
```
*Again, action is a plain javascript object, which we have created right here. The only requirement of an action is that it defines a type property.*

```javascript
const reducer = () => [];
const store = Redux.createStore(reducer);

store.getState();

const action = { type: 'split_string' };
```
*The type property will always be a string. The purpose of the type property is to tell the reducer to commit a specific operation, like a command or instruciton. In this example we will use 'split_string'.*

```javascript
const reducer = () => [];
const store = Redux.createStore(reducer);

store.getState();

const action = { 
    type: 'split_string', 
    payload: 'asdf' 
};
```
*We will also tell the reducer which string we want it to split by passing it on a payload property. The payload is the piece of data we want to work on.*

---

Now we will update our reducer and instruct how to handle the action.
```javascript
const reducer = (state = [], action) => {
    if (action.type === 'split_string') {
        return action.payload.split('');
    }

    return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { 
    type: 'split_string', 
    payload: 'asdf' 
};
```
*Reducers are always called with two arguments. The first is the current state that it has produced, and the second is an action.*  

In other words, this code says that we have a reducer that gets called with two arguments. If the action's type is equal to split string, then it will take whatever the action's payload property is, and split it with an empty string, turning it into an array of characters.

---

To take the action and push it into the reducer, we will write this out:

```javascript
const reducer = (state = [], action) => {
    if (action.type === 'split_string') {
        return action.payload.split('');
    }

    return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { 
    type: 'split_string', 
    payload: 'asdf' 
};

store.dispatch(action);
```

*Then finally, we're going to run store and get the state again*

```javascript
store.dispatch(action);

store.getState();

// ["a", "s", "d", "f"]
```