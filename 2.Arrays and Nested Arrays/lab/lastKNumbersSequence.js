function lastKNumbersSequence(n, k) {
  let result = [1];
  let sumArr = [1];
  let currentNumber = 0;
 
  for (let i = 0; result.length <= n - 1; i++) {
    if (result.length <= k) {
      currentNumber = result.reduce((a, b) => a + b);
      result.push(currentNumber);
      sumArr.push(currentNumber);
    } else {
      sumArr.shift();
      currentNumber = sumArr.reduce((a, b) => a + b);

      sumArr.push(currentNumber);
      result.push(currentNumber);
    }
  }
  console.log(result);
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
