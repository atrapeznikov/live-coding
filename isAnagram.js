// Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга 
// (регистр букв не имеет значения)

const isAnagram = (strA, strB) => {
    const normalizeStrA = strA.toLowerCase().replace(/\s+/g, "");
    const normalizeStrB = strB.toLowerCase().replace(/\s+/g, "");

    if (normalizeStrA.length !== normalizeStrB.length) {
        return false;
    }

    const charMap = new Map();

    for (char of normalizeStrA) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (char of normalizeStrB) {
        if (!charMap.has(char)) {
            return false;
        }

        charMap.set(char, charMap.get(char) - 1);
    }

    return Array.from(charMap.values).every(value => value === 0)
};

console.log(isAnagram("finder", "Friend")); // true
console.log(isAnagram("hello", "bye")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rail safety", "fairy tales"));