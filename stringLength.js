// Напишите рекурсивную функцию для определения длины строки.

function stringLength(str) {
    if (str === "") return 0;
    return 1 + stringLength(str.slice(1));
}

console.log(stringLength("hello")); // 5
console.log(stringLength("JavaScript")); // 10
console.log(stringLength("")); // 0