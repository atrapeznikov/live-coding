// Напишите функцию, которая вычисляет факториал числа.

const factorial = (n) => {
    if (n === 0) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6