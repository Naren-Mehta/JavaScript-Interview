// map, filter and reduce method

//1.  What is map
// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


//2. What is filter
// The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// 3. reduce method
// The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().


const array2 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array2.reduce((accumulator, current) => {
    return accumulator + current;
}, initialValue);

console.log(sumWithInitial);
// Expected output: 10