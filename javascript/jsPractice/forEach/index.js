// Print array values doubled

var arr = [1, 2, 3, 4, 5, 6];
function double(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
}
double(arr);

// how to refactor with forEach

var arr = [1, 2, 3, 4, 5, 6];
forEach(arr, function(number) {
    console.log(number * 2);
});

// NOTES:
// forEach Function definition:
// forEach is a funciton that takes in an array as a parameter and a callback
// Remember the callback is not something that the forEach implements, it is given to forEach as a parameter
// function forEach(array, callback) {
//
// }
// forEach will invoke your callback with 3 parameters everytime:
// function callback(curElement, currentIndex, array) {
//    
// }

// forEach exmaple with all callback parameters

var strings = [ "my", "forEach", "example"];

var result = "";
forEact(strings, function(str, index, array) {
    if (array.length - 1 !== index) {
        result += str + " ";
    } else {
        result += str + "!!!";
    }
});

// result = "my forEach example!!!"