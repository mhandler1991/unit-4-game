$(document).ready(function () {

// Variables
var num = 0;
var val = "";
// Max User Input (win/Loss)
var max = 50;

// Starting Number Function
function getRandomInt() {
    // Get Random Starting Num
    num = Math.floor(Math.random() * Math.floor(10));
    // Console Log
    console.log(num);
    // print to page
    $("#result").text(num);
  }

//   Reset Function
function reset(){
    // Alert game has been reset
    alert("Game has been Restarted");
    // Print 0 to page
    $("#result").text("0")
    // Get Random Integer
    getRandomInt();
    // print to page
    $('#result').text(num);
}

// Game Logic
function game(){
    // Get value of Crystal
    val = $(this).attr("value");
    // Log the Value 
    console.log(val);
    // parse into int
    var int = parseInt(val);
    // Add num + new int
    num = num + int;
    // Print to Page
    $("#result").text(num);
    // Did it go over?
    if(num === max){
        // Print you Lost
        alert("You Win");
        // Reset Game
        reset();
    }
    else if(num>max){
        // Print you went over
        alert("You Loose");
        // Reset Game
        reset();
    }
    // Do Nothing
    else{}
}

// Choose Random Starting Value
getRandomInt();
// Log Int
console.log(num);

// On User Crystal Click
$(".crystal").on("click", game);

})