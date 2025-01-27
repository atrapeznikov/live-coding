// Функция sumRange принимает два числа start и end.
// Необходимо найти сумму всех чисел в заданном диапазоне.

function sumRange(start, end) {
  const count = end - start + 1;
  const sum = (count * (start + end)) / 2;
  return sum;
}

console.log(sumRange(1, 5)); // 15
console.log(sumRange(0, 10)); // 55
console.log(sumRange(-3, 3)); // 0
