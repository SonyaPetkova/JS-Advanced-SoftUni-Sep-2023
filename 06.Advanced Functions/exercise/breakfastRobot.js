function solution() {
  let recipeObj = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: { carbohydrate: 10, flavour: 20 },

    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let stockOBj = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

  function restock(el, quantity) {
    if (stockOBj.hasOwnProperty(el)) {
      stockOBj[el] += Number(quantity);
      return "Success";
    }
  }
  function prepare(recipe, qty) {
    let output = "";
    if (recipeObj.hasOwnProperty(recipe)) {
      for (const [ingredient, quantity] of Object.entries(recipeObj[recipe])) {
        let quantityNeeded = quantity * qty;
        if (stockOBj[ingredient] < quantityNeeded) {
          output = `Error: not enough ${ingredient} in stock`;
          break;
        }

        stockOBj[ingredient] -= quantityNeeded;
        output = "Success";
      }
    }
    return output;
  }

  function manageOrders(instructions) {
    let output = "";
    if (instructions === "report") {
      for (const [ingredient, quantity] of Object.entries(stockOBj)) {
        output += `${ingredient}=${quantity} `;
      }
      return output.trimEnd();
    }
    let [command, ...data] = instructions.split(" ");
    switch (command) {
      case "restock":
        return restock(...data);

      case "prepare":
        return prepare(...data);
    }
  }

  return manageOrders;
}

let manager = solution();

console.log(manager("restock flavour 50")); // Success

console.log("-------");

console.log(manager("restock carbohydrate 10"));

console.log("--------");
console.log(manager("prepare apple 1"));

// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in

// console.log("-------");

// console.log(manager("restock flavour 50"));

// console.log(manager("prepare lemonade 4"));
