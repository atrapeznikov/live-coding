// Напишите функцию, которая переворачивает цифры числа, сохраняя знак нетронутым.

function reverseNumber(num) {
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return num < 0 ? -reversed : reversed;
}

// Test cases
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-456)); // -654
console.log(reverseNumber(1000)); // 1
console.log(reverseNumber(0)); // 0