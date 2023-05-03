Array.prototype.myFilter = function (callback) {
    const temp = [];

    for(let i=0 ; i<this.length; i++){
        if(callback(this[i])){
            temp.push(this[i]);
        }
    }

    return temp;   
};


const array = [1, 2, 3, 4];

const filter = array.myFilter(i => i > 2);

console.log(filter);
