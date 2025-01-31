const findVowels = str => {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

// Тестовые данные
console.log(findVowels("hello") === 2);  // "e", "o"
console.log(findVowels("world") === 1);  // "o"
console.log(findVowels("AEIOU") === 5);  // All vowels in uppercase
console.log(findVowels("aEiOu") === 5);  // Mixed case vowels