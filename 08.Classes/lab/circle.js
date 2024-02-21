class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(r) {
    return (this._radius = r);
  }

  get diameter() {
    return this.radius * 2;
  }
  set diameter(d) {
    return (this.radius = d / 2);
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);
