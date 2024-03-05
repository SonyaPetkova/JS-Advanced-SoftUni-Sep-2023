

(function solve() {
  String.prototype.ensureStart = function (str) {
  
    if (!this.startsWith(str)) {
      return str + this;
   
    }
    return this ;
  };
  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      let newStr = this + str;
      return newStr;
    }
    return this;
  };

  String.prototype.isEmpty = function () {
    if (this.length === 0) {
      return true;
    }
    return false;
  };
  String.prototype.truncate = function (n) {
    let newStr = "";
    if (this.length <= n) {
      return this;
    }
    if (this.indexOf(" ") === -1) {
      if (n < 4) {
        return (newStr = newStr.padStart(n, "."));
      }
      return (newStr = this.substring(0, n - 3) + "...");
    }

    newStr = this.split(" ");
    newStr.pop();

    return newStr.join(" ") + "...";
  };

  String.format = function (string, ...params) {
    
    string = string.replace(/{(\d+)}/g, (placeholder, index) => {
      if (index < params.length) {
        return params[index];
      } else {
        return placeholder;
      }
    });
   return string
  };
})();
let testString = 'quick brown fox jumps over the lazy dog';
var answer = testString.ensureStart('the ');
console.log(answer);
answer = answer.ensureStart('the ');

console.log(answer);

// let str = "my string";

// str = str.ensureStart("my");

// str = str.ensureStart("hello ");

// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);

// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format(
//   "The {0} {1} fox",

//   "quick",
//   "brown"
// );
// console.log(str);
// str = String.format(
//   "jumps {0} {1}",

//   "dog"
// );
// console.log(str);