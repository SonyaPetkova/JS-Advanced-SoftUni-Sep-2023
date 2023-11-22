function circleArea(input) {
    let result=0;
  if (typeof input != "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }else{
    result=Math.PI*Math.pow(input,2)
console.log(result.toFixed(2));
  }


}
circleArea(5);
circleArea("name");
