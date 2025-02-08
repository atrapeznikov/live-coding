function flat(arr, depth = 1) {
    if (depth) {
        return arr.reduce((acc, cur) => {
            return [...acc, ...(Array.isArray(cur) ? flat(cur, depth - 1) : [cur])];
        }, [])
    } else {
        return arr
    }
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr)); // [1, 2, 3, [4]]
console.log(flat(arr, 1)); // [1, 2, 3, [4]]
console.log(flat(arr, 2)); // [1, 2, 3, 4]