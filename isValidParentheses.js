// Написать функцию, которая проверит строку и вернёт в результате true или false в зависимости от того, 
// является ли данная последовательность скобок валидной.

function isValidParentheses(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Тестовые данные
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("([{}])")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true