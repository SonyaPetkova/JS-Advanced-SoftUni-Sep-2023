function listOfNames(arr) {
    let index=1;
    let result=arr
    .sort((a,b) => a.localeCompare(b))
    .map(el=> console.log(`${index++}.${el}`))
}

listOfNames(["John",

"Bob",

"Christina",

"Ema"])