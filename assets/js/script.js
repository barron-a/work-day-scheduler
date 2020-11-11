$(document).ready(function() {
  
   // variables
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
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


    function textAreaColor() {
        $(".time-block").each(function() {

            var currentHour = moment().format("HH");
            var compareHour = $(this).attr("id");

            if (+currentHour < compareHour) {
                $(this).addClass("future");
            }
            else if (+currentHour > compareHour) {
                $(this).addClass("past");
            }
            else {
                $(this).addClass("present");
            };
        });
    };

    textAreaColor();

    $(".btn").on("click", function(event) {
        event.preventDefault();

        var task = $(this).siblings(".description").val();
        var taskTime = $(this).parent().attr("id");

        // Save events to local storage
        localStorage.setItem(taskTime, task);
    });

    function loadStorage() {
        var nineTask = localStorage.getItem("09");
        var tenTask = localStorage.getItem("10");
        var elevenTask = localStorage.getItem("11");
        var twelveTask = localStorage.getItem("12");
        var oneTask = localStorage.getItem("13");
        var twoTask = localStorage.getItem("14");
        var threeTask = localStorage.getItem("15");
        var fourTask = localStorage.getItem("16");
        var fiveTask = localStorage.getItem("17");

        document.getElementById("9").querySelector(".description").textContent = nineTask
        document.getElementById("10").querySelector(".description").textContent = tenTask
        document.getElementById("11").querySelector(".description").textContent = elevenTask
        document.getElementById("12").querySelector(".description").textContent = twelveTask
        document.getElementById("1").querySelector(".description").textContent = oneTask
        document.getElementById("2").querySelector(".description").textContent = twoTask
        document.getElementById("3").querySelector(".description").textContent = threeTask
        document.getElementById("4").querySelector(".description").textContent = fourTask
        document.getElementById("5").querySelector(".description").textContent = fiveTask
    }
    
    loadStorage();
})

