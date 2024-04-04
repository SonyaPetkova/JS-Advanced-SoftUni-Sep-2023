import { describe, it } from "mocha";
import { expect } from "chai";

const chooseYourCar = {
  choosingType(type, color, year) {
    if (year < 1900 || year > 2022) {
      throw new Error(`Invalid Year!`);
    } else {
      if (type == "Sedan") {
        if (year >= 2010) {
          return `This ${color} ${type} meets the requirements, that you have.`;
        } else {
          return `This ${type} is too old for you, especially with that ${color} color.`;
        }
      }
      throw new Error(`This type of car is not what you are looking for.`);
    }
  },

  brandName(brands, brandIndex) {
    let result = [];

    if (
      !Array.isArray(brands) ||
      !Number.isInteger(brandIndex) ||
      brandIndex < 0 ||
      brandIndex >= brands.length
    ) {
      throw new Error("Invalid Information!");
    }
    for (let i = 0; i < brands.length; i++) {
      if (i !== brandIndex) {
        result.push(brands[i]);
      }
    }
    return result.join(", ");
  },

  carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {
    let litersPerHundredKm = (
      (consumptedFuelInLiters / distanceInKilometers) *
      100
    ).toFixed(2);

    if (
      typeof distanceInKilometers !== "number" ||
      distanceInKilometers <= 0 ||
      typeof consumptedFuelInLiters !== "number" ||
      consumptedFuelInLiters <= 0
    ) {
      throw new Error("Invalid Information!");
    } else if (litersPerHundredKm <= 7) {
      return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
    } else {
      return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
    }
  },
};

describe("Choose Your Car", function () {
  describe("choosingType", function () {
    it("should return appropriate message for type sedan and a year greater or equal to 2010", function () {
      expect(chooseYourCar.choosingType("Sedan", "Red", 2010)).equal(
        "This Red Sedan meets the requirements, that you have."
      );
    });
    it("should throw an error if the year is less than 1900 and more than 2022", function () {
      expect(() => chooseYourCar.choosingType("Sedan", "Red", 1899)).to.throw(
        `Invalid Year!`
      );
      expect(() => chooseYourCar.choosingType("Sedan", "Red", 2023)).to.throw(
        `Invalid Year!`
      );
    });

    it("should throw an error if the value of the string type is different than Sedan", function () {
      expect(() => chooseYourCar.choosingType("Se", "Red", 2021)).to.throw(
        `This type of car is not what you are looking for.`
      );
    });
    it("should return appropriate message for all valid data but year that is less than 2010", function () {
      expect(chooseYourCar.choosingType("Sedan", "Red", 2009)).equal(
        `This Sedan is too old for you, especially with that Red color.`
      );
    });
  });

  describe("brandName", function () {
    it("should remove the given as a parameter index index from the given as a parameter brandArr", function () {
      expect(chooseYourCar.brandName(["Lincoln", "BMW", "Mercedes"], 0)).equal(
        `BMW, Mercedes`
      );
    });

    it("should throw an error if the value of the brands Parameter is different than array", function () {
      expect(() => chooseYourCar.brandName(0, 0)).to.throw(
        `Invalid Information!`
      );
    });
    it("should throw an error if the value of the brandIndex Parameter is different than number", function () {
      expect(() => chooseYourCar.brandName(["a"], "0")).to.throw(
        `Invalid Information!`
      );
    });

    it("should throw an error if the value of the brandIndex Parameter is less than 0 or greater than the length", function () {
      expect(() => chooseYourCar.brandName(["a"], -5)).to.throw(
        `Invalid Information!`
      );
      expect(() => chooseYourCar.brandName(["a"], 1)).to.throw(
        `Invalid Information!`
      );
    });
  });

  describe("carFuelConsumption", function () {
    it("should  return the appropriate message for consumption of fuel that is less than or equal 7,as we have two parameters distanceinKm and computedFuel in L", function () {
      expect(chooseYourCar.carFuelConsumption(100, 6)).equal(
        `The car is efficient enough, it burns 6.00 liters/100 km.`
      );
      expect(chooseYourCar.carFuelConsumption(100, 7)).equal(
        `The car is efficient enough, it burns 7.00 liters/100 km.`
      );
    });
    it("should  return the appropriate message for consumption of fuel that is greater than 7,as we have two parameters distanceinKm and computedFuel in L", function () {
      expect(chooseYourCar.carFuelConsumption(100, 10)).equal(
        `The car burns too much fuel - 10.00 liters!`
      );
    });
    it("should throw an error if the value of the both Parameters is not a number", function () {
      expect(() => chooseYourCar.carFuelConsumption(["a"], 1)).to.throw(
        `Invalid Information!`
      );
      expect(() => chooseYourCar.carFuelConsumption(1, 0)).to.throw(
        `Invalid Information!`
      );
    });
    it("should throw an error if the value of the both Parameters is a negative number", function () {
      expect(() => chooseYourCar.carFuelConsumption(-5, 1)).to.throw(
        `Invalid Information!`
      );
      expect(() => chooseYourCar.carFuelConsumption(1, -10)).to.throw(
        `Invalid Information!`
      );
    });
  });
});
