// Q. 4 : Remove duplicate form an array

const arr = [2, 3, 5, 3, 6, 8, 9, 2, 11, 5];

const strArr = ["Mike", "john", "Nancy", "Thomas", "Nancy", "Peter", "Mike"];

const resultArr = [...new Set(arr)];
console.log(resultArr);

const resultStrArr = [...new Set(strArr)];
console.log(resultStrArr);
