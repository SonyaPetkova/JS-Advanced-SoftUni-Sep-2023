function sortingNumbers(input) {
  let sortedArr = input.sort((a, b) => a - b);
  let temporaryArr = [];
  let arrLength = sortedArr.length;
  let newArr = [];

  for (let i = 0; i < arrLength; i++) {
    let currentEl = sortedArr.shift();
    let nextEl = sortedArr.pop();
    temporaryArr.push(currentEl);
    temporaryArr.push(nextEl);
  }
  temporaryArr = temporaryArr.join(" ");

  temporaryArr = temporaryArr.split(" ");
  temporaryArr = temporaryArr.forEach((el) => {
    debugger;
if (el != "") {
      el = Number(el);
      newArr.push(el);
    }
  });

  return(newArr);
}
sortingNumbers([1, 2, 3, 4, 5, 6, 7]);
sortingNumbers([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]);
