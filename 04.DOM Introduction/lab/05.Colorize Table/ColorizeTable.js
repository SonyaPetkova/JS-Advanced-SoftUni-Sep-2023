function colorize() {
  // TODO
  let evenRows = document.querySelectorAll("tr:nth-child(even)");

  for (const el of evenRows) {
    el.style.backgroundColor = "Teal";
  }
}
