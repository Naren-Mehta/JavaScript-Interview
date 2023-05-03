Array.prototype.myMap = function (callback) {

    const temp = [];

    this.forEach(val => {
        temp.push(callback(val));
    });

    return temp;
};


const array = [1, 2, 3, 4];

const double = array.myMap(i => i*2);

console.log(double);
