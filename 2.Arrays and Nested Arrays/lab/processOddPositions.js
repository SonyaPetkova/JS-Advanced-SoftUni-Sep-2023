function processOddPositions(arr) {

   return arr.filter((a,i)=>i%2!==0)
    .map(el => el*2)
    .reverse(); 
    
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])