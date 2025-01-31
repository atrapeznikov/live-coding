// Напишите рекурсивную функцию для поиска максимального элемента в массиве.

function findMax(arr, n = arr.length) {
    if (n === 1) return arr[0];
    return Math.max(arr[n - 1], findMax(arr, n - 1));
}

console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-1, -5, -3])); // -1
console.log(findMax([10])); // 10