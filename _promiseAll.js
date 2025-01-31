// Реализуйте функцию _promiseAll
function _promiseAll(promises) {
    if (!Array.isArray(promises)) {
        return Promise.reject(new TypeError("Input must be array"));
    }

    return new Promise((reolve, regect) => {
        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        reolve(results);
                    }
                })
                .catch((error) => regect(error));

            if (promises.length === 0) {
                reolve(results);
            }
        });
    });
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = new Promise((resolve) => setTimeout(resolve, 100, 4));

_promiseAll([promise1, promise2, promise3, promise4])
    .then((results) => {
        console.log(results); // Output: [1, 2, 3, 4]
    })
    .catch((error) => {
        console.error(error);
    });

const promise5 = Promise.reject("Error occurred");

customPromiseAll([promise1, promise2, promise5])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error); // Output: Error occurred
    });
