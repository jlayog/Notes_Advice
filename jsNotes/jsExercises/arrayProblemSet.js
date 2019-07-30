/*Write a function printReverse() that takes an array as an argument and prints out
the elements in the array in reverse order(don't actually reverse the array itself)*/

//Need a loop as forEach is not viable here
function printReverse(arr) {
    //need to start at the end of the array (need to add -1 because the length is always 1 greater than the greatest index)
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
};

printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);

/*Write a function isUniform() which takes an array as an argument and returns true
if all elements in the array are identical*/

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);

/*Write a function sumArray() that accepts an array of numbers and returns the sum
of all numbers in the array*/

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

/*Write a function max() that accepts an array of numbers and returns the maximum
number in the array*/

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);
