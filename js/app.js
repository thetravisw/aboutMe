'use strict';

//ask for userName
var userName = prompt('what do I call you');

//Greet user by name
alert('Hey.  You\'re my 3rd favorite ' + userName + " today!");

//console.log
console.log('the user\'s name is ' + userName);

var qnum = 1
var correctAnswers = 0
//Ask Q1
var answer = prompt('Yes/No:  Jakarta is the 4rd most populus city in the world').toLowerCase();

// Get it right?
if (answer === 'yes' || answer === 'y')
    {
    alert('Hey, you\'re smarter than I thought');
    console.log('user got question ' + qnum + ' right.  Guessed ' + answer);
    correctAnswers++}  
    else if (answer === 'no' || answer === 'n')
    {
    alert('I had low expectations.  You\'re meeting them');
    console.log('user got question ' + qnum + '1 wrong.  Guessed ' + answer);
    }
    else 
    {alert('It was a freaking yes or no question.  Means your answer should be either YES OR NO');
    console.log('user got question ' + qnum + '1 wrong.  Guessed ' + answer);}

// question 2
qnum ++;

answer = prompt('True/False:  there isn\'t a single question about me in this "about me".').toLowerCase();

// Get it right?
if (answer === 'false' || answer === 'f')
    {
    alert('It\'s like you\'ve got ESPN or something');
    console.log('user got question ' + qnum + ' right.  Guessed ' + answer);
    correctAnswers++;
    }  
    else if (answer === 'true' || answer === "t")
    {
    alert('I like that you think I can go that long without talking about myself');
    console.log('user got question ' + qnum + ' wrong.  Guessed ' + answer);
    }
    else
    {alert('I didn\'t think switching to a "True/False" format made this a trick question.  Perhaps I overestimated you.')
    console.log('Might wanna take the computer away from this one.  Answered a true false question with "' +answer+'."');
    }

// Question 3
qnum ++;

answer = prompt('Yes/No:  My therapist says I always make jokes beacase I have a pathological need for external validation').toLowerCase();

if (answer === 'no'  || answer === 'n'){
        alert('Of course, if I could AFFORD a therapist, that probably is what he\'d say');
        console.log('not sure how, but he got ' + qnum + ' right.');
        correctAnswers++;
    } 
    else if (answer === 'yes' || answer === 'y')
    {
        alert('Nope.  But if I HAD one, that\'s probably what he\'d say');
        console.log('got question ' + qnum + 'wrong.  Typical');
    }
    else 
    {alert(answer + ".  Really?  "+userName+" perhaps I can make an appointment for you?")
    console.log(qnum+' is wrong.  The answer isn\'t '+answer);
    }
    
//Question 4
qnum ++

answer = prompt('Yes/No:  Once upon a time, I sunk a kayak').toLowerCase();

if (answer === 'no' || answer === 'n'){
    alert('It wasn\'t for lack of trying.  Like the Titanic, they\'re unsinkable');
    console.log('question ' +qnum+ ' was too easy.');
    correctAnswers++;
}
else if (answer === 'yes' === answer === 'y')
{
    alert('How is that even possible?  They float when upside down and full of water!');
    console.log('He even missed the freebie.  Got '+qnum+' wrong.');
}
else{
    alert('Truely you are the master of the non-sequitor');
    console.log(qnum+" "+ answer); 
    // honestly I'm bored with thinking up amusing console log replies for people who can't work out how yes/no works.
}
// Question 5
qnum++
answer = prompt('Yes/No:  Kim is my favorite Kardashian').toLowerCase();

if (answer === 'no' || answer === 'n')
    {
    alert('Correct.  She\'s the only one whose name I know, and therefore my least favorite Kardashian.');
    console.log('Let\'s pretend ' +qnum+ ' doesn\'t exist.  Nailed it, but I\'m embarassed that I asked.');
    correctAnswers++;}
else
{
    alert('Gross.');
    console.log(qnum+' is wrong.  Didn\'t one of them boink Lamar Odom?  I\'ll say its that one.');
}

//  Grade it. 
var theScore = correctAnswers/qnum
if (theScore >= 0.9 ){
    alert('you got '+ correctAnswers + ' out of '+qnum+ 'a passing score.  Of course, that\'s easy to do on your second time through.')
}
else
{
    alert('you got ' + correctAnswers + ' out of '+qnum+' correct.  That\'s ' + 100*theScore + '%, a failing grade here at codefellows!')
}