function subSum(arr, startIndex, endIndex) {
  let startIndexAsNum = Number(startIndex);
  let endIndexAsNum = Number(endIndex);
  if (!Array.isArray(arr)) return NaN;

  if (startIndexAsNum < 0) startIndexAsNum = 0;
  if (endIndexAsNum > arr.length - 1) endIndexAsNum = arr.length - 1;
  const arrIsOnlyNums = arr.some(isNaN);
  if (arrIsOnlyNums) return NaN;

  if (arr.length === 0) return 0;

  const result = arr
    .slice(startIndexAsNum, endIndexAsNum + 1)
    .reduce((num1, num2) => num1 + num2);
  return result
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, "twenty", 30, 40], 0, 2);
subSum([], 1, 2);
subSum("text", 0, 2);
