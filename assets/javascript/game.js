// What variables do I need to declare/use?
var wins = 0;
var losses = 0;
var totalScore = 0;
var compTarget = 0;

function displayCount() {
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#score").html(totalScore);
    $("#comp-target").html(compTarget);
}

function incrementScore() {
    totalScore = totalScore + 1;
    displayCount();
}

$("button").click(incrementScore);

displayCount();
Math.floor(Math.random() * 100)
console.log(Math.random()*100)


// create functions for buttons

// onclick button functions 

    // If user presses button 1, it will be 3 points
    // If user presses button 2, it will be 6 points
    // If user presses button 2, it will be 2points
    // If user presses button 2, it will be 7 points

    //Example jquery function:
    //     $("p").click(function(){
    //     alert("The paragraph was clicked.");
    //   });

    // Generate a random number that will be set at beginning and static till end of game
    // (Each button should randomly change its value at beginning of each game/constant throughout)


    // Create a running total that will add each additional button click

    // Create a wins and losses column that will add in continuity

    // Create a function that will clear/reset total score after the game is over

    // Game Over scenario: if the user guesses a number that is over the variable that was randomly set at game start