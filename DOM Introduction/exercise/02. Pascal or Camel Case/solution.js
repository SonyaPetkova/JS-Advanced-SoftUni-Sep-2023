function solve() {
  //TODO...
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let textArr = text.toLowerCase().split(" ");
  let result = [];

  switch (convention) {
    case "Camel Case":
      result.push(textArr[0]);
      for (let i = 1; i < textArr.length; i++) {
        let currentWord = textArr[i];
        let wordCamelCase = currentWord[0];
        wordCamelCase = wordCamelCase.toUpperCase();
        wordCamelCase += currentWord.substring(1);

        result.push(wordCamelCase);
      }
      document.getElementById("result").textContent = result.join("");

      break;

    case "Pascal Case":
      for (const currentWord of textArr) {
        let wordPascalCase = currentWord[0];
        wordPascalCase = wordPascalCase.toUpperCase();
        wordPascalCase += currentWord.substring(1);
        result.push(wordPascalCase);
      }
      document.getElementById("result").textContent = result.join("");

      break;

    default:
      document.getElementById("result").textContent="Error!";
      break;
  }
}
