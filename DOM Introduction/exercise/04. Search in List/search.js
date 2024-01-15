function search() {
  // TODO
  const towns = document.querySelectorAll("#towns li");

  let searchText = document.getElementById("searchText").value;

  let counter = 0;

  for (const el of towns) {
    let town = el.textContent.toLowerCase();
    if (town.includes(searchText.toLowerCase())) {
      el.style.fontWeight = "bold";
      el.style.textDecoration = "underline";
      counter++;
    } else {
      el.style.fontWeight = "";
      el.style.textDecoration = "none";
    }
  }
  document.getElementById("result").textContent = `${counter} matches found`;
}
