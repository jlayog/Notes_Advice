// Pure Functions

// f(x) = x + 1
const f = x => x + 1

// Impure function ex 1 - Global State
const COST_OF_ITEM = 19
const cartTotal = quantity => 
    COST_OF_ITEM * quantity 

console.log(cartTotal(2))
console.log(cartTotal(2))