var DateTime = luxon.DateTime;
var dt = DateTime.now();

//display current date under main title
function currentDate() {
    var fullDate = dt.toLocaleString(DateTime.DATE_HUGE);
    $("#currentDay").text(fullDate);
};

// set background color of article elements
function setColorState() {

    for (var i = 9; i < 18; i++) {
        var timeBlock = document.getElementById(i);

        if (timeBlock.id > dt.hour) {
            timeBlock.setAttribute("class", "description col-10 future");
        } else if (timeBlock.id < dt.hour) {
            timeBlock.setAttribute("class", "description col-10 past");
        } else if (timeBlock.id === dt.hour) {
            timeBlock.setAttribute("class", "description col-10 present");
        };

    }
};

currentDate()
setColorState();