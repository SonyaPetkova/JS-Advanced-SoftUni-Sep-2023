function sameNumbers(input) {
  let isTrue = true;
  let sum = 0;
  let numAsString = input.toString();

  numAsString
  .split("")
  .map(el=> {
    if(el !==numAsString[0]){
        isTrue=false;
    }
    return sum+=Number(el)
  });

  console.log(isTrue);
  console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
