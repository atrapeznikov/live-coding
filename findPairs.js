// Напишите функцию, которая возвращает все пары чисел из массива, 
// сумма которых равна заданной целевой сумме.

function findPairs(arr, target) {
    const seen = new Set();
    const pairs = [];

    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

console.log(findPairs([2, 4, 3, 7, 8, 1], 9)); // [[7, 2], [8, 1]]
console.log(findPairs([1, 2, 3, 4, 5], 10)); // []
console.log(findPairs([0, -1, -2, 2, 1], 0)); // [[-1, 1], [-2, 2]]
