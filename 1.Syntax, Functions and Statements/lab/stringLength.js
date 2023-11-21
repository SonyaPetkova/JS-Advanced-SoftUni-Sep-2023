function stringLength(first,second,third){
    sumLength= first.length+second.length+third.length;
    console.log(sumLength);
    averageLength=sumLength/3;
    console.log(Math.trunc(averageLength));


}
stringLength('chocolate', 'ice cream', 'cake')