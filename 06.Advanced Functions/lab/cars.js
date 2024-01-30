function createCar(inputArr) {
  let cars = {};

  function create(...arg) {
    if (!arg.includes("inherit")) {
        let [newCarName] = [...arg];
    cars[newCarName] = {};
      
    } else {
      let [newCarName, _, proto] = [...arg];
      
      cars[newCarName] = Object.create(cars[proto]);
    }
  }
  function set(...arg) {
    let [obj, key, value] = [...arg];
    

    cars[obj][key]= value ;
  }

  function print(obj) {
    let result = [];
    Object.entries(cars[obj]).forEach((el) => {
      result.push(`${el[0]}:${el[1]}`);
    });
    console.log(result.join(","));
  }
  inputArr.forEach((element) => {
    let [command, ...args] = element.split(" ");

    switch (command) {
      case "create":
        create(...args);
        break;
      case "set":
        return set(...args);
      case "print":
        return print(...args);
    }
  });
}



createCar([
  "create c1",

  "create c2 inherit c1",

  "set c1 color red",

  "set c2 model new",

  "print c1",

  "print c2",
]);
