function cookingByNumbers(number, op1, op2, op3, op4, op5) {
  let num = Number(number);
  let inputArr = [op1, op2, op3, op4, op5];
  let result = num;

  for (const el of inputArr) {
    switch (el) {
      case "chop":
        result/=2;
        break;
      case "dice":
        result=Math.sqrt(result)
        break;
      case "spice":
        result+=1;
        break;
      case "bake":
        result*=3;
        break;
      case "fillet":
        result=(result*0.8).toFixed(1);
        break;

      default:
        break;
    } console.log(result);
  }
 
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log("------------------");
cookingByNumbers(
  "9",
  "dice",
  "spice",
  "chop",
  "bake",

  "fillet"
);
