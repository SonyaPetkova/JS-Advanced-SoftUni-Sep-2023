function validate() {
  // TODO
  const inputFieldRef = document.getElementById("email");
  const validationPattern = new RegExp(/[a-z]+@[a-z]+.[a-z]+/gm);

  inputFieldRef.addEventListener("change", handler);

  function handler(e) {
    const email = e.target.value;

    !email.match(validationPattern)
      ? inputFieldRef.classList.add("error")
      : inputFieldRef.classList.remove("error")
  }
}
