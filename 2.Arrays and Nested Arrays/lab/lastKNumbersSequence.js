function lastKNumbersSequence(n, k) {
  let result = [1];
  let sumArr = [1];
  let currentNumber = 0;
  // until the length of the result is less than the given n length
  for (let i = 0; result.length <= n - 1; i++) {
    //check if we have less than the given elements
    //if we have less sum all elements

    if (result.length <= k) {
      currentNumber = result.reduce((a, b) => a + b);
      result.push(currentNumber);
      sumArr.push(currentNumber);
    } else {
      // if we have more sum the last k elements
      //We add always 1 number and extract 1 number from the sum Arr
      //this way we always have the given k elements from the input

      sumArr.shift();
      currentNumber = sumArr.reduce((a, b) => a + b);

      sumArr.push(currentNumber);
      result.push(currentNumber);
    }
  }
  return result;
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
