import { expect } from "chai";
import { describe } from "mocha";

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}

console.log(lookupChar([], 3));

describe("lookupChar", () => {
  it("should return the char at the given index ", function () {
    expect(lookupChar("char", 3)).to.equal("r");
    expect(lookupChar("char", 0)).to.equal("c");
  });

  it("should return undefined for different parameter than a string as a first parameter", function () {
    expect(lookupChar([], 0)).to.equal(undefined);
    expect(lookupChar(2, 0)).to.equal(undefined);
  });

  it("should return undefined for different parameter than an Integer as second parameter ", function () {
    expect(lookupChar("abc", "4")).to.equal(undefined);
    expect(lookupChar("abc", [])).to.equal(undefined);
    expect(lookupChar("abc", 3.4)).to.equal(undefined);
  });
  it("should return Incorrect index for index < 0", function () {
    expect(lookupChar("abc", -1)).to.equal("Incorrect index");

  });
  it("should return Incorrect index for index that is bigger than or equal to the string length", function () {
    expect(lookupChar("abc", 4)).to.equal("Incorrect index");
    expect(lookupChar("abc", 3)).to.equal("Incorrect index");

  });

});
