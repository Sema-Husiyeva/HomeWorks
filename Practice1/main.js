// 1

const getElement = (array,index)=> array[index];
console.log(getElement([3,9,15,20,26],3));


// 2

const removeElements = (array)=> {
    array.splice(0,3);
    return array;
}

console.log(removeElements([1,2,3,4,5,6]));


// 3

const filteredArray = (a,b)=> a.filter(item => item !== b);
console.log(filteredArray([22,15,40,15,60],15));


// 4

const filterNegativeElements = (a)=> a.filter(item => item < 0);
console.log(filterNegativeElements([7,-3,11,15,-20]));


// 5 

const calcAverage = (array)=> array.reduce((sum,current)=> sum + current, 0)/array.length;
console.log(calcAverage([3,5,7,9]));