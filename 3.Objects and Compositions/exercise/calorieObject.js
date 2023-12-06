function calorieObject(input) {
  let result = {};
  let currentProduct = "";
  let i = 0;

  input.forEach((el) => {
    if (i % 2 === 0) {
      currentProduct = el;
      
      result[el] = 0;
    } else {
      result[currentProduct] =Number(el) ;
    }
    i++;
  });

  console.log(result);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
