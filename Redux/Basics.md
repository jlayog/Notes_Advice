# Basics of Redux
---

# 4 key concepts:

- **Action**:   
   *A plain javascript object, such as values in curly braces, that tells the reducer how to change its data or modify the state that it is producing.*   
   Has one requirement: Must have a type property.
- **Reducer**:   
   *A function that returns/produces some amount of data.* 
- **State**:   
   *The data the application is using.*   
   Everything from the value of each input field to user authentication.
- **Store**:   
   *An object that holds the reducers and the application state.*   
   Literally a reference to the reducer and state.
---

## Example
.          ============Store=============        
           |                            |
Action --> | Reducer    -->      State  |
           |                            |
           ==============================

Turn 'asdf' into an array (**Action**)  -->  If the action's type is 'split', it will take a string of characters and turn it into an array (**Reducer**) --> ['a', 's', 'd', 'f'] (**State**)