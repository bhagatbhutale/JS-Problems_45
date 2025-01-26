// Q.2 Flatten an array of arrays

let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

// Excepted output : [0,1,2,3,4,5];

const flattenArr = arr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattenArr);
