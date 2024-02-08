import {expect,assert} from "chai"
import { describe, it } from "mocha";

function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined; // Red value is invalid
  }

  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined; // Green value is invalid
  }
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined; // Blue value is invalid
  }
  return (
    "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2)
  );
}

console.log(rgbToHexColor()); 


describe("rgbToHexColor",function () {
   it("should return the right hex color given random arguments in range ",function () {
    expect(rgbToHexColor(120,13,45)).to.equal("#780D2D");
    expect(rgbToHexColor(0,0,0)).to.equal("#000000");
    expect(rgbToHexColor(255,255,255)).to.equal("#FFFFFF");
   }) 
   it("should return undefined if an argument is not a number",function () {
    expect(rgbToHexColor([12],2,3)).to.equal(undefined);
    expect(rgbToHexColor(12,"2",3)).to.equal(undefined);
    expect(rgbToHexColor(250,250,"aa")).to.equal(undefined);
   }) 
   it("should return undefined if there are less than 3 arguments",function () {
    expect(rgbToHexColor(2)).to.equal(undefined);
    expect(rgbToHexColor(12,3)).to.equal(undefined);
    expect(rgbToHexColor()).to.equal(undefined);
   }) 
   
   it("should return undefined if there are less than 3 arguments",function () {
    expect(rgbToHexColor(2)).to.equal(undefined);
    expect(rgbToHexColor(12,3)).to.equal(undefined);
    expect(rgbToHexColor()).to.equal(undefined);
   }) 
   it("should return undefined if any of the arguments outside teh range",function () {
    expect(rgbToHexColor(2,256,1)).to.equal(undefined);
    expect(rgbToHexColor(-1,250,5)).to.equal(undefined);
    expect(rgbToHexColor(-8,3000,35000)).to.equal(undefined);
   }) 
   it("should return string",function () {
    assert.typeOf(rgbToHexColor(0,0,0), 'string');
    
   }) 
   it("should return undefined if any argument is null or undefined", function () {
    expect(rgbToHexColor(null, 255, 0)).to.equal(undefined);
    expect(rgbToHexColor(128, undefined, 64)).to.equal(undefined);
  });

  it("should return undefined if any argument is a float", function () {
    expect(rgbToHexColor(12.5, 2, 3)).to.equal(undefined);
    expect(rgbToHexColor(12, 3, 4.7)).to.equal(undefined);
  });
})