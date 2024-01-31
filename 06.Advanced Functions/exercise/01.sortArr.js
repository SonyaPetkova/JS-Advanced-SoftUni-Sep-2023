function sortArr(arr, sortingOrder) {
  return sortingOrder === "asc"
    ? arr.sort((a, b) => a - b)
    : arr.sort((a, b) => b - a);
}

console.log(sortArr([14, 7, 17, 6, 8], "asc"));
