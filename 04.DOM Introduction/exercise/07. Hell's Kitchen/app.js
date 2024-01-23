function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    let input = document.getElementsByTagName("textarea")[0].value;
    let inputArr = JSON.parse(input);
    let result = {};

    for (const el of inputArr) {
      let [restaurantName, data] = el.split(" - ");
      data.split(", ").forEach((element) => {
        let [worker, salary] = element.split(" ");

        if (!result.hasOwnProperty(`${restaurantName}`)) {
          result[restaurantName] = {};
          result[restaurantName].workersData = [];
          result[restaurantName]["Average Salary"] = 0;
          result[restaurantName]["Best Salary"] = 0;
        }
        if (Number(salary) > result[restaurantName]["Best Salary"]) {
          result[restaurantName]["Best Salary"] = salary;
        }
        result[restaurantName]["Average Salary"] += Number(salary);
        //
        let workersData = worker + " " + salary;

        result[restaurantName].workersData.push(workersData);
      });
    }

    let currentAverage = 0;
    let bestRestaurant = "";
    let firstOneAdded = "";
    for (const key in result) {
      result[key]["Average Salary"] =
        result[key]["Average Salary"] / Number(result[key].workersData.length);
      if (result[key]["Average Salary"] === currentAverage) {
        bestRestaurant = firstOneAdded;
      }
      if (result[key]["Average Salary"] > currentAverage) {
        currentAverage = result[key]["Average Salary"];

        bestRestaurant = key;
      }
      firstOneAdded = key;
    }

    let output1 = `Name: ${bestRestaurant} Average Salary: ${result[
      bestRestaurant
    ]["Average Salary"].toFixed(2)} Best Salary: ${Number(
      result[bestRestaurant]["Best Salary"]
    ).toFixed(2)}`;
    document.querySelector("#bestRestaurant p").textContent = output1;

    let output2 = [];
    for (let el of result[bestRestaurant].workersData) {
      [worker, salary] = el.split(" ");

      output2.push([worker, salary]);
    }

    let sortedOutput = output2.sort((a, b) => b[1] - a[1]);
    console.log(sortedOutput);
    let sortedOutput2 = "";
    for (const [name, salary] of sortedOutput) {
      sortedOutput2 += `Name: ${name} With Salary: ${salary} `;
    }
    document.querySelector("#workers p").textContent = sortedOutput2;
  }
}
