
// Diff b/w map and forEach

// 1. map will return new array but forEach didn't return anything
// 2. map will will not change the original array but forEach will change the original array.

const arr = [1, 2, 3, 4];

// 1. return
const mapReturn = arr.map(val => val +3);
const forEachReturn = arr.forEach(val => val +3);

console.log(arr, mapReturn, forEachReturn); //[ 1, 2, 3, 4 ], [ 4, 5, 6, 7 ], undefined

// 2
// ForEach will change the original value

arr.forEach((val, index) => {
    arr[index] = val+2;
});

console.log(arr); // forEach changed the original array