1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array:
1) .map
2) .filter
3) .concat

Object: 
1) .assign - This method creates a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: 
Actions are an object of information with teo key properties: type and payload. Actions are passed to the reducer function as an argument and prove the reducer with the information needed for the reducers to know how to update state accordingy to the type and payload properties.

Reducers:
Actions tell reducers how to update state; the Reducers actually update the state itself. The Reducers are the only place that the application state can be updated in the redux store. Reducers are pure functions that bind actions and the store.

Store: The store is a container for an application's state. It is known as a 'single source of truth' because it hold the application true original initial state. All updates made to state by the reducers only occur by making a copy of the store state and manipulating the copy. THe state state is never mutated.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state:
Component state is when state is local is lives within that specific Component where state was created. Therefore that state can only be updated within that Component and passed down to its children via props. A good time to utilize this state approach is within a smaller application or within a small part of a larger application where only one Component and its children may need their own small state updating abilities that no other higher order Component or cross Component would ever need access to. 

Application state:
Application state on the other hand is global and is held within stores. This means that any Component anywhere within the Application can have access to state if needed. This approach is appropriate for large scale Applications and should be used if many Components throughout the Application Component tree would require access to the same state object in order to read or update state accordingly.

1.  What is middleware? Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Middleware in Redux is an extension that can intercept actions and perform tasks or functions prior to that action being passed to the reducer. That function that is performed by the middleware is a thunk, or a function returned by another function. Redux-thunk is middleware that provides the ability to handle asynchronous operations inside the action-creators when simple redux reducers could only handle synchronours operation on its own. By using redux-thunk we change our action-creators to make asynchronous API calls from within the action-creator itself.