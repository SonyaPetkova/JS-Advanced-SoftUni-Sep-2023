function solve(...params) {
  let result = {};
  for (const arg of params) {
    let type = typeof arg;
    console.log(`${type}: ${arg}`);
    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }
    result[type] = result[type] + 1;
  }
let sortRes=Object.entries(result).sort((a,b)=>b[1]-a[1])

  for (const [key, value] of sortRes ) {
    console.log(`${key} = ${value}`);
  }
}

solve("cat", 42, function () {
  console.log("Hello world!");
});
