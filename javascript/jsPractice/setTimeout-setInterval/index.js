// setTimeout is a funciton that asynchronously invokes a callback after a delay in milliseconds
// setTimeout usage:
function callback() {
    console.log("callback function");
}
var delay = 1000; // Delay is in ms
setTimeout(callback, delay);

// setTimeout example:
setTimeout(function() {
    console.log("Runs in approx. 2000ms");
}, 2000);

// Canceling setTimeout - Each time you invoke setTimeout, you get an ID for that timeout:
var timerId= setTimeout(function() {
    console.log("this function runs in 30 seconds");
}, 30000);

setTimeout(function() {
    console.log("Canceling the first setTimeout", timerId)
    clearTimeout(timerId);
}, 2000);

// So the first timeout will never run because the 2nd timeout will run first, and clear out the first timeout.


///
// setInterval - a function that continually invokes a callback after every X milliseconds, where X is provided to setInterval
// setInterval usage:
function callback() {
    console.log("callback is called continuously");
}
var repeat = 3000;
setInterval(callback, repeat);
// every 3 seconds console.log will print
// setInterval Example:
var num = 0;
setInterval(function() {
    num++
    console.log("num:", num);
}, 1000);
// num: 1 
// num: 2
// num: 3

// Canceling setInterval
var num = 0;
var intervalId = setInterval(function() {
    num++;
    console.log("num:", num);
    if (num === 3) {
        clearInterval(intervalId); 
    }
}, 1000);



// Practice
/* Your goal is to implement a function called countDown.  
The function will accept 1 parameter which is a time in seconds for the count down.  
The function should console.log the time remaining every second.  
Once the timer gets to 0, the timer should be stopped and you should console.log "Ring Ring Ring!!!".

HINT: You will need to use setInterval() to count down and clearInterval to stop the timer.

Example:

countDown(3) 

Console output

Timer: 2
Timer: 1
Ring Ring Ring!!! 
*/

countDown = () => {
    let seconds = 1000;
    let num = 4;
    const intervalId = setInterval(() => {
        num--;
        console.log("Timer: ", num);
        if (num === 0) {
            clearInterval(intervalId);
            console.log("RING! RING! RINGGG!!!");
        }
    }, seconds);     
}
countDown();