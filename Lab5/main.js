
const accordionMenus=[
    {
        title:'Trevor Belmont',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt qui, sunt ducimus animi aperiam velit veritatis magni provident rem vero blanditiis voluptatem. Voluptatibus consectetur amet fugit laborum quibusdam soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, aliquam nobis. Non in earum aliquam, doloremque officia maxime dolores explicabo incidunt dolore repudiandae? Hic, fugit illum deleniti quam similique soluta.'
    },
    {
        title:'Alucard',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt qui, sunt ducimus animi aperiam velit veritatis magni provident rem vero blanditiis voluptatem. Voluptatibus consectetur amet fugit laborum quibusdam soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, aliquam nobis. Non in earum aliquam, doloremque officia maxime dolores explicabo incidunt dolore repudiandae? Hic, fugit illum deleniti quam similique soluta.'
    },
    {
        title:'Sypha Belnades',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt qui, sunt ducimus animi aperiam velit veritatis magni provident rem vero blanditiis voluptatem. Voluptatibus consectetur amet fugit laborum quibusdam soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, aliquam nobis. Non in earum aliquam, doloremque officia maxime dolores explicabo incidunt dolore repudiandae? Hic, fugit illum deleniti quam similique soluta.'
    }
];


const container = document.querySelector('.container');

container.innerHTML=accordionMenus.map(menu=>
    `<div class="accordion-dropdown-menu">
            <div class="accordion-dropdown-menu-header">
                <h2 class="accordion-dropdown-menu-header-title">${menu.title}</h2>
                <span class="material-symbols-outlined">arrow_drop_up</span>
            </div>
            <p class="accordion-dropdown-menu-desc">${menu.description}</p>
    </div>`
).join('');


let headers=document.querySelectorAll('.accordion-dropdown-menu-header');
let descriptions=document.querySelectorAll('.accordion-dropdown-menu-desc');
let upIcons=document.querySelectorAll('.material-symbols-outlined');

headers.forEach((header,index)=>{
    header.addEventListener('click',()=>{
        descriptions.forEach((desc,i) => {
            if(i==index){
                desc.classList.toggle('active');
            }
        });
        upIcons.forEach((icon,i)=>{
            if(i==index){
                icon.classList.toggle('toggle-icon');
            }
        })
    });
});


// headerin classlistinə active əlavə edəndə descriptionların yox headerlərin klasına active əlavə edirdi deyə bu yolla alındı