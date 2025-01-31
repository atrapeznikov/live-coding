// Напишите функцию, определяющую, является ли данное число полным квадратом.

function isPerfectSquare(num) {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(0)); // true
console.log(isPerfectSquare(25)); // true