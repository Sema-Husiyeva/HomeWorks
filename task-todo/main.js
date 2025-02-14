let date = document.querySelector(".header-date");
let getDate = new Date().toJSON().slice(0, 10).replace(/-/g, ".");
date.textContent = getDate;

let todoLists = document.querySelector(".todo-lists");
let inputValue = document.getElementById("task-input");

let plusIcon = document.querySelector(".input-section-plus-icon");

let lists = [];

function createElement() {
  todoLists.innerHTML = lists.map((list,id) =>
      `<li class="todo-lists-item">${list}
        <div class="dots" data-id="${id}">
                <img  src="images/dots.svg" alt="dots">
        </div>
        <button class="delete-btn" data-id="${id}">Delete</button>
        </li>
        `
  ).join('');
  removeItem();
}

let count=0;

plusIcon.addEventListener("click", () => {
  if(inputValue.value !==''){
    lists.push(inputValue.value);
    count++;
  }
  inputValue.value = "";
  createElement();
  counterElement();
});


function removeItem() {
    let dots = document.querySelectorAll(".dots");
    dots.forEach(dot=>{
      dot.addEventListener('click',()=>{
        let id = dot.dataset.id;
        let deleteBtn = document.querySelector(`.delete-btn[data-id="${id}"]`);
        deleteBtn.classList.toggle("active");
      })
    })
    
    let deleteBtns= document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn=>{
      btn.addEventListener('click',()=>{
        let id = btn.dataset.id;
        lists.splice(id, 1);
        createElement();
        count--;
        counterElement();
      });
    });
}

inputValue.addEventListener('keypress',(e)=>{
    if (e.key === 'Enter'){
        plusIcon.click();
    }
})


let counter= document.querySelector('.counter');
function counterElement(){
   counter.textContent=count;
}