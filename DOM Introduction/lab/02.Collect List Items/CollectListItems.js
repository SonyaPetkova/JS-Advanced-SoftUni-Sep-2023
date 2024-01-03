function extractText() {
  let items = document.querySelectorAll("ul#items li");

  let textArea = document.querySelector("#result");
  for (let el of items) {
    console.log(el);
    console.log(typeof el);
    textArea.value += el.textContent + "\n";
  }
}
