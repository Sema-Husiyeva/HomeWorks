
const firstMenu={
    title:'Trevor Belmont',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt qui, sunt ducimus animi aperiam velit veritatis magni provident rem vero blanditiis voluptatem. Voluptatibus consectetur amet fugit laborum quibusdam soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, aliquam nobis. Non in earum aliquam, doloremque officia maxime dolores explicabo incidunt dolore repudiandae? Hic, fugit illum deleniti quam similique soluta.'
}

const secondMenu={
    title:'Alucard',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt qui, sunt ducimus animi aperiam velit veritatis magni provident rem vero blanditiis voluptatem. Voluptatibus consectetur amet fugit laborum quibusdam soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, aliquam nobis. Non in earum aliquam, doloremque officia maxime dolores explicabo incidunt dolore repudiandae? Hic, fugit illum deleniti quam similique soluta.'
}

const thirdMenu={
    title:'Sypha Belnades',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt qui, sunt ducimus animi aperiam velit veritatis magni provident rem vero blanditiis voluptatem. Voluptatibus consectetur amet fugit laborum quibusdam soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, aliquam nobis. Non in earum aliquam, doloremque officia maxime dolores explicabo incidunt dolore repudiandae? Hic, fugit illum deleniti quam similique soluta.'
}

const container = document.querySelector('.container');

const dropdownMenu = document.createElement('div');
dropdownMenu.setAttribute('class','accordion-dropdown-menu');
container.appendChild(dropdownMenu);

const dropdownMenuHeader = document.createElement('div');
dropdownMenuHeader.setAttribute('class','accordion-dropdown-menu-header');
dropdownMenu.appendChild(dropdownMenuHeader);

const headerTitle = document.createElement('h2');
headerTitle.textContent=firstMenu.title;
headerTitle.setAttribute('class','accordion-dropdown-menu-header-title');

const headerIcon = document.createElement('span');
headerIcon.textContent='arrow_drop_up';
headerIcon.setAttribute('class','material-symbols-outlined');
dropdownMenuHeader.append(headerTitle,headerIcon);

const dropdownMenuDesc = document.createElement('p');
dropdownMenuDesc.textContent=firstMenu.description;
dropdownMenuDesc.setAttribute('class','accordion-dropdown-menu-desc');
dropdownMenu.appendChild(dropdownMenuDesc);


const secondDropdownMenu = document.createElement('div');
secondDropdownMenu.setAttribute('class','accordion-dropdown-menu');
container.appendChild(secondDropdownMenu);

const secondDropdownMenuHeader = document.createElement('div');
secondDropdownMenuHeader.setAttribute('class','accordion-dropdown-menu-header');
secondDropdownMenu.appendChild(secondDropdownMenuHeader);

const secondHeaderTitle = document.createElement('h2');
secondHeaderTitle.textContent=secondMenu.title;
secondHeaderTitle.setAttribute('class','accordion-dropdown-menu-header-title');

const secondHeaderIcon = document.createElement('span');
secondHeaderIcon.textContent='arrow_drop_up';
secondHeaderIcon.setAttribute('class','material-symbols-outlined');
secondDropdownMenuHeader.append(secondHeaderTitle,secondHeaderIcon);

const secondDropdownMenuDesc = document.createElement('p');
secondDropdownMenuDesc.textContent=secondMenu.description;
secondDropdownMenuDesc.setAttribute('class','accordion-dropdown-menu-desc');
secondDropdownMenu.appendChild(secondDropdownMenuDesc);


const thirdDropdownMenu = document.createElement('div');
thirdDropdownMenu.setAttribute('class','accordion-dropdown-menu');
container.appendChild(thirdDropdownMenu);

const thirdDropdownMenuHeader = document.createElement('div');
thirdDropdownMenuHeader.setAttribute('class','accordion-dropdown-menu-header');
thirdDropdownMenu.appendChild(thirdDropdownMenuHeader);

const thirdHeaderTitle = document.createElement('h2');
thirdHeaderTitle.textContent=thirdMenu.title;
thirdHeaderTitle.setAttribute('class','accordion-dropdown-menu-header-title');

const thirdHeaderIcon = document.createElement('span');
thirdHeaderIcon.textContent='arrow_drop_up';
thirdHeaderIcon.setAttribute('class','material-symbols-outlined');
thirdDropdownMenuHeader.append(thirdHeaderTitle,thirdHeaderIcon);

const thirdDropdownMenuDesc = document.createElement('p');
thirdDropdownMenuDesc.textContent=thirdMenu.description;
thirdDropdownMenuDesc.setAttribute('class','accordion-dropdown-menu-desc');
thirdDropdownMenu.appendChild(thirdDropdownMenuDesc);

const headers=[dropdownMenuHeader,secondDropdownMenuHeader,thirdDropdownMenuHeader];
const descriptions=[dropdownMenuDesc,secondDropdownMenuDesc,thirdDropdownMenuDesc];
const icons=[headerIcon,secondHeaderIcon,thirdHeaderIcon];

headers.forEach((item,index)=>{
   item.addEventListener('click', ()=>{
      descriptions.forEach((desc,i)=>{
        if (i==index){
            desc.classList.toggle('active');
        }
      })
      icons.forEach((icons,i)=>{
        if (i==index){
            icons.classList.toggle('toggle-icon');
        }
      })
   })
});

// itemın classlistinə active əlavə edəndə descriptionların yox headerlərin klasına active əlavə edirdi deyə bu yolla alındı