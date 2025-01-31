// Реализуйте метод _map для массива

Array.prototype._map = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

console.log([1, 2, 3]._map(n => n * 2)); // [2, 4, 6] (double each number)
console.log(["a", "b", "c"]._map(letter => letter.toUpperCase())); // ["A", "B", "C"]
console.log([10, 20, 30]._map((num, index) => num + index)); // [10, 21, 32]

