const merge = function (arr1, arr2) {
  for (let i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
    arr1.sort();
  } return arr1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([8, 3, 1, 4], [2, 7, 6, 8]));