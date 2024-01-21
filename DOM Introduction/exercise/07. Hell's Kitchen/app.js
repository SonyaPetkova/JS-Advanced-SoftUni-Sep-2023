function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    let input = document.getElementsByTagName("textarea")[0].value;
    let inputArr = JSON.parse(input);
    let result = {};
    

    for (const el of inputArr) {
      let average = 0;
      let bestSalary = 0;

      let [restaurantName, data] = el.split(" - ");
      data.split(", ").forEach((element) => {
        let [worker, salary] = element.split(" ");
        average += Number(salary);

        if (Number(salary) > bestSalary) {
          bestSalary = salary;
        }
        if (!result.hasOwnProperty(`${restaurantName}`)) {
          result[restaurantName] = {};
          result[restaurantName].workersData = [];
        }
        let workersData=worker +" "+ salary;
        result[restaurantName].workersData.push(workersData)

        
        result[restaurantName]["Average Salary"] =
          average / Object.keys(result[restaurantName].workersData).length;
      });
      result[restaurantName]["Best Salary"] = Number(bestSalary);
    }

    let currentAverage = 0;
    let bestRestaurant = "";
    let lastOneAdded="";
    for (const key in result) {
      if (result[key]["Average Salary"] === currentAverage) {
        bestRestaurant = lastOneAdded;
      }
      if (result[key]["Average Salary"] > currentAverage) {
        currentAverage = result[key]["Average Salary"];

        bestRestaurant = key;
      }
    
      lastOneAdded=key;
    }


    let output1 = `Name: ${bestRestaurant} Average Salary: ${result[
      bestRestaurant
    ]["Average Salary"].toFixed(2)} Best Salary: ${result[bestRestaurant][
      "Best Salary"
    ].toFixed(2)}`;
    document.querySelector("#bestRestaurant p").textContent = output1;
    let output2 = [];
  


for (let el of result[bestRestaurant].workersData) {

[worker,salary]=el.split(" ");

output2.push([worker,salary])
}

let sortedOutput=output2.sort((a,b)=>b[1]-a[1]);
console.log(sortedOutput);
let sortedOutput2="";
    for (const [name, salary] of sortedOutput){
    sortedOutput2 += `Name: ${name} With Salary: ${salary} `;
    }
    document.querySelector("#workers p").textContent = sortedOutput2;
  console.log(sortedOutput2);
  }
}
