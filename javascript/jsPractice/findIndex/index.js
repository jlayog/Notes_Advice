// findIndex definition
// returns the index of the first element in the array for which the callback returns a truthy value.
// -1 is returned if the callback never returns a truthy value.

//function findIndex(array, callback) {
// findIndex code to be implemented
//}

//function callback(curElement, curIndex, array) {
// callback implemented by caller of function
//}

// findIndex example: Find a number

var arr = [3, 4, 6, 2, 1];
findIndex(arr, function(num, index, array) {
    return num === 6;
});
// returned result: 2; since 6 is on the index of 2 


// Example 2: find first even number
var arr = [5, 11, 13, 8, 6, 7];
findIndex(arr, function(num, index, array) {
    return num % 2 === 0;
});
// returned result: 3;


// findIndex example: Could not find
var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, arr) {
    return lang === "Javascript";
});
// returned result: -1;

// findIndex Example: Bad callback
var langs = ["Java", "C++", "Javascript"];
findIndex(langs, function(lang, index, arr) {
    lang === "JavaScript";
});

// returned result = -1; because in callback we always need a 'return' key, otherwise we will always getback -1.