const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        }

        return (...args2) => curried(...args, ...args2)
    }
  }

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'
console.log(curriedJoin(1)(2, 3)) // '1_2_3'
console.log(curriedJoin(1, 2)(3)) // '1_2_3'