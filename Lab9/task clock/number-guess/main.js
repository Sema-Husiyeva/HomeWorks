let guessInput = document.getElementById('guess-input');
let inputValue= Number(guessInput);
let guessBtn = document.querySelector('.guess-btn');
let counter = document.querySelector('.count-guesses');
let guessedNumbers = document.querySelector('.guessed-numbers');
let chance = document.querySelector('.chance');
let alertText = document.querySelector('.alert-text');
let restart = document.querySelector('.restart-btn');


let randomGuess = Math.floor(Math.random() * 100 + 1);
console.log(randomGuess);
let numbers = [];
let chanceCounter = 3;
chance.textContent=chanceCounter;

guessBtn.addEventListener('click', ()=>{
    let guessValue = Number(guessInput.value);
    
    if(guessValue > 100 || guessValue < 1){
        alert('Please enter a number between 1 and 100');
        guessInput.value='';
        return;
    }

    numbers.push(guessValue);
    counter.textContent=numbers.length;
    guessedNumbers.textContent=numbers.join(', ');

    if (guessValue < randomGuess) {
        alertText.style.display='block';
        alertText.textContent = 'You need to guess a greater number';
    } else if (guessValue > randomGuess) {
        alertText.style.display='block';
        alertText.textContent = 'You need to guess a lower number';
    } else {
        alertText.style.display='block';
        alertText.textContent = 'Congratulations! You Win!';
        alertText.style.color='blue';
        guessBtn.disabled = true;
        guessInput.disabled = true;
        restart.style.display='block';
    }

    countChance();
    if (chanceCounter === 0) {
        alertText.style.display='block';
        alertText.textContent = 'Game Over! The number was ' + randomGuess;
        guessBtn.disabled = true;
        guessInput.disabled = true;
        restart.style.display='block';
    }

    guessInput.value='';

})

function countChance(){
    chanceCounter--;
    chance.textContent=chanceCounter;
}

restart.addEventListener('click',()=>{
    location.reload();
})



