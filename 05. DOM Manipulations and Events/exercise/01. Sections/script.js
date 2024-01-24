function create(words) {
  console.log("TODO:...");
  const content = document.querySelector("#content");

  for (const el of words) {
    let p = document.createElement("p");
    let div = document.createElement("div");
    p.textContent = el;
    p.style.display = "none";
    div.appendChild(p);

    content.appendChild(div);

    div.addEventListener("click", displayText);
  }

  function displayText(e) {
    e.currentTarget.children[0].style.display = "";

   
  }
}
