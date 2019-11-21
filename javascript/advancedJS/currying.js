// Currying = the act of refactoring a function so that it receives its arguments one at a time.

function add(x) {
    return function(y) {
        return x + y
    }
}

const addThree = add(3)
// console.log(addThree(4))
// console.log(addThree(5))
// console.log(addThree(6))

const add2 = x => y => x + y

// Arity
// describes the number of arguments a function receives. Depending on the number it receives, there are specific words to describe these functions.
/* A function that receives one is called a unary function. 
A function that receives two arguments is called a binary, three equals a ternary, and four equals a quaternary, so forth and so on. 
Thus the act of currying can be described as taking a multivariate function and turning it into a series of unary functions. */