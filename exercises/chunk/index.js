// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My own solution:
function chunk(array, size) {
  const chunksMatrix = [];
  for (let i = 0; i < array.length; i = i + size) {
    const currentChunk = array.slice(i, i + size);
    chunksMatrix.push(currentChunk);
  }
  return chunksMatrix;
}

// Course Solution #1
// function chunk(array, size) {
//   const chunked = [];
//   for(element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// Course Solution #2
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;
//   while(index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }

module.exports = chunk;