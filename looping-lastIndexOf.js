const lastIndexOf = function (arr, value) {
  if (arr === []) {
    return -1;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    } 
  } return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));