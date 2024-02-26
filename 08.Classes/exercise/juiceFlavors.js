function juiceFlavours(arr) {
  let store = new Map();
  let storeBottles = new Map();

  for (const line of arr) {
    let [product, quantity] = line.split(" => ");
    if (!store.has(product)) {
      store.set(product, Number(quantity));
    } else {
      store.set(product, store.get(product) + Number(quantity));
    }
    if (store.get(product) >= 1000) {
      let bottle = parseInt(store.get(product) / 1000);
      store.set(product, store.get(product) - bottle * 1000);
      if (!storeBottles.has(product)) {
        storeBottles.set(product, bottle);
      } else {
        storeBottles.set(product, storeBottles.get(product) + bottle);
      }
    }
  }

  for (const el of storeBottles) {
    console.log(`${el[0]} => ${el[1]}`);
  }
}

juiceFlavours([
  "Orange => 2000",

  "Peach => 1432",

  "Banana => 450",

  "Peach => 600",

  "Strawberry => 549",
]);
juiceFlavours(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])