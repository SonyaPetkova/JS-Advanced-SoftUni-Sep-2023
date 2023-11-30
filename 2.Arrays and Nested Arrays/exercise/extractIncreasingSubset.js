function extractIncreasingSubset(arr) {
   
    let currentBiggestElement=arr.shift();
  

    let result=[currentBiggestElement];

        arr.filter((el)=> { 
            if (el>=currentBiggestElement){ 
            result.push(el)
            currentBiggestElement=el}
            
       }
        
      )
   return result;
    
}

console.log(extractIncreasingSubset([1,3,,8,4,10, 12, 3, 2, 24]));
extractIncreasingSubset([1, 2, 3, 4])
extractIncreasingSubset([20, 3, 2, 15])