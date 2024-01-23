// function addItem() {
//     console.log('TODO:...');
//     const text=document.querySelector("#newItemText").value;
//     const li=document.createElement("li");
//     console.log(li);
//     li.appendChild(document.createTextNode(text));
//     document.getElementById("items").appendChild("li");


    
// }

function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    document.getElementById("items").appendChild(li);
    //clearing the input:
    document.getElementById('newItemText').value = '';
    }
