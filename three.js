// Q.3 :- Find Larget Prime Number

const arr = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47];
// Excepted output : 97
function isPrime(num) {
  if (num % 2 == 0 || num < 2) return false;

  for (let fact = 3; fact <= Math.sqrt(num); fact += 2) {
    if (num % fact == 0) return false;
  }

  return true;
}

console.log(arr.sort((a, b) => a - b).findLast(isPrime));
