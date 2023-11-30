function magicMatrices(input) {
  let sumRow = 0;
  let sumColumn = 0;
  let isValid = true;

  function isVAlid(num1,num2){
    if (num1 != num2) {
        isValid = false;
      } else {
        isValid = true;
      }
      
  }

  for (let i = 0; i < input.length; i++) {
    let row = input[i];

    let currentSumRow = row.reduce((a, b) => a + b);

   isVAlid(currentSumRow,sumRow);
   sumRow=currentSumRow;

    let columnArr = [];

    for (let j = 0; j < row.length; j++) {
      let column = input[j][i];
      columnArr.push(column);
    }
    let currentColumnSum = columnArr.reduce((a,b)=>a+b);
    
 isVAlid(currentColumnSum,sumColumn) 

      sumColumn = currentColumnSum;
    
      isVAlid(currentColumnSum,currentSumRow)
      
      
  }
  console.log(isValid);
}

magicMatrices([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])