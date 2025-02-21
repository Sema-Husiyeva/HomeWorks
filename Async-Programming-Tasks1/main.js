let button = document.querySelector('.btn');
let text = document.querySelector('.text');

button.addEventListener('click', ()=>{
    button.textContent='Adding to Cart...';
    button.disabled = true;
    setTimeout(()=>text.textContent='Added to Cart!',3000);
    setTimeout(()=>text.textContent='',5000);
    setTimeout(()=>{
        button.disabled = false;
        button.textContent='Add to Cart';
    },2000);
})