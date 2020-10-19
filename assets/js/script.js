// variables
var items = JSON.parse(localStorage.getItem("items")) || [];
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


function textAreaColor() {
    $(".time-block").each(function() {

        var currentHour = moment().format("HH");
        var compareHour = $(this).attr("id");

        if (currentHour < compareHour) {
            $(".time-block").addClass("future");
        }
        else if (currentHour > compareHour) {
            $(".time-block").addClass("past");
        }
        else {
            $(".time-block").addClass("present");
        };
    });


};

$(".btn").on("click", function(event) {
    event.preventDefault();

    var item = $("#item").val().trim();

    // Add the new event to events array
    items.push(item);

    // Save events to local storage
    localStorage.setItem('items', JSON.stringify(items));
  });

  textAreaColor();