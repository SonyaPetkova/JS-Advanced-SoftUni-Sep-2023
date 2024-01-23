function extractText() {
  let items = document.querySelectorAll("ul#items li");

  let textArea = document.querySelector("#result");
  for (let el of items) {
    textArea.value += el.textContent + "\n";
  }
}
