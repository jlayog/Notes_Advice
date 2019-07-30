//Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

const isEven = (num) => {
   return num % 2 === 0
};

isEven(4);
isEven(21);
isEven(68);
isEven(333);

//Write a function factorial() which takes a single numeric arugment and returns the factorial of that number

const factorial = (x) => {
    let multiply = 1;
    for (var i = 1; i <= x; i++) {
        multiply *= i;
    } 
    return multiply;
};

factorial(5);
factorial(2);
factorial(10);
factorial(0);


//Write a funciton kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version

const kebabToSnake = (str) => {
    return str.replace(/-/gi, "_");
};

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");
