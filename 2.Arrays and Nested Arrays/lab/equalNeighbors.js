












function equalNeighbors(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        for (let j = 0; j < row.length; j++) {
            let col = row[j];
 
            if (i !== arr.length - 1) {
                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === arr[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === arr[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}














// function equalNeighbors(input) {
//   let counter = 0;
//   let arr=input;
  

// for (let i = 1; i <arr.length; i++) {
//     let row = arr[i-1];
    
    

//     for (let j = 1; j <=row.length; j++) {
//         let currentElement = row[j-1];
//         let rightChecker=row[j];
//         let downChecker=arr[i][j-1];
//     //     let upChecker=arr[i][j-1];
        
//     // if (currentElement===upChecker &&i!=1) {
//     //       counter++
//     //   }
//         if (currentElement==rightChecker) {
//             counter++
//         }
//         if (currentElement==downChecker) {
//             counter++
//         }
        
        
//     }
    
// }


// console.log(counter);



// }


equalNeighbors([
  ["2", "2", "5", "7", "4"],

  ["4", "0", "5", "3", "4"],

  ["2", "5", "5", "4", "2"],

 
]);

console.log("------------");

equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
