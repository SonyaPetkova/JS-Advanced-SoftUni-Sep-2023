function everyNthElement(arr, nStep) {
  let result = arr.filter((e, i) => i % nStep === 0);
  return result;
}
everyNthElement(
  ["5", "20", "31", "4", "20"],

  2
);
