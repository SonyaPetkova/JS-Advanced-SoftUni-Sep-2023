function fruit(fruit,weightInGrams,pricePerKg) {

const weightInKg=weightInGrams/1000;
const total=weightInKg*pricePerKg



    console.log(`I need $${total.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)