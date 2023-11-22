function greatestCommonDivisor(num1,num2) {
    let result = Math.min(num1, num2);
    while (result > 0) {
        if (num1 % result == 0 && num2 % result == 0) {
            break;
        }
        result--;
    }

    console.log(result);
}


greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)