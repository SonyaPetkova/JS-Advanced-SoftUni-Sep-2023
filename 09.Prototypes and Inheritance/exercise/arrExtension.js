(function solve() {
  Array.prototype.last = function () {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    return this[this.length-1];
  };
  Array.prototype.skip = function (n) {
    if (n < 0 || n >= this.length) {
      throw new Error("Index is outside the bounds");
    }
    return this.slice(n);
  };
  Array.prototype.take = function (n) {
    if (n < 0 || n >= this.length) {
      throw new Error("Index is outside the bounds");
    }
    return this.slice(0, n);
  };
  Array.prototype.sum = function () {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    return this.reduce((a, b) => a + b,0);
  };
  Array.prototype.average = function () {
    if (this.length === 0) {
      throw new Error("Array is empty");
    }
    let sum = this.reduce((a, b) => a + b,0);
    return sum / this.length;
  };
})();
let myArr = [1, 2, 3];
console.log(myArr.skip(3));
