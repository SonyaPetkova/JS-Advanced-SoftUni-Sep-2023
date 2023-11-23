function validityChecker(x1, y1, x2, y2) {
  const distanceX1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));

  if (Number.isInteger(distanceX1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  const distanceX2 = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
  if (Number.isInteger(distanceX2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (Number.isInteger(distance)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

validityChecker(3, 0, 0, 4);
console.log("----------");
validityChecker(2, 1, 1, 1);
