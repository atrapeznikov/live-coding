// Реализуйте метод _filter для массива

Array.prototype._filter = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        const isTrue = callback(this[i], i, this);

        if (!isTrue) continue;

        result.push(this[i]);
    }

    return result;
};

console.log([1, 2, 3, 4, 5]._filter(n => n % 2 === 0)); // [2, 4] (even numbers)
console.log(["apple", "banana", "cherry"]._filter(fruit => fruit.includes("a"))); // ["apple", "banana"]
console.log([10, 20, 30]._filter((num, index) => index % 2 === 0)); // [10, 30] (even indices)

