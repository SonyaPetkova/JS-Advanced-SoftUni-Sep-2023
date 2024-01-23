function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    let searchField = document.getElementById("searchField");

    let table = document.querySelectorAll("tbody tr");

    for (let row of table) {
      let tableData = row.querySelectorAll("td");
      for (let td of tableData) {
        if (td.textContent.includes(searchField.value)) {
          row.classList.add("select");

          break;
        } else {
          row.classList.remove("select");
        }
      }
    }
    searchField.value = "";
  }
}
