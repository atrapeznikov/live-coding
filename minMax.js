// Реализовать функцию minMax, которая принимает массив и возвращает максимальное и минимальное значение. 
// Решить нужно не использую Math.min() и Math.max()

const findMinMax = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        } else if (min > arr[i]) {
            min = arr[i];
        }
    }

    return { min, max };
};

console.log(findMinMax([4, 3, 5, 3, 2])); // {min: 2, max: 5}
console.log(findMinMax([4, 4, 7, 2, 1, 10])); // {min: 1, max: 10}
console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // {min: 1, max: 10}