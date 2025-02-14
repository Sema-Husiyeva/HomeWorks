let inputs = document.querySelectorAll('input');
inputs.forEach(input=>{
    input.addEventListener('focus',()=>{
        input.style.borderColor='#854DFF'
    })
})

let dayInput = document.getElementById('day');
let mounthInput = document.getElementById('month');
let yearInput = document.getElementById('year');
let textYears = document.querySelector('.text-years');
let textMonths = document.querySelector('.text-months');
let textDays = document.querySelector('.text-days');
let dayError = document.querySelector('.day-error-text');
let monthError = document.querySelector('.month-error-text');
let yearError = document.querySelector('.year-error-text');
let resultBtn = document.querySelector('.result-btn');


function getAge(){
    const date = new Date();
    let getYear = date.getFullYear();
    let getMonth = date.getMonth() + 1;
    let getDay = date.getDate();
    let birthDate = new Date(yearInput.value, mounthInput.value, dayInput.value);
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();

    let resultYear = getYear - birthYear;
    let resultMonth = getMonth - birthMonth;
    let resultDay = getDay - birthDay;

    if (resultDay < 0) {
        resultMonth--;
        let lastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        resultDay += lastMonth;
    }

    if (resultMonth < 0) {
        resultYear--;
        resultMonth += 12;
    }

    textYears.textContent=resultYear;
    textMonths.textContent=resultMonth;
    textDays.textContent=resultDay;

    dayError.textContent='';
    monthError.textContent='';
    yearError.textContent='';

    if (dayInput.value < 0 || dayInput.value > 31 || dayInput.value==''){
        dayInput.style.borderColor='red';
        dayError.textContent='Must be a valid day';
        textDays.textContent='--';
    }
    if (mounthInput.value < 0 || mounthInput.value > 12 || mounthInput.value==''){
        mounthInput.style.borderColor='red';
        monthError.textContent='Must be a valid month';
        textMonths.textContent='--';
    }
    if (yearInput.value < 0 || yearInput.value > getYear || yearInput.value==''){
        yearInput.style.borderColor='red';
        yearError.textContent='Must be a valid year';
        textYears.textContent='--';
    }

}

resultBtn.addEventListener('click',getAge);

let respBtn = document.querySelector('.resp');
respBtn.addEventListener('click', getAge);