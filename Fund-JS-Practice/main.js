// Tapşırıq 1.1: Tip Çevirmələri
let numString='42';
Number(numString);
console.log(numString);

let boolString = "true";
Boolean(boolString);
console.log(boolString);

let mixedArray = ["123", "456", "789"];
let numbersArray=mixedArray.map(Number);
console.log(numbersArray);

let nullValue = null;
let booleanValue=Boolean(nullValue);
console.log(booleanValue); //false,0,""-boş string,null,undefined ve NaN falsy dəyər qaytarır.


// Tapşırıq 1.2: Tip Yoxlaması
let sample1 = NaN;
console.log(typeof sample1);

let sample2 = [1, 2, 3];
console.log(sample2 instanceof Array);
console.log(Array.isArray(sample2));

let sample3 = "";
console.log(typeof sample3);

let sample4 = 0;
console.log(typeof sample4);

let sample5 = {name: "John"};
console.log(sample5 instanceof Object);


// 2. String Metodları
// Tapşırıq 2.1: Mətn Manipulyasiyası
let text = "   JavaScript is awesome   ";
let trimedStr=text.trim();
console.log(trimedStr);
let upperStr=trimedStr.toUpperCase();
console.log(upperStr);
let replaceStr=upperStr.replace('IS','WAS');
console.log(replaceStr);
let splitedStr=replaceStr.split(' ');
console.log(splitedStr);
console.log(text.length);


// Tapşırıq 2.2: Şablon Yaratma
let user = {
    firstName: "Ali",
    lastName: "Məmmədov",
    age: 25,
    email: "ali@example.com"
};

let userText=`Hörmətli ${user.firstName} ${user.lastName}, sizin ${user.age} yaşınız var.`;
console.log(userText);
//
console.table(user);
//
let splitEmail=user.email.split('@');
console.log(`Username: ${splitEmail[0]}; Domain Name: ${splitEmail[1]}`);


// 3. Array Metodları
// Tapşırıq 3.1: Array Əməliyyatları
function checkElements(numbers=[],fruits=[]){
    let filteredNumbers=numbers.filter(i=>i%2==0);
    let cubeOfNumbers=numbers.map(i=>i**3);
    let sum=numbers.reduce((acc,curr)=>acc+curr,0);

    let sortedFruits=fruits.sort();
    let removeLastElement=fruits.pop();
    let addLastElement=fruits.push('ananas');
    let removeFirstElement=fruits.shift();
    let addFirstElement=fruits.unshift('alça');
    return fruits;
}

console.log(checkElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],["alma", "armud", "banan", "gilas", "üzüm"]));

//Tapşırıq 3.2: Array-lərlə Mürəkkəb Əməliyyatlar
let students = [
    {id: 1, name: "Aygün", grades: [85, 90, 92]},
    {id: 2, name: "Elçin", grades: [75, 85, 88]},
    {id: 3, name: "Nigar", grades: [95, 88, 91]},
    {id: 4, name: "Orxan", grades: [70, 65, 72]}
];

function calculateGrades(){
    let avarage = students.map(i=>{
        let sum=i.grades.reduce((acc,curr)=>acc+curr,0);
        let getAvarage=sum/i.grades.length;
        return {
            name:i.name,
            avarage:getAvarage.toFixed()
        };
    })
    let filterGrades=avarage.filter(i=>i>85);
    let sortedGrades=avarage.sort();
    let sumGrades=avarage.reduce((acc,curr)=>acc+curr,0);
    let totalAvarage=sumGrades/avarage.length;
    return avarage;
}

console.log(calculateGrades());


// 4. Funksiyalar
// Tapşırıq 4.1: Funksiya Növləri
// 1. Adi funksiya - faktorial hesablayan
function getFactorial(n) {
    let result=1;
    for (let i=1; i<=n; i++){
        result*=i;
    }
    return result;
}

console.log(getFactorial(5));

// 2. Arrow function - ədədin kvadratını qaytaran
const square= (num)=>num**2;
console.log(square(6));

// 3. Higher-order function 
function filterFn(arr){
    return arr.filter(i=>i%3==0);
};

function filterArray(arr, filterFn){
    return filterFn(arr);
}

console.log(filterArray([12,15,6,8,20,24],filterFn));


// 4. Obyektlər
// Tapşırıq 4.1: Obyekt Yaratma və Metodlar
let bankAccount = {
    accountNumber: '4189538800000000',
    user: 'Sema Husiyeva',
    balance: 100000, //AMiN
    operations:['1000 AZN hesabınıza köçdü','400 AZN hesabınızdan silindi'],

    addMoney(money){
        return bankAccount.balance+=money;
    },
    withdraw(money){
        return bankAccount.balance-=money;
    },
    checkBalance(){
        return `Sizin balansınız ${bankAccount.balance} AZN təşkil edir.`
    },
    operationHistory(){
        return bankAccount.operations;
    },
};

console.log(bankAccount.addMoney(100));


// 5. Şərtlər və Dövrlər
// Tapşırıq 5.1: Şərtli Operatorlar
function checkNumber(number){
    if (number%2==0){
        return `${number} cüt ədəddir`;
    }
    else {
        return `${number} tək ədəddir`;
    }
}
console.log(checkNumber(41));
//
function getMaxNumber(a,b,c){
    if (a > b && c){
        return a;
    }
    else if (b > a && c){
        return b;
    }
    else {
        return c;
    }
}

console.log(getMaxNumber(5,16,11));
//
function findSeason(season){
    if (season.includes('dekabr'&&'yanvar'&&'fevral')){
        return 'qış';
    }
    else if (season.includes('mart'&&'aprel'&&'may')){
        return 'yaz';
    }
    else if (season.includes('iyun'&&'iyul'&&'avqust')){
        return 'yay';
    }
    else {
        return 'payız';
    }
}

console.log(findSeason('may'));
//
function calculateNumbers(a,b) {
    switch ("/") {
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "+":
            return a + b;
        case "-":
            return a - b;
        default:
            return 'Operator daxil edin';
    }
};

console.log(calculateNumbers(56,7));

// Tapşırıq 5.2: Dövrlər
function getFibonacciSequence(number){
    let fib = [0, 1];
    for (i = 2; i<number; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
};

console.log(getFibonacciSequence(20));

//

function getReverseArr(arr) {
    let result=[];
    let i=arr.length-1;
    while(i>=0){
        result.push(arr[i]);
        i--;
    }
    return result;
}

console.log(getReverseArr(['s','a','l','a','m']));

//

function checkPrimeNumbers(num){
    if (num <= 1){
        return false;
    }    
    for (let i = 2; i<num; i++) {
        if (num % i === 0){
            return false
        };
    }
    return true;
}     

console.log(checkPrimeNumbers(61));

//

function printPattern(row){
    for (let i = 1; i <= row; i++) {
        let star = "* ";
        console.log(star.repeat(i));
    }
}

console.log(printPattern(5));


// 6. DOM Manipulyasiyası
const list = document.getElementById('list');
list.innerHTML='<li>Mövzu 1</li> <li>Mövzu 2</li> <li>Mövzu 3</li>';
//
const paragraph = document.querySelector('.text');
paragraph.classList.add('add-margin');
//
const newListItem = document.createElement('li');
newListItem.textContent='Mövzu  4';
list.appendChild(newListItem);
//
const title = document.querySelector('.title');
title.remove();
//
list.setAttribute('id','list-menu');


// 7. Event Handling
// Tapşırıq: Event Listeners
const btn = document.getElementById('btn').addEventListener('click',function(){
    paragraph.style.color='pink';
    paragraph.style.fontSize='30px';
    list.style.fontSize='20px';
    list.style.color='blue';
});

//

const form=document.getElementById('myForm');
const input = document.getElementById('name');
const resultValue = document.querySelector('.result-value');

form.addEventListener('submit',function(e){
    e.preventDefault();
    resultValue.textContent=`Name: ${input.value}`;
});

//

input.addEventListener('keydown',function(){
    input.style.color='red';
})
input.addEventListener('keyup',function(){
    input.style.color='green';
})

//

const nameInput = document.querySelector('.input-name');
const formBtn = document.querySelector('.form-btn');

nameInput.addEventListener('mouseover',function(){
    nameInput.style.color='green'
})
formBtn.addEventListener('mousedown',function(){
    formBtn.style.backgroundColor='pink';
})
formBtn.addEventListener('mouseup',function(){
    formBtn.style.backgroundColor='white';
})