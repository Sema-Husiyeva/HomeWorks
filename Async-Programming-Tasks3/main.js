let red = document.getElementById('red-light');
let yellow = document.getElementById('yellow-light');
let green = document.getElementById('green-light');

function changeLights(){
    setTimeout(() => {
        red.style.opacity = '1';
        yellow.style.opacity = '0.3';
        green.style.opacity = '0.3';
    
        setTimeout(() => {
            red.style.opacity = '0.3';
            yellow.style.opacity = '0.3';
            green.style.opacity = '1';
    
            setTimeout(() => {
                red.style.opacity = '0.3';
                yellow.style.opacity = '1';
                green.style.opacity = '0.3';
    
                setTimeout(() => {
                    red.style.opacity = '1';
                    yellow.style.opacity = '0.3';
                    green.style.opacity = '0.3';
                    setTimeout(changeLights, 0);
                }, 1000);
            }, 3000);
        }, 3000);
    }, 0);
    
}

changeLights();