function carFactory(obj) {
  let model = obj.model;
  let power = obj.power;
  let color = obj.color;
  let carriage = obj.carriage;
  let wheelsize = obj.wheelsize;

  let res = {};
  res.model = model;

  let powerEnum = {
    "Small engine": { power: 90, volume: 1800 },

    "Normal engine": { power: 120, volume: 2400 },

    "Monster engine": { power: 200, volume: 3500 },
  };

  if (power < 90) {
    res.engine = powerEnum["Small engine"];
  } else if (power < 120) {
    res.engine = powerEnum["Normal engine"];
  } else {
    res.engine = powerEnum["Monster engine"];
  }

  let carriageEnum = {
    coupe: { type: "coupe", color },
    hatchback: {
        type: "hatchback", color
      }
  };
  if (carriage === "coupe") {
    res.carriage = carriageEnum["coupe"];
  } else {
    res.carriage = carriageEnum["hatchback"];
  }

  if(wheelsize%2===0){
    wheelsize-=1;
  }
  res.wheels=new Array(4).fill(wheelsize);


  return res
}
carFactory({
  model: "VW Golf II",

  power: 90,

  color: "blue",

  carriage: "hatchback",

  wheelsize: 14,
});
carFactory({
  model: "Opel Vectra",

  power: 110,

  color: "grey",

  carriage: "coupe",

  wheelsize: 17,
});
