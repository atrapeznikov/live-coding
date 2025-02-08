// Написать функцию sum, которая выглядит следующим образом: sum(5)(4)(9); 
// и выведет в консоль 5 9 18

function sum(num) {
    console.log(num);
    return function (a) {
        return sum(a + num);
    };
}

sum(5)(4)(9); // 5 9 18
sum(1)(2)(3)(4)(4) // 1 3 6 10 14
