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
    correctAnswers++}  else
    {
    alert('I had low expectations.  You\'re meeting them');
    console.log('user got question ' + qnum + '1 wrong.  Guessed ' + answer);
    }

// question 2
qnum ++;

answer = prompt('Yes/No:  there isn\'t be a single question about me in this "about me".').toLowerCase();

// Get it right?
if (answer === 'no' || answer === 'n')
    {
    alert('It\'s like you\'ve got ESPN or something');
    console.log('user got question ' + qnum + ' right.  Guessed ' + answer);
    correctAnswers++;
    }  else
    {
    alert('like I could go that long without talking about myself');
    console.log('user got question ' + qnum + ' wrong.  Guessed ' + answer);
    }

// Question 3
qnum ++;

answer = prompt('Yes/No:  My therapist says I always make jokes beacase I have a pathological need for external validation').toLowerCase();

if (answer === 'no'  || answer === 'n'){
        alert('Of course, if I could AFFORD a therapist, that probably is what he\'d say');
        console.log('not sure how, but he got ' + qnum + ' right.');
        correctAnswers++;
    } else{
        alert('Nope.  He mostly just says I\'m the reason he drinks');
        console.log('got question ' + qnum + 'wrong.  Typical');
    }
    
//Question 4
qnum ++

answer = prompt('Yes/No:  Once upon a time, I sunk a kayak').toLowerCase();

if (answer === 'no' || answer === 'n'){
    alert('It wasn\'t for lack of trying.  Like the Titanic, they\'re unsinkable');
    console.log('question ' +qnum+ ' was too easy.');
    correctAnswers++;
}else{
    alert('How is that even possible?  They float when upside down and full of water!');
    console.log('He even missed the freebie.  Got '+qnum+' wrong.');
}

// Question 5
qnum++
answer = prompt('Yes/No:  Kim is my favorite Kardashian').toLowerCase();

if (answer === 'no' || answer === 'n'){
    alert('She\'s the only one whose name I know, and therefore my least favorite.');
    console.log('Let\'s pretend ' +qnum+ ' doesn\'t exist.  Nailed it, but I\'m embarassed that I asked.');
    correctAnswers++;
}else{
    alert('Gross.');
    console.log(qnum+' is wrong.  Didn\'t one of them boink Lamar Odom?  I\'ll say its that one.');
}

if (correctAnswers === 5){
    alert('you got a perfect score.  Of course, that\'s easy to do on your second time through.')
}else{
    alert('you got ' + correctAnswers + ' out of '+qnum+' correct.  That\'s ' + correctAnswers*20+ '%, a failing grade here at codefellows!')
}