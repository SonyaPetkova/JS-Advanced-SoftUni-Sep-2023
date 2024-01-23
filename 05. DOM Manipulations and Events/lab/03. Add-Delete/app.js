function addItem() {
  //TODO...
  let text = document.getElementById("newItemText").value;

  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(text));
  if (text.length === 0) {
    return;
  }

  let removeLink = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");
  removeLink.href = "#";
  removeLink.appendChild(linkText);

  listItem.appendChild(removeLink);

  document.getElementById("items").appendChild(listItem);
  

  removeLink.addEventListener("click",handler)

  function handler(e) {
   const toDelete=e.currentTarget.parentNode;
   toDelete.parentNode.removeChild(toDelete)


  }
}
