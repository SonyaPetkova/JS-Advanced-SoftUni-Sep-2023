function diagonalSums(arr) {
   
    let firstIndex=0;
    let secondIndex=arr[0].length-1
    let firstDiagonal=0;
    let secondDiagonal=0;

    for (const element of arr) {
        firstDiagonal+=element[firstIndex++];
        secondDiagonal+=element[secondIndex--]
    }
    
    
    console.log(`${firstDiagonal} ${secondDiagonal}`);
   
}

diagonalSums([[20, 40],[10, 60]])
console.log("---------");
diagonalSums([[3, 5, 17],[-1, 7, 14], [1, -8, 89]])