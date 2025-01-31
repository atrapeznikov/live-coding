// Напишите функцию для подсчета количества гласных в строк, используя регулярные выражения.

function countVowels(str) {
    const regex = /[aeiouAEIOU]/g;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Тестовые данные
console.log(countVowels("hello")); // 2
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("xyz")); // 0