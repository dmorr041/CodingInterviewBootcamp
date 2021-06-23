// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const chars = {};
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//   const entries = Object.entries(chars);
//   let highestCount = 0;
//   let highestKey;
//   for (let entry of entries) {
//     if (entry[1] > highestCount) {
//       highestCount = entry[1];
//       highestKey = entry[0];
//     }
//   }
//   return highestKey;
// }

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
