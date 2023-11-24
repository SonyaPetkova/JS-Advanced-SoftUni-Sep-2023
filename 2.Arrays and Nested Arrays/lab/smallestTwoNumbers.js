function smallestTwoNumbers(arr) {
    arr.sort((a,b)=> a-b);
  console.log(arr);
    let first=arr.shift()
    let second=arr.shift()
        console.log(`${first} ${second}`);
}
 

smallestTwoNumbers([30, 15, 50, 5]);
