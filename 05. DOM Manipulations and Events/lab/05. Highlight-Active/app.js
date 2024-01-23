function focused() {
  let sections = document.querySelectorAll("div div");
  let inputFields = document.getElementsByTagName("input");

  for (const el of inputFields) {
    el.addEventListener("focus", inputFocus);
    el.addEventListener("blur", inputBlur);
  }

  function inputFocus(e) {
    let section = e.target.parentNode;

    section.classList.add("focused");
  }
  function inputBlur(e) {
    e.target.parentNode.classList.remove("focused");
  }
}
