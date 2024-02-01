function add(num) {
  let sum = num;

  function func(num2) {
    sum += num2;
    
    return func;
  }
// 2

// When you log console.log() the result of a function, it needs to convert that result to a string. Some browsers do this by calling its .toString() method.
  func.toString = function() {return Number(sum);};
  return func;
}
console.log(
  add(5).toString());
