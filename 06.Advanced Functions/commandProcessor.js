function solution() {
  let internalStr = "";
  return {
    append: (str) => {
      return (internalStr += str);
    },
    removeStart: (num) => {
      return (internalStr = internalStr.substring(num));
    },
    removeEnd: (num) => {
      return (internalStr = internalStr.substring(0, internalStr.length - num));
    },
    print: () => {
      return console.log(internalStr);
    },
  };
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
let secondZeroTest = solution();

secondZeroTest.append("123");

secondZeroTest.append("45");

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();
