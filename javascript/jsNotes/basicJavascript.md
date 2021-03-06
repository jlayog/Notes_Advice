# Javascript notes 

80/20 Rule: Using 20% of javascript to get 80% of progress done.

Statements in Javascript have five separate elements:

1. Values
    - Fixed (a.k.a Literals)
        Doesn't ever change.
        
        Numbers such as 17.425 or 946
        
        Strings are simply text, written in 'single' or "double quotes"
        
        Expressions compute to values, like math: 10 * 4 or 3.14 - 6

    - Variable
        Can change. Used to store data, such as numbers, strings, or expressions. Think of a variable as a bucket that can have stuff in it.
        
        JS uses the keyword var to define a variable, then uses = to assign a value to the variable.

2. Keywords
3. Expressions
4. Operators
    - Arithmetic 
        Used for math. Such as:
        + - * / 
        
    - Assignment
        Used to assign values to variables. Such as:
        = += -= *= /=
    
5. Comments
    - Single line comments //
    
    - Multi line comments /* */


# Notation
Best Practice in writing JS, details in camelCase. In camelCase, multi-word variable names have the 
first word in lowercase and the first letter of each subsequent word is capitalized.


# Number increments
```
myVar++ is the equivalent of myVar = myVar + 1
```
inversely
```
myVar-- is the equivalent of myVar = myVar - 1
```

# Remainders in Javascript
The remainder operator % gives the remainder of the division of two numbers.
Ex:
```
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

# Augmented Addition
In programming, it is common to use assignments to modify the contents of a variable. 
Remember that everything to the right of the equals sign is evaluated first, so we can say:
```
myVar = myVar + 5;
```
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a 
mathematical operation and assignment in one step.

One such operator is the += operator.
```
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
```
Augmented: 
Subtraction: var -=
Division: var /=
Multiplication: var *=


# Escape Sequences in Strings
Code:                 Output:
\'                      Single quote
\"                      double quote
\\                      backslash
\n                      new line    
\r                      carriage return
\t                      tab
\b                      backspace
\f                      form feed

# Adding strings together
ex:
```
var myStr = "This is the start. " + "This is the end." 
```
Plus Equals Operator
```
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

# Length of a String
You can find the length of a String value by writing .length 
after the string variable or string literal.
Ex:
```
"Cookies and Cream".length; would output to 17
```

# Word Blannks
```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
      result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

  return result;
}

// Change the words here to test your function
wordBlanks("cat", "small", "walked", "slowly");
```


# Arrays
--You can store multiple values within one variable using an Array
Ex:
```
myVar = ["Me", 23]
```
--You can also nest one array within another  
```
var myArray = [["Treston", 22], ["Ohio", 578]];
```
When counting Arrays start at 0. So for example:
```
var myArray = [50, 60, 70];
```
typing array[0]; would output to 50

you can also assign it to other variables as such:
```
var myData = myArray[2]; // output: 70
```
--You can also overrite Array data because unline strings, arrays are mutable
Ex:
```
var myArray = [50, 60, 70];
myArray[0] = 15; // output: [15, 60 ,70]
```

# Multi-Dimensional Arrays with Indexes
Multi-Dimensional Arrays are like inception, a dream within a dream, an array within an array.
For example: 
```
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

# .push()
An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.
Example:
```
var myArray = [1,2,3]
myArray.push(4)
// myArray is now [1,2,3,4]
```
More complex ex:
```
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
//myArray is now  [["John", 23], ["cat", 2], ["dog", 3]]
```

# Manipulating Arrays with .pop()
.pop() is used to "pop" a value off of the end of an array. 
We can store this "popped off" value by assigning it to a variable. 
In other words, .pop() removes the last element from an array and returns that element. 
Ex:
```
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(["cat",2]);
// myArray is now  [["John", 23]]
// and removedFromArray is ["cat", 2]
```

# .shift()
.shift() removes the first item from an Array.
Ex:
```
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(["John", 23]);
// myArray is now  ["dog", 3]
// and removedFromArray is ["John", 23]
```

# .unshift()
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, 
unshift() adds the element at the beginning of the array.
Ex:
```
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]
```

# Functions
In JavaScript, we can divide up our code into reusable parts called functions.
Here's an example of a function:
function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this:

functionName();

Each time the function is called it will print out the message "Hello World" on the dev console. 
All of the code between the curly braces will be executed every time the function is called.
EX:

function reusableFunction() {
    console.log("Hi World")
}

reusableFunction();
// Hi World


# Parameters in functions
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
When a function is defined, it is typically defined along with one or more parameters. 
The actual values that are input (or "passed") into a function when it is called are known as arguments.
Ex:

```
function functionWithArgs(a,b) {
  console.log(a + b);
}
functionWithArgs(1, 2);
// 3
```
Ex2:

```
function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun("Hello", "World");
````
We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". 
Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.


# Global Scope and Functions
scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code.
Variables which are used without the var keyword are automatically created in the global scope. 
This can create unintended consequences elsewhere in your code or when running a function again. 
You should always declare your variables with var.


# Local Scope
Variables which are declared within a function, as well as the function parameters have local scope. 
That means, they are only visible within that function.
Ex: 

function myLocalScope() {
  'use strict'; 
var myVar = "Hi";
  console.log(myVar);
}
myLocalScope(); // "Hi"
console.log(myVar); // myVar is not defined


# Global vs Local Scope
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.
Ex:

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();


# Return in Function
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
Ex:

function timesFive(num) {
  return num * 5;
}
var answer = timesFive(2);
// 10

--Undefined Value returned from a Function
A function can include the return statement but it does not have to. 
In the case that the function doesn't have a return statement, when you call it, the function processes 
the inner code but the returned value is undefined.
Ex:

var sum = 8;
function addFive(num) {
  sum = sum + 5;
}
var returnedValue = addFive();


# Assignment with Returned Value
If you'll recall from our discussion of Storing Values with the Assignment Operator, 
everything to the right of the equal sign is resolved before the value is assigned. 
This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);

will call sum function, which returns a value of 17 and assigns it to ourSum variable.
Ex:

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10); // 5


# Stand in Line
A queue is an abstract Data Structure where items are kept in order. New items can be added at the 
back of the queue and old items are taken off from the front of the queue.
Ex:

function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed; 
}

Explanation: 
- Push item at the end of arr.
- Call the shift() method on arr to get the first item and store it in removed.
- Return removed.


# Boolean Values
Booleans may only be one of two values: true or false. They are basically little on-off switches, 
where true is "on" and false is "off." These two states are mutually exclusive.
Boolean values are never written with quotes. 
The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.


# Conditional If Statements
If statements are used to make decisions in code. The keyword if tells JavaScript to execute 
the code in the curly braces under certain conditions, defined in the parentheses. 
These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. 
When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.
Ex:
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue){
    return "Yes, that was true"
  }
  return "No, that was false"
}
trueOrFalse(true); // Yes, that was true


# Comparison Operator: Equality
The most basic operator is the equality operator ==. The equality operator compares two values and 
returns true if they're equivalent or false if they are not. Note that equality is different from 
assignment (=), which assigns the value at the right of the operator to a variable in the left.
Ex:
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10); // Not Equal

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true



##  Strict Equality
Strict equality (===) is the counterpart to the equality operator (==). 
However, unlike the equality operator, which attempts to convert both values being compared to a common type, 
the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality 
operator will return false.
Ex: 
3 === 3 // true
3 === '3' // false

In the second example, 3 is a Number type and '3' is a String type.
Code Example:
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict("7"); // Not Equal


##  Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns 
false where equality would return true and vice versa. Like the equality operator, the inequality operator 
will convert data types of values while comparing.
Examples:
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false

Code example:
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10); // Not Equal


##  Strict Inquality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
Strict inequality will not convert data types.
Examples:
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true


# Greater Than >
The greater than operator (>) compares the values of two numbers. If the number to the left is greater 
than the number to the right, it returns true. Otherwise, it returns false.
Like the equality operator, greater than operator will convert data types of values while comparing.



##  Greater Than or Equal To >=
Ex:
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false


# Logical and
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns 
true if and only if the operands to the left and right of it are true.
Ex:

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
      return "Yes";
    }
  return "No";
}


# Comparisons with Logical Or
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
Ex:

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}


# Else Statements
When a condition for an if statement is true, the block of code following it is executed. 
What about when that condition is false? Normally nothing would happen. 
With an else statement, an alternate block of code can be executed.
Ex:

function testElse(val) {
  var result = ""; 
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4); // 5 or Smaller


# Else if Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
}
}
testElseIf(7); // Between 5 and 10

-- Order is important! 
Order is important in if, else if statements.
The function is executed from top to bottom so you will want to be careful of what statement comes first.
Correct Ex:
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
// Less than one

Incorrect:
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
// Less than two

These two will have different outputs.

-- You can chain If Else Statements 
Ex:
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
else if (num < 20) {
  return "Large";
}
else if (num >= 20) {
  return "Huge";
}
else {
  return "Change Me";
}
}
testSize();


# Switch Statements
If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements which define various possible values. 
Statements are executed from the first matched case value until a break is encountered.

Ex:
switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}

A switch statement first evaluates its expression. It then looks for the first case clause whose expression evaluates 
to the same value as the result of the input expression (using the strict comparison, (===) and transfers control to 
that clause, executing the associated statements. (If multiple cases match the provided value, the first case that matches 
is selected, even if the cases are not equal to each other.)

If no matching case clause is found, the program looks for the optional default clause, and if found, transfers control to 
that clause, executing the associated statements. If no default clause is found, the program continues execution at the statement 
following the end of switch. By convention, the default clause is the last clause, but it does not need to be so.

The optional break statement associated with each case label ensures that the program breaks out of switch once the matched 
statement is executed and continues execution at the statement following switch. If break is omitted, the program continues 
execution at the next statement in the switch statement.

Ex2: 
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1: 
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3:
    return "gamma";
    break;
    case 4:
    return "delta";
    break;
  }
  return answer;  
}
caseInSwitch(1);

##  Default Option in Switch Statements
In a switch statement you may not be able to specify all possible values as case statements. 
Instead, you can add the default statement which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.
Ex:
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 'a':
    answer = "apple";
    break;
    case 'b':
    answer = "bird";
    break;
    case 'c':
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  } 
  return answer;  
}
switchOfStuff(1);


-- Multiple Switch Statements
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed 
until a break is encountered. 

If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. 
Ex: The following  

if (val === 1) {                                
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

can be replaced with: 

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

Example 2:

function chainToSwitch(val) {
  var answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no # 1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;  
}

convert to:

function chainToSwitch(val) {
    var answer = "";
    switch(val) {
    case "bob":
        answer = "Marley";
        break;
    case 42: 
        answer = "The Answer";
        break;
    case 1:
        answer = "There is no # 1";
        break;
    case 99:
        answer = "Missed me by this much!";
        break;
    case 7: 
        answer = "Ate Nine";
        break;
}
return answer;
}


# Returning Boolean Value
All comparison operators return a boolean true or false value.
Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}


# Return Early Pattern for Functions
When a return statement is reached, the execution of the current function stops and control returns to the calling location.
Ex:
// Setup
function abTest(a, b) {
  if (a < 0 || b < 0)
  return undefined;

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);


# Objects
Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties.
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". 
However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, 
as follows:

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

Example code:
Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends"
var myDog = {
  "name": "Fido",
  "legs": 4,
  "tails": 1,
  "friends": ["Owners"]
};


# Accessing Object Properties with Dot Notation
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
Here is a sample of using dot notation (.) to read an object's property:
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

Example Code:
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;     
var shirtValue = testObj.shirt;


# Bracket Notation
The second way to access the properties of an object is bracket notation ([]). 
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
Ex:

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];   
var drinkValue = testObj["the drink"]; 

Ex2:

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise


##  Accessing Object Properties with Variables
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
This can be very useful for iterating through an object's properties or when accessing a lookup table.
Ex:
var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

Note that we do not use quotes around the variable name when using it to access the property 
because we are using the value of the variable, not the name.


# Updating Object Properties
After you've created a JavaScript object, you can update its properties at any time just like 
you would update any other variable. You can use either dot or bracket notation to update.
Ex:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

You can update the object's name property like so: 

ourDog.name = "Happy Camper"; or

ourDog["name"] = "Happy Camper";

You can also add new properties to existing objects in the same way.

##  Delete Properties from JS Object
ex:
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails; <---


# Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. 
This is most useful when you know that your input data is limited to a certain range.
ex:
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"

Ex of changing a switch chain into Lookup:

function phoneticLookup(val) {
  var result = "";
  switch(val) {
    case "alpha": 
      result = "Adams";
      break;
    case "bravo": 
      result = "Boston";
      break;
    case "charlie": 
      result = "Chicago";
      break;
    case "delta": 
      result = "Denver";
      break;
    case "echo": 
      result = "Easy";
      break;
    case "foxtrot": 
      result = "Frank";
  }
  return result;
}
phoneticLookup("charlie");

into: 

function phoneticLookup(val) {
  var result = "";
  var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
};
 var result = lookup[val];
  return result;
}
phoneticLookup("charlie");


# Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propname) method of objects to determine if that object has the 
given property name. .hasOwnProperty() returns true or false if the property is found or not.
ex:
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
  } else {
  return "Not Found";
 }
}
checkObj("gift"); // pony


# Manipulating Complex Objects
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle 
flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
Ex:

var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

This is an array which contains one object inside. The object has various pieces of metadata about an album.
It also has a nested "formats" array. If you want to add more album records, you can do this by adding records 
to the top level array.

Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" 
is a property that has a key of "artist" and a value of "Daft Punk".

JavaScript Object Notation or JSON is a related data interchange format used to store data.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}

Exercise:

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
{
  "artist": "Joji",
  "title": "Ballad1",
  "release_year": 2018,
  "formats": [
    "CD",
    "MP3",
    "Digital"
  ],
  "gold": true
}
];


# Accessing Nested Objects
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
Ex:

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"

Ex2:

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // "maps"


##  Accessing Nested Arrays
Objects can contain both nested objects and nested arrays. 
Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
Ex:

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

Ex2:

var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree = myPlants[1].list[1]; // "pine"


# While Loops
You can run the same code multiple times by using a loop.
The first type of loop we will learn is called a "while" loop because it 
runs "while" a specified condition is true and stops once that condition is no longer true.
Ex:
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}


##  For Loops
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a "for loop" because it runs 
"for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the loop starts. 
It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and 
will continue as long as it evaluates to true. When condition is false at the start
of the iteration, the loop will stop executing. This means if condition starts as 
false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next 
condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 
is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.

Ex:
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

Ex2:
var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}


##  # Odd/Even Numbers with For Loop
For loops don't have to iterate one at a time. By changing our final-expression, 
we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
ex:
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

OddEx:
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}


##  # Counting backwards with for loop
A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our initialization, condition, 
and final-expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}


##  # Iterate through an Array with a For Loop
A common task in JavaScript is to iterate through the contents of an array. 
One way to do that is with a for loop. This code will output each element of the 
array arr to the console:
Ex:
var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

Remember that Arrays have zero-based numbering, which means the last index of the array 
is length - 1. Our condition for this loop is i < arr.length, which stops when i is at length - 1.

Ex2:
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

Ex3:
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


##  Nesting For Loops
If you have a multi-dimensional array, you can use the same logic as the prior waypoint 
to loop through both the array and any sub-arrays. 
Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

This outputs each sub-element in arr one at a time. Note that for the inner loop, 
we are checking the .length of arr[i], since arr[i] is itself an array.
Ex2:

function multiplyAll(arr) {
  var product = 1;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}


# Do... While Loops
This loop is called a "do...while" loop because it first will "do" one pass of the code inside the 
loop no matter what, and then it runs "while" a specified condition is true and stops once that condition 
is no longer true. 
Ex:
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

This behaves just as you would expect with any other type of loop, and the resulting array will look like [0, 1, 2, 3, 4]. 
However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. 
Let's see this in action.

Here is a regular while loop that will run the code in the loop as long as i < 5.

var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}

Notice that we initialize the value of i to be 5. When we execute the next line, we notice that i is not less than 5. 
So we do not execute the code inside the loop. The result is that ourArray will end up with nothing added to it, so 
it will still look like this [] when all the code in the example above finishes running.

Now, take a look at a do...while loop.

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

In this case, we initialize the value of i as 5, just like we did with the while loop. When we get to the next line, 
there is no check for the value of i, so we go to the code inside the curly braces and execute it. We will add one 
element to the array and increment i before we get to the condition check. Then, when we get to checking if i < 5 see 
that i is now 6, which fails the conditional check. So we exit the loop and are done. At the end of the above example, 
the value of ourArray is [5].

Essentially, a do...while loop ensures that the code inside the loop will run at least once.
Ex:
Change the while loop in the code to a do...while loop so that the loop will push the number 10 to myArray, and i will 
be equal to 11 when your code finishes running.

Code:
var myArray = [];
var i = 10;

while (i < 5) {
  myArray.push(i);
  i++;
}

Solution:
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);


# Generate Random Fractions
JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) 
and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1

Like Storing Values with the Equal Operator, all function calls will be resolved before the return 
executes, so we can return the value of the Math.random() function.

Ex:
function randomFraction() {
  return Math.random();
}


##  Generate Random Whole Numbers
Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, 
it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() 
function to round the value down to the nearest whole number.

Ex:
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}


##  Generate Random Whole Numbers within a Range
Instead of generating a random number between zero and a given number like we did before, we can 
generate a random number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
Ex:

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}
// Change these values to test your function
var myRandom = randomRange(5, 15);


# parseInt Function

The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");

The above function converts the string "007" to an integer 7. If the first character in the string 
can't be converted into a number, then it returns NaN.
Ex:

function convertToInteger(str) {
 return parseInt(str);
}

convertToInteger("56");


##  parseInt function with a radix
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix,
which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);

And here's an example:

var a = parseInt("11", 2);

The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.
Ex:

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");


# Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is:

condition ? statement-if-true : statement-if-false;

The following function uses an if-else statement to check a condition:

```
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

ExCode:

function checkEqual(a, b) {
    return a === b ? true : false;
}

checkEqual(1, 2);
```

##  Multiple Conditional Operators
You can chain conditional operators together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:
```
function findGreaterOrEqual(a, b) {
  if(a === b) {
    return "a and b are equal";
  }
  else if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

The above function can be re-written using multiple conditional operators:
```
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

Example Code:
Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.
```
function checkSign(num) {
  return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive"; 
}

checkSign(10);
```
























