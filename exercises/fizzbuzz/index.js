// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const isDivisibleByThree = num => num % 3 === 0;
  const isDivisibleByFive = num => num % 5 === 0;

  for (let i = 1; i <= n; i++) {
    if (isDivisibleByThree(i) && isDivisibleByFive(i)) {
      console.log('fizzbuzz');
    } else if (isDivisibleByThree(i)) {
      console.log('fizz');
    } else if (isDivisibleByFive(i)) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
