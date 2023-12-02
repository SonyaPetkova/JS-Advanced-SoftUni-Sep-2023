function objectFactory(library, orders) {
  let result = [];
  for (const el of orders) {
    let currentObj = Object.assign({}, el.template);
    for (let func of el.parts) {
      currentObj[func] = library[func];
    }
    result.push(currentObj);
  }
return result;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },

  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },

  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },

    parts: ["print"],
  },

  {
    template: { name: "Initech Scanner" },

    parts: ["scan"],
  },

  {
    template: { name: "ComTron Copier" },

    parts: ["scan", "print"],
  },

  {
    template: { name: "BoomBox Stereo" },

    parts: ["play"],
  },
];

objectFactory(library, orders);
