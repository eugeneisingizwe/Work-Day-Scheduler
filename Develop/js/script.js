
//Display current day and date 
var currentDay = moment().format("dddd, MMMM, Do");
$('#currentDay').text(currentDay);



$(document).ready(function(){

    //adding an event lister to the save button 
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var text = $(this).siblings("description");

        //saving the text for the event in the logocal starage 
        localStorage.setItem(time, text);
    })

    function timeTracker(){
        //number of hours
        var currrentTime = moment().hours();

        //loop through the time blocks 
        $(".time-block").each(function(){
           var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //Each timeblock is color coded to indicate wheather it is in the past, present, or future 

            if (currrentTime > blockTime){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } 
            else if (currentDay === blockTime){
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

   //get items from the local storage
   $("#9am .description").val(localStorage.getItem("9am"));
   $("#10am .description").val(localStorage.getItem("10am"));
   $("#11am .description").val(localStorage.getItem("11am"));
   $("#12pm .description").val(localStorage.getItem("12pm"));
   $("#1pm .description").val(localStorage.getItem("1pm"));
   $("#2pm .description").val(localStorage.getItem("2pm"));
   $("#3pm .description").val(localStorage.getItem("3pm"));
   $("#4pm .description").val(localStorage.getItem("4pm"));
   $("#5pm .description").val(localStorage.getItem("5pm"));

   
   timeTracker();
});

