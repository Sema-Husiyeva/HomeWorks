// task 1

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark-mode');
// })

// task 2

// let plusBtn= document.querySelector('.plus-btn');
// let countText= document.querySelector('.count');
// let minusBtn = document.querySelector('.minus-btn');

// let count = 0;

// plusBtn.addEventListener('click', ()=>{
//     count++;
//     countButtons();
// })

// minusBtn.addEventListener('click',()=>{
//     count--;
//    countButtons();
// })

// function countButtons(){
//     countText.textContent=count;
//     return;
// }


// task 3

// let input = document.querySelector('.password-input');
// let icon = document.querySelector('.input-icon');
// let att= input.getAttribute('type');

// icon.addEventListener('click', ()=>{
//     if (input.type === "password") {
//         input.type = "text";
//       } else {
//         input.type = "password";
//       }
// })


// task 5

// let persons = [
//   {name:'Nigar'},
//   {name:'Leyla'},
//   {name:'Murad'},
//   {name:'Yusif'},
//   {name:'Aysel'}
// ];

// let namesList = document.querySelector('.names-list');
// namesList.innerHTML=persons.map(person=>
//   `<li>${person.name}</li>`
// ).join('');

// let searchInput = document.getElementById('search-input');
// searchInput.addEventListener('input',()=>{
//   let searchItem = searchInput.value.toLowerCase();
//   let filteredPersons = persons.filter(person=>
//       person.name.toLowerCase().includes(searchItem)
//   );
//   namesList.innerHTML=filteredPersons.map(person=>
//       `<li>${person.name}</li>`).join('');
// });


// task 6

// let form = document.querySelector('form');
// let formInput = document.getElementById('form-input');
// let errorMessage = document.querySelector('.error-message');

// form.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   if(formInput.value===''){
//      errorMessage.textContent='Formu doldurun!';
//      formInput.style.borderColor='red';
//   }else{
//     errorMessage.textContent='';
//     formInput.style.borderColor='blue';
//   }
// })


// task 7 

document.addEventListener('keydown',(event)=>{
  if (event.key === "Enter") {
    alert("Enter düyməsi basıldı!");
  } else if (event.key === "Shift") {
    alert("Shift düyməsi basıldı!")
  } else if (event.key === " ") {
    alert("Space düyməsi basıldı!");
  } else if (event.key === "s") {
    alert("S düyməsi basıldı!");
  } 
})