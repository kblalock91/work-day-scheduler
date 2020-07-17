var currentDate = moment().format("dddd LL");

$("#currentDay").text(currentDate);

function createTimeblock() {
    // need time
    var hour = $("<div>").addClass("hour")
    // need description box
    var description = $("<div>").addClass("description")
    // need save button
    var saveBTN = $("<div>").addClass("saveBTN")

    var row = $("<div>").addClass("row")
}