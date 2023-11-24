function biggerHalf(arr) {
  let middle = Math.floor(arr.length / 2);
  arr.sort((a, b) => a - b);

  let result = arr.slice(middle);
  console.log(result);
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
