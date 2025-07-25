"use strict";

const containerElement = document.querySelector('.container1');
const playAgainbuttonElement = document.querySelector('.btn_again');
const checkTheGuessElement = document.querySelector('.btn_check');
const hideTheNumberElement = document.querySelector('.hide');
const messageElement = document.querySelector('.message');
const inputNumElement = document.querySelector('.input_number');
const highScoreElement = document.querySelector('.high_score');
const scoreElement = document.querySelector('.score');

//getting the random number for 1 to 20 
let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highScore = 0;

console.log(secretNumber);

//event to check the hide num
checkTheGuessElement.addEventListener('click', () => {
    const guess = Number(inputNumElement.value);
    console.log(typeof(guess));


//check the empty input
if (guess){
    //if the number does not match the secret number
    if (guess != secretNumber){

        if (score > 1){
            score--;
            scoreElement.textContent = score;

            messageElement.textContent = guess > secretNumber ? "Too High" : "Too Low";
            scoreElement.textContent = score
        }
        else{
            //messageElement.textContent = "You loss";
            //line below does the same thing, because of the function created
            displayMessage("You loss");
            containerElement.style.backgroundColor = "#fffff";
            scoreElement.textContent = 0;
        }
    }
    else{
        hideTheNumberElement.textContent = secretNumber;
        hideTheNumberElement.style.width = "50%";
        hideTheNumberElement.style.transition = "all 0.5s ease-in";
        containerElement.style.backgroundColor = "#000000";
        //messageElement.textContent = "Congrats you've won!";
        //line below does the same thing, because of the function created
        displayMessage("Congrats you've won!");

    }
}
else{
    //messageElement.textContent = "Enter a number dude!";
    //line below does the same thing, because of the function created
    displayMessage("Enter a number dude!");
}

})

const displayMessage = function(message){
    messageElement.textContent = message;
}

//reset the game
playAgainbuttonElement.addEventListener('click', ()=>{

    score = 20;
    secretNumber = Math.floor(Math.random()* 20)+1;
    scoreElement.textContent = score;
    hideTheNumberElement.textContent = "?";
    hideTheNumberElement.style.width = "25%";
    hideTheNumberElement.style.transition = "all 0.5s ease-in";
    inputNumElement.value = " ";
    containerElement.style.backgroundColor = "#ffffff";
    displayMessage("Enter a guess!")
})