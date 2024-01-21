function solve(data) {
  let input = data.split(new RegExp(/[\[\]]+/gm));

  console.log(input);

  input = input.filter((el) => el.length > 0);
  input = input.join("");

  console.log(input);
  let first="Name: TheLake Average Salary: 913.33 Best Salary: 1300.00"
  
let second="Name: TheLake Average Salary: 913.33 Best Salary: 1300.00"

if (first===second) {
    console.log(true);
    
}
}
let previous =
"['PizzaHut - Peter 500, George 300, Mark 800', 'TheLake - Bob 1300, Joe 780, Jane 660']"
solve(`["PizzaHut - Peter

  500, George 300, Mark
  
  800",
  
  "TheLake - Bob 1300,
  
  Joe 780, Jane 660"]`);
