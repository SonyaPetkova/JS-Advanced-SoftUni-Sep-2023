class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    let x = b.x - a.x;
    let y = b.y - a.y;
    let dist = Math.sqrt(x ** 2 + y ** 2);
    return dist;
  }
}
let p1 = new Point(5, 8);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
