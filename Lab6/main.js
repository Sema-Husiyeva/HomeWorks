const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const xIcon = document.querySelector('.x-icon');
const bannerBtn = document.querySelector('.banner-menu-btn');
const menuInput = document.querySelector('.burger-menu-search');
const input = document.querySelector('.burger-menu-search input')

burgerIcon.addEventListener('click',()=>{
    burgerMenu.classList.add('active');
})

xIcon.addEventListener('click',()=>{
    burgerMenu.classList.remove('active');
})

bannerBtn.addEventListener('mouseover',()=>{
    bannerBtn.style.backgroundColor='#AFE1AF';
    bannerBtn.style.transition='1s all';
})

menuInput.addEventListener('click',()=>{
    menuInput.style.borderColor='#0096FF';
})

input.addEventListener('focus',()=>{
    input.style.color='#A42A04';
})
