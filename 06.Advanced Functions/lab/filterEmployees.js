function solve(data, criteria) {
  const employeeArr = JSON.parse(data);
  const [key, value] = criteria.split("-");
 
  employeeArr.filter((employee, index) => {
    if (employee[key] === value) {
      console.log(
        `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
      );
    }
  });
}



// if (value === "all") {
//     employeeArr.forEach((element) => {
//       let index = 0;
//       console.log(
//         `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
//       );
//       index++;
//     });
//     return;
//   }
solve(
    `[{

        "id": "1",
        
        "first_name": "Ardine",
        
        "last_name": "Bassam",
        
        "email": "abassam0@cnn.com",
        
        "gender": "Female"
        
        }, {
        
        "id": "2",
        
        "first_name": "Kizzee",
        
        "last_name": "Jost",
        
        "email": "kjost1@forbes.com",
        
        "gender": "Female"
        
        },
        
        {
        
        "id": "3",
        
        "first_name": "Evanne",
        
        "last_name": "Maldin",
        
        "email": "emaldin2@hostgator.com",
        
        "gender": "Male"
        
        }]`,
        
        'all');
