// Напишите функцию для подсчета количества гласных и согласных в строке.
function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0, consonantCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}


// Тестовые данные
console.log(countVowelsAndConsonants("hello")); // { vowels: 2, consonants: 3 }
console.log(countVowelsAndConsonants("JavaScript")); // { vowels: 3, consonants: 7 }
console.log(countVowelsAndConsonants("12345")); // { vowels: 0, consonants: 0 }
