class Employee {
    constructor(id,fullName, age, position, experience, skills, date){
        this.id=id;
        this.fullName=fullName;
        this.age=age;
        this.position=position;
        this.experience=experience;
        this.skills=skills;
        this.date=date;
    }
};

let form = document.querySelector('form');
let fullNameAlertText = document.querySelector('.fullName-alert-text');
let ageAlertText = document.querySelector('.age-alert-text');
let positionAlertText = document.querySelector('.position-alert-text');
let experienceAlertText = document.querySelector('.experience-alert-text');
let dateAlertText = document.querySelector('.date-alert-text');
let employees=[];

function createNewEmployee(e){
    e.preventDefault();
    let fullName = document.getElementById('fullName').value;
    let age = Number(document.getElementById('age').value);
    let position = document.getElementById('position').value;
    let experience = Number(document.getElementById('experience').value);
    let select = document.getElementById('skills');
    let skills=select.options[select.selectedIndex].text;
    let date = document.getElementById('date').value;
    let id = employees.length + 1;
    fullNameAlertText.textContent='';
    ageAlertText.textContent='';
    positionAlertText.textContent='';  
    experienceAlertText.textContent='';
    dateAlertText.textContent='';

    if(fullName.length < 3 || fullName.length > 50 || /[^a-zA-ZğüşöçİĞÜŞÖÇ\s]/.test(fullName)){
       fullNameAlertText.textContent='3 simvoldan az olmamalı və yalnız hərflərdən ibarət olmalıdır!';
       return;
    }

    if(age < 18 || age > 65 || age < 0){
        ageAlertText.textContent='18 yaşdan böyük, 65 yaşdan kiçik olmalısınız!';
        return;
     }

    if(position.length < 2 || position.length > 30){
        positionAlertText.textContent='Simvol sayı 2 ilə 30 arası olmalıdır!';
        return;
    }

    if(experience < 0 || experience > age - 18){
        experienceAlertText.textContent='Təcrübənizi 0 dan az qeyd etməməli və yaşınız təcrübənizdən əz az 18 yaş çox olmalıdır!';
        return;
    }

    let selectedDate = new Date(date);
    let today = new Date();
    if (selectedDate >= today ) {
        dateAlertText.textContent = 'Tarix keçmişdə olmalıdır!';
        return;
    }
    if (!date) {
        dateAlertText.textContent = 'Tarixi daxil etməlisiniz!';
        return;
    }
    
    let newEmployee = new Employee(id,fullName,age,position,experience,skills,date);
    employees.push(newEmployee);
    console.log(employees);
    createTableElement();

    document.getElementById('fullName').value = "";
    document.getElementById('age').value = "";
    document.getElementById('position').value = "";
    document.getElementById('experience').value = "";
    document.getElementById('skills').selectedIndex = 0;
    document.getElementById('date').value = "";
}

form.addEventListener('submit',createNewEmployee);

function createTableElement(){
    let tableElements=document.querySelector('.table-elements');
    tableElements.innerHTML=employees.map(employee=>
        `<tr>
         <td>${employee.id}</td>
         <td>${employee.fullName}</td>
         <td>${employee.age}</td>
         <td>${employee.position}</td>
         <td>${employee.experience}</td>
         <td>${employee.skills}</td>
         <td>${employee.date}</td>
         <td>
          <button class="edit-btn" onclick="editElement(${employee.id})">Düzəliş et</button>
          <button class="delete-btn" onclick="deleteElement(${employee.id})">Sil</button>
         </td>
         </tr>`
        
    ).join('');
}

let searchInput = document.getElementById('search-input');
searchInput.addEventListener('input',()=>{
    let searchItem = searchInput.value.toLowerCase();
    let filteredEmployees = employees.filter(employee=>
        employee.fullName.toLowerCase().includes(searchItem)
    );
    let tableElements=document.querySelector('.table-elements');
    tableElements.innerHTML=filteredEmployees.map(emp=>
        `<tr>
         <td>${emp.id}</td>
         <td>${emp.fullName}</td>
         <td>${emp.age}</td>
         <td>${emp.position}</td>
         <td>${emp.experience}</td>
         <td>${emp.skills}</td>
         <td>${emp.date}</td>
         <td>
          <button class="edit-btn" onclick="editElement(${emp.id})">Düzəliş et</button>
          <button class="delete-btn" onclick="deleteElement(${emp.id})">Sil</button>
         </td>
         </tr>`
        
    ).join('');
});


function editElement(id){
  let employee = employees.find(emp => emp.id === id);
  if (employee) {
    document.getElementById('fullName').value = employee.fullName;
    document.getElementById('age').value = employee.age;
    document.getElementById('position').value = employee.position;
    document.getElementById('experience').value = employee.experience;
    document.getElementById('skills').options.text = employee.skills;
    document.getElementById('date').value = employee.date;

    employees = employees.filter(emp => emp.id !== id);
    createTableElement();
  }
}

function deleteElement(id) {
    employees = employees.filter(emp => emp.id !== id);
    createTableElement();
}

