// Реализуйте метод _reduce для массива

Array.prototype._reduce = function (callback, initValue) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    if (this.length === 0 && initValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let result = initValue !== undefined ? initValue : this[0];
    let startIndex = initValue !== undefined ? 0 : 1; // Start from 1 if no initValue

    for (let i = startIndex; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }

    return result;
};

console.log([1, 2, 3, 4]._reduce((acc, num) => acc + num)); // 10 (1+2+3+4)
console.log([1, 2, 3, 4]._reduce((acc, num) => acc + num, 10)); // 20 (10+1+2+3+4)
console.log(["a", "b", "c"]._reduce((acc, char) => acc + char)); // "abc"
console.log([2, 3, 4]._reduce((acc, num) => acc * num, 1)); // 24 (multiplication)
