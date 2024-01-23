function validate() {
  console.log("TODO:...");
  const inputField = document.getElementById("email");
  const pattern = new RegExp(/[a-z]+@[a-z]+.[a-z]+/gm);
  console.log(inputField);

  inputField.addEventListener("change", handler);

  function handler(e) {
    let inputValue = inputField.value;

    if (!pattern.test(inputValue)) {
      inputField.classList.add("error");
    } else {
      inputField.classList.remove("error");
    }
  }
}
