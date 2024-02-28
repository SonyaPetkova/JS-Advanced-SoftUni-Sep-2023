function carCompany(arr) {
  let carProduced = new Map();
  for (const line of arr) {
    let [brand, model, quantity] = line.split(" | ");
    if (!carProduced.has(brand)) {
      carProduced.set(brand, new Map([[model, Number(quantity)]]));
    } else {
      let currentModel = carProduced.get(brand);

      if (!currentModel.has(model)) {
        currentModel.set(model, Number(quantity));
      } else {
        currentModel.set(model, currentModel.get(model) + Number(quantity));
      }
    }
  }

  for (const brand of carProduced) {
    console.log(brand[0]);
    for (const [model, quantity] of brand[1]) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}
carCompany([
  "Audi | Q7 | 1000",

  "Audi | Q6 | 100",

  "BMW | X5 | 1000",

  "BMW | X6 | 100",

  "Citroen | C4 | 123",

  "Volga | GAZ-24 | 1000000",

  "Lada | Niva | 1000000",

  "Lada | Jigula | 1000000",

  "Citroen | C4 | 22",

  "Citroen | C5 | 10",
]);
