/// Q 10. Concanates nested Array

const num1 = [[1], [2]];
const num2 = [3, [4]];
const num3 = 5;

num1[0].push(num3);
console.log(num1)
const result = num1.concat(num2);
console.log(result);



// Expected Output : [[1, 5], [2], 3, [4]];