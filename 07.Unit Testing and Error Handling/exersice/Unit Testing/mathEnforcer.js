import { it } from "mocha";
import { expect } from "chai";

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("mathEnforcer.addFive", () => {
  it("should return the parameter plus 5", function () {
    expect(mathEnforcer.addFive(5)).to.equal(10);
  });
  it("should return undefined if the parameter is not a number", function () {
    expect(mathEnforcer.addFive("5")).to.equal(undefined);
    expect(mathEnforcer.addFive([])).to.equal(undefined);
    expect(mathEnforcer.addFive({})).to.equal(undefined);
  });
  it("should work with floating numbers", function () {
  expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
  expect(mathEnforcer.addFive(-0.5)).to.equal(4.5);

 });


});

describe("mathEnforcer.subtractTen", () => {
  it("should return the parameter minus 10", function () {
    expect(mathEnforcer.subtractTen(10)).to.equal(0);
    expect(mathEnforcer.subtractTen(0)).to.equal(-10);
  });
  it("should return undefined if the parameter is not a number", function () {
    expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
    expect(mathEnforcer.subtractTen([])).to.equal(undefined);
    expect(mathEnforcer.subtractTen({})).to.equal(undefined);
  });
  it("should work with floating numbers", function () {
    expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
    expect(mathEnforcer.subtractTen(-10.5)).to.equal(-20.5);
   });
});

describe("mathEnforcer.sum", () => {
  it("should return the sum of the two parameters", function () {
    expect(mathEnforcer.sum(5, 5)).to.equal(10);
  });
  it("should return undefined if any of the two parameters is not a number", function () {
    expect(mathEnforcer.sum(5, "5")).to.equal(undefined);
    expect(mathEnforcer.sum("5", 5)).to.equal(undefined);
    expect(mathEnforcer.sum("5", "5")).to.equal(undefined);
    expect(mathEnforcer.sum([5], [])).to.equal(undefined);
    expect(mathEnforcer.sum({}, {})).to.equal(undefined);
    it("should work with floating numbers", function () {
      expect(mathEnforcer.sum(0.5,5.5)).to.equal(6);
      expect(mathEnforcer.sum(-0.5,-5.5)).to.equal(-6);
    
     });
  });
});
