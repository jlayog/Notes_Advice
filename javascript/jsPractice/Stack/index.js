// What is a stack?
// A stack is an ordered data structure and keeps track of function invocations.
// It is part of the JavaScript runtime (you don't access it directly)

// How does your code change the stack?
// Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top)
// Whenever a function returns, the information about the invocation is taken off the top of the stack (popped off of the top)

// Stack example:

function multiply(x, y) {
    return x * y;
}

var res = multiply(3,5);

// Stack: line 15 is the main