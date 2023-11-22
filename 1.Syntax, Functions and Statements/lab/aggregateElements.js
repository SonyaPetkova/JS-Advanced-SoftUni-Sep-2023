function aggregateElements(input) {
  let arrAsString = input
  .map((el) => el.toString())
  .reduce((a, b) => a + b);

  let sum = input.reduce((a, b) => a + b);

  let sumInverseValues = input
  .map((el) => 1 / el)
  .reduce((a, b) => a + b);

  console.log(sum);
  console.log(sumInverseValues);
  console.log(arrAsString);
}
aggregateElements([1, 2, 3]);
