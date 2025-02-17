let digitalClock = document.querySelector('.digital-clock');


function getTime(){
    let clock = new Date();
    let seconds = clock.getSeconds();
    let minutes = clock.getMinutes();
    let hours = clock.getHours();

    const clockStr =`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    digitalClock.innerHTML= clockStr;
    setTimeout(getTime, 1000);
}

getTime();
