function rectangle(width, height, color) {
  function capitalizeFirstLetter(string) {
    let firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.substring(1);
  }

  return (result = {
    width,
    height,
    color: capitalizeFirstLetter(color),
    calcArea: () => {
      return width * height;
    },
  });
}
let rect = rectangle(4, 5, "red");

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
