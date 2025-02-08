// Необходимо написать функцию strjoin, которая склеивает строки через разделитель

function strjoin(separator, ...args) {
    return args.join(separator);
}

// es2015
function strjoin() {
    let separator = arguments[0];
    return Array.prototype.slice.call(arguments, 1).join(separator);
}

console.log(strjoin('.', 'a', 'b', 'c')); // a.b.c
console.log(strjoin('*', 'a', 'b', 'c')); // a*b*c