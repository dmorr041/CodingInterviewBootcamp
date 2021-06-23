// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reduce((reversed, character) => character + reversed);
  return reversed === str;
}

// function palindrome(str) {
//   const arr = str.split('');
//   return arr.every((character, i) => {
//     return character === str[arr.length - i - 1];
//   });
// }

module.exports = palindrome;
