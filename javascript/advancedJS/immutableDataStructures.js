// Immutable Data - Kyle Shevlin

// Mutable = can be changed after creation
// Immutable = cannot be changed after creation

// Mutations can be thought of as side effects in our application, example below:

/* Let's create an array a. We'll equal it to a few values. 
We're going to assign a variable b to a. What this does is create a new variable with the same reference as a. 
We can see this by using a strictly equals equality check, because it will check the references are the same, not that the values are the same.
*/

const a = [1, 2, 3,]
const b = a
console.log(a === b)

/* 
Now, if I make an update to b by pushing a value onto it, if I log out a, we'll see that a has been updated as well. 
his is because a and b are not different arrays. They're a reference to the very same array.
*/

const a = [1, 2, 3,]
const b = a
b.push(4)
console.log(a)

/*
When we make changes to one, we actually make changes to the other. This can be problematic in our code. 
Functionality that's operating on b would change a, even if we didn't intend to do that. 
*/

//Same holds true for objects.
/*
If I create an object of a, we'll give a property foo, and we'll set it to bar. 
If I assign that reference to another variable b, and I make changes to b, such as reassigning foo to baz, if I log out a.foo, we'll see that it's been updated.
*/

const a = { foo: 'bar' }
const b = a 
b.foo = 'baz'
cosole.log(a.foo)

// This breaks the purity of our functions.
// We can create an immutable push function, as shown below

const push = value => array => {
    const clone = [...array]
    clone.push(value)
    return clone
}

const a = [1, 2, 3]
const b = push(4)(a)
console.log(a)
console.log(a === b)
// You'll see that a hasn't been updated, and you will also see that a and b are not equal, because they are references to different arrays

// Taking drink from a glass example:
class MutableGlass {
    constructor(content, amount) {
        this.content = content
        this.amount = amount
    }

    takeDrink(value) {
        this.amount = Math.max(this.amount - value, 0)
        return this
    }
}

const mg1 = new MutableGlass('water', 100)
const mg2 = mg1.takeDrink(20)
console.log(mg1 === mg2)
console.log(mg1.amount === mg2.amount)

class ImmutableGlass {
    constructor(content, amount) {
        this.content = content
        this.amount = amount
    }

    takeDrink(value) {
        return new ImmutableGlass(this.content, Math.max(this.amount - value, 0))
    }
}

const ig1 = new ImmutableGlass('water', 100)
const ig2 = ig1.takeDrink(20)
console.log(ig1 === ig2)
console.log(ig1.amount === ig2.amount)