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




//localStorage.setItem("key", "value");
//localStorage.getItem("key");














})