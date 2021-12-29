// add document.ready
$(document).ready(function() {

// input the date at the top of the page
$("#currentDay").text(moment().format('LL'))

//set hour rows into past present future
var setColor = function() {

    var actualTime = moment().hours();

    $(".time-block").each(function() {

        var rowTime = parseInt ($(this).attr("id").split("r")[1]);
        
        if (rowTime < actualTime) {
            $(this).addClass("past")
        } else if (rowTime === actualTime) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        }
    })

}
setColor();

//click listener for save button
$(".saveBtn").click(function() {

    //local storage set item
    var noteKey = $(this).parent().attr("id");
    
    var noteValue = $(this).siblings(".description").val();

    localStorage.setItem(noteKey, noteValue)
})



// local storage get item

$('#hour8 .description').val(localStorage.getItem('hour8'))
$('#hour9 .description').val(localStorage.getItem('hour9'))
$('#hour10 .description').val(localStorage.getItem('hour10'))
$('#hour11 .description').val(localStorage.getItem('hour11'))
$('#hour12 .description').val(localStorage.getItem('hour12'))
$('#hour13 .description').val(localStorage.getItem('hour13'))
$('#hour14 .description').val(localStorage.getItem('hour14'))
$('#hour15 .description').val(localStorage.getItem('hour15'))
$('#hour16 .description').val(localStorage.getItem('hour16'))
$('#hour17 .description').val(localStorage.getItem('hour17'))
$('#hour18 .description').val(localStorage.getItem('hour18'))
$('#hour19 .description').val(localStorage.getItem('hour19'))





//localStorage.setItem("key", "value");
//localStorage.getItem("key");














})