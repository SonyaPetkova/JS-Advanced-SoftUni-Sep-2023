function solve(input) {
  let result = [];
  const processObj = {
    add: (el) => {
      result.push(el);
    },
    remove: (el) => {
        result.forEach((text)=> {if(el===text) {result.splice(result.indexOf(el), 1)  } } )
     
    },
    print: () => {
      console.log(result.join(","));
    },
  };

  input.forEach((element) => {
    let [command, text] = element.split(" ");
if (command==="print") {
    processObj.print();
}
 if(command==="add"){
processObj.add(text);
}
if (command==="remove") {
    processObj.remove(text)
}



//     switch (command) {
//       case "print":
        
//         break;
//       case "add":
//         processObj.add(text);
//         break;
//       case "remove":
//         processObj.remove(text);
//         break;
//     }
  });
}


solve(["add hello", "add again", "remove hello", "add again", "print"]);
