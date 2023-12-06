function fromJsonToHtml(input) {
  let arr = JSON.parse(input);

  let output = "<table>";

  output += makeKeyRow(arr);
  arr.forEach((obj) => {
    output += makeValuesRow(obj);
  });
  output += "\n</table>";

  function makeKeyRow(arrOfObjects) {
    let keyRow = "\n<tr>";

    Object.keys(arrOfObjects[0]).forEach((element) => {
      keyRow += `<th>${element}</th>`;
    });
    keyRow += "</tr>";
    return keyRow;
  }

  function makeValuesRow(obj) {
    let valueRow = "\n<tr>";
    for (const key in obj) {
      valueRow += `<td>${obj[key]}</td>`;
    }
    valueRow += "</tr>";
    return valueRow;
  }

  console.log(output);
}

fromJsonToHtml(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`);

fromJsonToHtml(`[{"Name":"Pesho",

"Score":4,

" Grade":8},

{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`);
