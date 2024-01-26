function solve() {
  const newFurnitureRef = document.querySelector("div#exercise textarea");
  const generateBtn = document.querySelector("div#exercise button");
  const buyBtn = document.querySelectorAll("button")[1];
  const tableRef = document.getElementsByTagName("tbody")[0];

  generateBtn.addEventListener("click", generateHandler);
  buyBtn.addEventListener("click", buyHandler);

  function generateHandler(e) {
    let newFurniture = newFurnitureRef.value;
    let newFurnitureArr = JSON.parse(newFurniture);

    newFurnitureArr.forEach((el) => {
      let furnitureName = el.name;
      let furnitureImg = el.img;
      let furniturePrice = el.price;
      let factor = el.decFactor;
      createRow(furnitureImg, furnitureName, furniturePrice, factor);
    });
  }

  function createRow(img, name, price, factor) {
    let newRow = document.createElement("tr");
    let imgTd = document.createElement("td");
    let imgEl = document.createElement("img");
    imgEl.src = img;
    imgTd.appendChild(imgEl);
    newRow.appendChild(imgTd);

    let elementsArr = [name, price, factor];
    elementsArr.forEach((el) => {
      let td = document.createElement("td");
      let p = document.createElement("p");
      p.textContent = el;
      td.appendChild(p);
      newRow.appendChild(td);
    });

    let checkTd = document.createElement("td");
    let checkboxField = document.createElement("input");
    checkboxField.type = "checkbox";

    checkTd.appendChild(checkboxField);
    newRow.appendChild(checkTd);

    tableRef.appendChild(newRow);
  }
  function buyHandler(e) {
    let selectedCheckbox = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    let boughtFurniture = [];
    let totalPrice = 0;
    let factorSum = 0;
    for (const el of selectedCheckbox) {
      let row = el.parentNode.parentNode;
      let name = row.getElementsByTagName("td")[1].textContent;
      let price = Number(row.getElementsByTagName("td")[2].textContent);
      let factor = Number(row.getElementsByTagName("td")[3].textContent);
      boughtFurniture.push(name);
      totalPrice += price;
      factorSum += factor;
    }

    let output1 = `Bought furniture: ${boughtFurniture.join(", ")}`;
    let output2 = `Total price: ${totalPrice.toFixed(2)}`;
    let output3 = `Average decoration factor: ${
      factorSum / selectedCheckbox.length
    }`;
    document.getElementsByTagName(
      "textarea"
    )[1].textContent = `${output1}\n${output2}\n${output3}`;
  }
}

// function createRow(img, name, price, factor) {
//   let tableRef = document.getElementsByTagName("tbody")[0];
//   let newRow = document.createElement("tr");

//   let imgTd = document.createElement("td");
//   let imgEl = document.createElement("img");
//   imgEl.src = img;
//   imgTd.appendChild(imgEl);
//   newRow.appendChild(imgTd);

//   let nameTd = document.createElement("td");
//   let nameP = document.createElement("p");
//   nameP.textContent = name;
//   nameTd.appendChild(nameP);
//   newRow.appendChild(nameTd);

//   let priceTd = document.createElement("td");
//   let priceP = document.createElement("p");
//   priceP.textContent = price;
//   priceTd.appendChild(priceP);
//   newRow.appendChild(priceTd);

//   let factorTd = document.createElement("td");
//   let factorP = document.createElement("p");
//   factorP.textContent = factor;
//   factorTd.appendChild(factorP);
//   newRow.appendChild(factorTd);

//   let checkTd = document.createElement("td");
//   let checkboxField = document.createElement("input");
//   checkboxField.type="checkbox"

//   checkTd.appendChild(checkboxField);
//   newRow.appendChild(checkTd);

//   tableRef.appendChild(newRow);

//   console.log(newRow);
// }
