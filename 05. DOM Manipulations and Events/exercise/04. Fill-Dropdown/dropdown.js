function addItem() {
  const text = document.getElementById("newItemText");
  const value = document.getElementById("newItemValue");

  const menuRef = document.getElementById("menu");
  const option = document.createElement("option");
  option.textContent = text.value;
  option.value = value.value;
  menuRef.appendChild(option);
  text.value = "";
  value.value = "";
}
