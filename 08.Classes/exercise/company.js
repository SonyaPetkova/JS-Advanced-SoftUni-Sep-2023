class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name||salary==="" || salary < 0 || !position || !department) {
      throw new Error("Invalid input!");
    }

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
      this.departments[department].averageSalary = [];
    }

    this.departments[department].push({ name, salary, position });
    this.departments[department].averageSalary.push(salary);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    for (const department in this.departments) {
      let average =
        this.departments[department].averageSalary.reduce(
          (acc, salary) => acc + salary,
          0
        ) / this.departments[department].averageSalary.length;

      this.departments[department].averageSalary = average;
    }

    let bestDep = [0, null, ""];

    for (const department in this.departments) {
      let sortedEmployees = this.departments[department];
      sortedEmployees.sort((a, b) => {
        if (b.salary !== a.salary) {
          return b.salary - a.salary;
        } else {
          return a.name.localeCompare(b.name);
        }
      });

      if (bestDep[0] < this.departments[department].averageSalary) {
        bestDep[0] = this.departments[department].averageSalary;
        bestDep[1] = sortedEmployees;
        bestDep[2] = department;
      }
    }

    let output = `Best Department is: ${bestDep[2]}\n`;
    output += `Average salary: ${bestDep[0].toFixed(2)}`;

    for (const element of bestDep[1]) {
      output += `\n${element.name} ${element.salary} ${element.position}`;
    }

    return output;
  }}
  
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
