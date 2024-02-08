import { assert, expect } from "chai";
import { describe } from "mocha";

function createCalculator() {
  let value = 0;

  return {
    add: function (num) {
      value += Number(num);
    },

    subtract: function (num) {
      value -= Number(num);
    },

    get: function () {
      return value;
    },
  };
}

const calculator = createCalculator();
calculator.add("a");
// calculator.subtract(20);
console.log(typeof calculator.get());

describe("createCalculator", function () {
  const calculator = createCalculator();

  it("should return an onject", function () {
    assert(createCalculator(), "object");
    
  });
  it("should have property  add which is a function", function () {
    expect(createCalculator()).to.have.property("add").to.be.a("function");
  });
  it("should have property  subtract which is a function", function () {
    expect(createCalculator()).to.have.property("subtract").to.be.a("function");
  });
  it("should have property  get which is a function", function () {
    expect(createCalculator()).to.have.property("get").to.be.a("function");
  });
  it("should get the value", function () {
    calculator.get();
    expect(calculator.get()).to.equal(0);
  });

  it("add should parse the strings into numbers and add the value to the current value ", function () {
    calculator.add("5");
    calculator.add(5);
    expect(calculator.get()).to.equal(10);
  });
  it("subtract should parse the strings into numbers and subtract the value from the current value ", function () {
    calculator.subtract("5");
    calculator.subtract(5);
    
    expect(calculator.get()).to.equal(0);
  });

  it("add should return NaN if the parameter that it takes is not either a number or a string containing a number ", function () {
    const stringParam = createCalculator();
    stringParam.add("[]");
    const objectParam = createCalculator();
    objectParam.add({});
    const arrParam=createCalculator();
    arrParam.add(["a",2])
    expect(objectParam.get()).to.be.NaN;
    expect(stringParam.get()).to.be.NaN;
    expect(arrParam.get()).to.be.NaN;
  });
  it("add should return 0 if the parameter that it takes is an empty array or an empty string", function () {
    calculator.add("");
    calculator.add([]);
    expect(calculator.get()).to.equal(0);
  });
  it("adsubtractd should return NaN if the parameter that it takes is not either a number or a string containing a number ", function () {
    const stringParam = createCalculator();
    stringParam.subtract("[]");
    const objectParam = createCalculator();
    objectParam.subtract({});
    const arrParam=createCalculator();
    arrParam.subtract(["a",1])
    expect(objectParam.get()).to.be.NaN;
    expect(stringParam.get()).to.be.NaN;
    expect(arrParam.get()).to.be.NaN;
  });
  it("subtract should return 0 if the parameter that it takes is an empty array or an empty string", function () {
    calculator.subtract("");
    calculator.subtract([]);
    expect(calculator.get()).to.equal(0);
  });

  it("should not allow direct modification of the internal sum", function () {

  });

});
