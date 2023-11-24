function sumFirstLast(arr) {
    let firstNumber=Number(arr.shift())
    let lastNumber=Number(arr.pop())
    return firstNumber+lastNumber;
   
}
sumFirstLast(['20', '30', '40'])