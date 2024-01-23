function deleteByEmail() {
  console.log("TODO:...");
  const inputValue = document.getElementsByName("email")[0].value;
  const mailTable = document.querySelectorAll("#customers tr td:nth-child(2)");

  for (const email of mailTable) {
    let result = document.getElementById("result");
    if (inputValue === email.textContent) {
      let row = email.parentNode;
      row.parentNode.removeChild(row);
      result.textContent = "Deleted.";
      console.log("deleted");
      return
    }
   document.getElementById("result").textContent="Not found."
  }
}
