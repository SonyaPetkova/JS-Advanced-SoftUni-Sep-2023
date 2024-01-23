function extract(elementID) {
  let content = document.getElementById(elementID).textContent;
  let result = [];

  let pattern = /\(([^)]+)\)/g;
  let matches = pattern.exec(content);
  while (matches) {
    result.push(matches[1]);
    matches = pattern.exec(content);
  }
return result.join("; ");
  
}
let text = extract("content");
