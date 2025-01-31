// Проверить, является ли заданная строка палиндромом. 
// Необходимо игнорировать символы пробела, знаков препинания и пр.

const isPalindrome = str => {
    let left = 0, right = str.length - 1;

    while (left < right) {
        while (left < right && !/[a-zA-Z0-9]/.test(str[left])) left++;
        while (left < right && !/[a-zA-Z0-9]/.test(str[right])) right--;

        if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal, Panama!") === true); // true
console.log(isPalindrome("No 'x' in Nixon") === true); // true
console.log(isPalindrome("Was it a car or a cat I saw?") === true); // true
console.log(isPalindrome("Eva, can I see bees in a cave?") === true); // true