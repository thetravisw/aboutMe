'use strict';

//ask for userName
var userName = prompt('what do I call you');

//Greet user by name
alert('Hey.  You\'re my 3rd favorite ' + userName + " today!");

//console.log
console.log('the user\'s name is ' + userName);

//Ask Q1
var answer = prompt('True/False.  Jakarta is the 4rd most populus city in the world').toLocaleLowerCase;

// Get it right?
if (answer = 'yes' || 'y')
    {
    alert('Hey, youre smarter than I thought');
    console.log('user got question 1 right.  Guessed ' + answer);
    } 
    else
    {
    alert('I had low expectations.  You\'re meeting them');
    console.log('user got question 1 wrong.  Guessed ' + answer);
    }


// next question