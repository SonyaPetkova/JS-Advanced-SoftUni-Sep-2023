import { assert, expect } from "chai";
import { describe, it } from "mocha";
function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }

  let reversed = arr.slice(0).reverse(); // Clone and reverse

  let equal = JSON.stringify(arr) == JSON.stringify(reversed);

  return equal;
}

describe("isSymetric", function () {
  it("should return true if arr wit numbers is symetric", function () {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it("should return true if arr with strings is symetric", function () {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
  });

  it("should return false if arr with strings is non-symetric", function () {
    expect(isSymmetric([12, 15, 3, 4])).to.be.false;
  });
  it("should return false if arr with numbers is non-symetric", function () {
    expect(isSymmetric(["a", "c", "b", "a"])).to.be.false;
  });

  it("should return false for non-arrays", function () {
    expect(isSymmetric(12)).to.be.false;
    expect(isSymmetric("soni")).to.be.false;
    expect(isSymmetric({ soni: 2 })).to.be.false;
    expect(isSymmetric(null)).to.be.false;
    expect(isSymmetric(undefined)).to.be.false;
  });
  it("should return true for empty arr", function () {
    expect(isSymmetric([])).to.be.true;
  });

  it("should return false for an array with only one element to be true", function () {
    expect(isSymmetric(["a"])).to.be.true;
  });
  it("should return true for an argument with more than one arrays that are the same", function () {
    expect(isSymmetric(["a"], ["a"])).to.be.true;
  });
  it("should return true for an argument with more than one arrays that are not the same", function () {
    expect(isSymmetric(["a"], ["b"])).to.be.true;
  });
  it("should handle nested arrays", function () {
    expect(isSymmetric([[1, 2], [2, 1]])).to.be.false;
    expect(isSymmetric([[1, 2], [3, 4]])).to.be.false;
  });
  it("should handle different types of input", function () {
    expect(isSymmetric([[1, 2],"a"])).to.be.false;
    expect(isSymmetric([1,"2","2",1])).to.be.true;
  });

  it("should handle an array with only two different elements", function () {
    expect(isSymmetric(["a", "b"])).to.be.false;
  });

  it("should return false with a string", function () {
    expect(isSymmetric("abba")).to.be.false;
  });
});
