function sumTable() {
  let table = document.querySelectorAll("table td:nth-child(2)");
  let sum = 0;
  for (const el of table) {
    let current = Number(el.textContent);
    sum += current;
  }
  document.querySelector("#sum").textContent=sum
}
