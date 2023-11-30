function sortArrayBy2Criteria(input) {
    let result=input.sort((a,b)=> {
        if (a.length!=b.length) {
            return a.length-b.length
        }
        return a.localeCompare(b)
    })
    console.log(result.join("\n"));
    
}
sortArrayBy2Criteria(['alpha',

'beta','gamma'])
sortArrayBy2Criteria(['Isacc', 'Theodor','Jack', 'Harrison', 'George'])
sortArrayBy2Criteria(['test', 'Deny','omen', 'Default'])