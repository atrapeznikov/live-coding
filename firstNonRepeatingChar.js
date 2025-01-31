// Напишите функцию для поиска первого неповторяющегося символа в строке. 
// Возвращайте ноль (null), если все символы повторяются.

function firstNonRepeatingChar(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) return char;
    }

    return null;
}

console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("javascript")); // "j"
