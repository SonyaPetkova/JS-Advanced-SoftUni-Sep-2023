function addAndRemove(input) {
    let n=0;
    let result=[];
    
input.forEach((el) => {
    n++;
    if(el==="add"){
        return result.push(n)
    }
    return result.pop()
});
    
result.length>0 ? console.log(result.join("\n")) : console.log("Empty");;
    
}

addAndRemove(['add',

'add',

'add',

'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])