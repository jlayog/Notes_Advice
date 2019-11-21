/* Higher order functions is any function that does at least one of the following two things, and oftentimes does both. 
First, it accepts a function as an argument. 
Second, it might return a new function.
*/

// ex:

const withCount = fn => {
    let count = 0

    return (...args) => {
        console.log(`Call count: ${++count}`)
        return fn(...args)
    }
}

const add = (x, y) => x + y

const countedAdd = withCount(add)

console.log(countedAdd(1, 2))
console.log(countedAdd(2, 2))
console.log(countedAdd(3, 2))
console.log(countedAdd(4, 2))
console.log(countedAdd(5, 2))