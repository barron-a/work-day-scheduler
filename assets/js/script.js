// variables
var currentDate = moment().format("dddd MMMM Do");
var nineAm = moment().hour(9).format("h a");
var tenAm = moment().hour(10).format("h a");
var elevenAm = moment().hour(11).format("h a");
var twelvePm = moment().hour(12).format("h a");
var onePm = moment().hour(13).format("h a");
var twoPm = moment().hour(14).format("h a");
var threePm = moment().hour(15).format("h a");
var fourPm = moment().hour(16).format("h a");
var fivePm = moment().hour(17).format("h a");

// display current date
document.getElementById("currentDay").innerHTML = currentDate;

// display times for rows
document.getElementById("nine-am").innerHTML = nineAm;
document.getElementById("ten-am").innerHTML = tenAm;
document.getElementById("eleven-am").innerHTML = elevenAm;
document.getElementById("twelve-pm").innerHTML = twelvePm;
document.getElementById("one-pm").innerHTML = onePm;
document.getElementById("two-pm").innerHTML = twoPm;
document.getElementById("three-pm").innerHTML = threePm;
document.getElementById("four-pm").innerHTML = fourPm;
document.getElementById("five-pm").innerHTML = fivePm;

