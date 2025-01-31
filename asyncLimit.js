// Необходимо написать функцию, которая принимает два аргумента: асинхронную функцию и временной лимит в миллисекундах. Эта функция должна возвращать 
// новую версию асинхронной функции, выполнение которой ограничено заданным временным лимитом.
// Должны выполняться следующие условия:
// Если время выполнения исходной функции меньше временного лимита, новая функция должна вернуть результат выполнения асинхронной функции.
// Если время выполнения исходной функции превышает временной лимит, новая функция должна вернуть сообщение: "Превышен лимит исполнения".

const asyncLimit = (fn, delay) => {
    return async (...args) => {
        return Promise.race([
            fn(...args),
            new Promise((res, reject) =>
                setTimeout(() => reject("Превышен лимит времени исполнения"), delay)
            ),
        ]);
    };
};

const fn = async (n) => {
    await new Promise((res) => setTimeout(res, 100));

    return n * n;
};

console.log(asyncLimit(fn, 50)(5)); // rejected превышен лимит
console.log(asyncLimit(fn, 150)(5)); // resolve 25

const fn2 = async (a, b) => {
    await new Promise((res) => setTimeout(res, 120));

    return a + b;
};

console.log(asyncLimit(fn2, 100)(1, 2));
console.log(asyncLimit(fn2, 150)(1, 2));