var DateTime = luxon.DateTime;
var dt = DateTime.now();
var tasks = {
    index: []
};

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

function saveTasks() {
    localStorage.setItem("tasks", tasks);
}

$(".time-block").on("click", "article", function() {
    var text = $(this).text();
    var classList = this.classList.toString();
    var idList = this.id;
    var textInput = $("<textarea>")
        .addClass(classList)
        .val(text);

    this.id = idList.toString();

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    console.log(this.id);
});

$(".time-block").on("blur", "textarea", function() {
    var text = $(this).text();
    var classList = this.classList.toString();
    var idList = this.id.toString();

    taskArticle = $("<article>")
        .addClass(classList)
        .text(text);
    
    this.id = idList;

    $(this).replaceWith(taskArticle);
    console.log(this);
    saveTasks();
});

currentDate()
setColorState();