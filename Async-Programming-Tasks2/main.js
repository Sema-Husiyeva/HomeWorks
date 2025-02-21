let startButton = document.querySelector('.start-btn');
let timer = document.querySelector('.timer');
let resetButton = document.querySelector('.reset-btn');

let interval;

function startTimer(){
    let fullTime=10;
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        timer.textContent = fullTime;
        if (fullTime <= 3) {
          timer.style.color = 'red';
        } else{
            timer.style.color='black';
        }

        if (fullTime === 0){
            timer.textContent="Time's up!";
            clearInterval(interval);
        } else{
            fullTime--;
        }
      }, 1000);
}

startButton.addEventListener('click', startTimer);
