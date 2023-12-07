function heroicInventory(input) {
  let res = [];

  for (const el of input) {
    let [name, level, items] = el.split(" / ");
    level = Number(level);
 items = items ? items.split(", "): [];
   
    res.push({ name, level, items });
  }
  res=JSON.stringify(res);
  console.log(res);
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGu",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
