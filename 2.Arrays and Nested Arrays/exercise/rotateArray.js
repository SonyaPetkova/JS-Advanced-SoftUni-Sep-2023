function rotateArray(arr, num) {
  let result = arr;
  for (let i = 0; i < num; i++) {
    let currentElement = result.pop();
    result.unshift(currentElement);
  }
  console.log(result.join(" "));
}
rotateArray(
  ["1", "2", "3", "4"],

  2
);

rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
