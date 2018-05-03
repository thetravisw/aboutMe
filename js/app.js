'use strict';

//Greet User
var userName = prompt('what do I call you');
alert("Hey.  You're my 3rd favorite " + userName + " today!");
console.log("the user's name is " + userName);

//Create Arrray of Questions and Answers
//Format is [Question, Correct Answer, Shorthand Correct answer, Right Reply Response, Wrong Reply Response]
function travisGame() {
    do {


        answer = prompt(gameArray[i][0]).toLowerCase();
        var j = i + 1;
        //  For some reason putting i+1 in the console log below caused problems.  This works fine though.  No idea why.
        console.log("Question " + j + " was answered '" + answer + "'");

        if ((answer === "yes" || answer === "y" || answer === "no" || answer === "n") && i !== 1) {
            acceptable = true;
            console.log("Acceptable answer for question " + j);
        }
        else if (i === 1 && (answer === "true" || answer === 'false' || answer === 't' || answer === 'f')) {
            acceptable = true;
            console.log("Acceptable answer for question 2");
        }
        else {
            alert("I will MAKE you take this goofy little game seriously.  Try entering a valid answer this time.");
        }
    }
    while (acceptable === false);

    //check to see if the answer was correct
    if (answer === gameArray[i][1] || answer === gameArray[i][2]) {
        correctAnswers++;
        alert(gameArray[i][3]);
        console.log('Question ' + j + " correct.  Answered " + answer);
    }
    else {
        alert(gameArray[i][4]);
        console.log('Question ' + j + " incorrect.  Answered " + answer);
    }

    //set acceptable to false so that the next time through the do loop it will begin with the correct value
    acceptable = false;
}
var gameArray = [
    ["Yes/No:  Jakarta is the 4th most populus city in the world", "yes", "y", "Nailed it", "I had low standards.  You're meeting them."],
    ["True/False:  I didn't put a single question about me in this \"about me\"", "false", "f", "It's like you have ESPN or something", "I like to talk about myself too much for that!"],
    ["Yes/No:  Once upon a time, I accidentally sunk a kayak", "No", 'n', "It wasn't for lack of trying.  Those things are like the Titanic.  Unsinkable", "How is that even possible?  They float when upside-down and full of water!"],
    ["Yes/No:  Kim is my favorite Kardashian", "No", 'n', "She's the only one I can name.  Therefore she is my LEAST favorite Kardashian", "Gross."],
    ["Yes/No:  I am an avid skiier", 'Yes', 'y', 'Every weekend, all winter long', "I can see why you'd be confused.  It's the only cool thing about me"]];
var answer = "text";
var i = 0;
var acceptable = false;
var correctAnswers = 0;

//Iterate through the guessing game part of the array using a for loop
for (i = 0; i < gameArray.length; i++) {
    travisGame()
    //A do/while loop that can only be escaped acceptable is true.
    //if then statements inside the loop evaluate the user's answer to determine if it's a valid response to the question
    //if it is, acceptable is set to true.  Otherwise, it's false and loops back to the prompt.
}



var bonChance = Math.floor(Math.random() * 100 + 1);
console.log("Random Number = " + bonChance);

var guessNum = 2;
function question6 ()
{
    answer = prompt("You have " + i + " guesses to psychically pick the magic number.  (Hint, it's an integer between 1 and 100)  (Second hint:  Use the Force)")
    guessNum = 5 - i;
    console.log("guess " + guessNum + "was " + answer + '.');
    if (parseInt(answer) === bonChance) {
        correctAnswers++;
        i = -5;
        alert("The Force is strong with this one.");
        console.log("^^^ evaluated false");
    }
    else {
        console.log('^^^ evauated true');
        if (parseInt(answer) > bonChance) {
            alert('I pity the fool who guesses too high');
        }
        else {
            alert("You ain't Harrison Ford!  Why you going so-low");
        }
    }
}
for (i = 4; i > 0; i--) {
 question6()   
}
if (i !== -5) {
    alert('the correct answer was ' + bonChance);
}

var possibilities = ['new york', 'hong kong', 'antwerp', 'ellensburg'];
var gotOne = 0;

//two for loops,  The outer to track guess numbers.  The inner to compare inputs against the possibilities array.

function question7() {

    answer = prompt("Other than Seattle, guess a city where I've lived for 3 or more years.  You have " + i + ' guesses left').toLowerCase();

    if (possibilities.includes(answer)===true) {
        correctAnswers++;
        alert("Kudos!  I have indeed lived in " + answer + " for at least 3 years.");
        gotOne = 1;
        return 
    }  
}
for (i = 6; i > 0; i--) {
question7()
}
if (gotOne === 0) {
    alert("It must suck to be this bad at guessing games!");
} 
//Grade it. 
var theScore = Math.floor(correctAnswers * 100 / 7);
if (theScore >= 90) {
    alert('you got ' + correctAnswers + ' out of 7.  ' + theScore + '%.  A passing score.  Of course, that\'s easier to do on your second time through.');
}
else {
    alert('you got ' + correctAnswers + ' out of 7 correct.  That\'s ' + theScore + '%; which is a failing grade here at Codefellows!');
}

