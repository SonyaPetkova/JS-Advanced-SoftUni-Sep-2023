function storeCatalogue(input) {
  let sortedArr = input.sort((a, b) => a.localeCompare(b));
  let result = {};
  for (let el of sortedArr) {
    let firstLetter = el.charAt(0);

el=el.split(" :").join(":");

    if (!result.hasOwnProperty(firstLetter)) {
      result[firstLetter] = [el];
    } else {
        
      result[firstLetter].push(el);
    }
  }
  for (const [letter, arr] of Object.entries(result)) {
    console.log(letter);
    arr.forEach((element) => {
      console.log(`  ${element}`);
    });
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
storeCatalogue([
  "Banana : 2",
  `Rubic's Cube : 5`,
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
