Array.prototype.myReduce = function (cb, acc) {
    for(let i=0; i<this.length; i++) {
        acc = acc !== undefined ? cb(acc, this[i]) : this[i];
    }

    return acc;
}


const array = [1, 2, 3, 4];

const result = array.myReduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(result);