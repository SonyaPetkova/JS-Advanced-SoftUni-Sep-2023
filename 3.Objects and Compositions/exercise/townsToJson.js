function townsToJson(input) {
  let result = [];
  input.shift();
  for (const row of input) {
    let [town, latitude, longitude] = row.match(/[^|]+/gm);

  latitude=Number(latitude).toFixed(2)
  longitude=Number(longitude).toFixed(2)
 
   
    result.push({"Town":town.trim(),"Latitude": Number(latitude),"Longitude" : Number(longitude)});
    
  }
  console.log(JSON.stringify(result));

}
townsToJson([
  "| Town | Latitude | Longitude |",

  "| Sofia|42.696552|23.32601   |",

  "| Beijing | 39.913818 | 116.363625 |",
]);
townsToJson([
  "| Town | Latitude | Longitude |",

  "| Veliko Turnovo | 43.0757 | 25.6172 |",

  "| Monatevideo | 34.50 | 56.11 |",
]);
