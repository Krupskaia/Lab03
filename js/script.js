/*eslint-env broser*/
//global variables
var score1;
var score2;
var score3;
var total = 0;
var average;

// prompt use for the test scores

score1 = window.prompt("What is the first score?");
total += parseFloat(score1, 10);
score2 = window.prompt("What is the second score?");
total += parseFloat(score2, 10);
score3 = window.prompt("What is the third score?");
total += parseFloat(score3, 10);

// Calculate the average
average = total / 3;

// display the result
document.write("The first score: " + score1 + "<br>");
document.write("The first score: " + score2 + "<br>");
document.write("The first score: " + score3 + "<br>");
document.write("TThe average of the 3 scores: " + parseFloat(average));
