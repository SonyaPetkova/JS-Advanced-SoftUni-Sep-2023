import { expect } from "chai";
import { describe, it } from "mocha";
const movieTheater = {
  ageRestrictions(movieRating) {
    switch (movieRating) {
      case "G":
        return "All ages admitted to watch the movie";
      case "PG":
        return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
      case "R":
        return "Restricted! Under 17 requires accompanying parent or adult guardian";
      case "NC-17":
        return "No one under 17 admitted to watch the movie";
      default:
        return "There are no age restrictions for this movie";
    }
  },
  moneySpent(tickets, food, drinks) {
    if (
      typeof tickets !== "number" ||
      !Array.isArray(food) ||
      !Array.isArray(drinks)
    ) {
      throw new Error("Invalid input");
    }

    let bill = 0;

    bill += tickets * 15;

    food.forEach((element) => {
      switch (element) {
        case "Nachos":
          bill += 6;
          break;
        case "Popcorn":
          bill += 4.5;
          break;
      }
    });

    drinks.forEach((element) => {
      switch (element) {
        case "Soda":
          bill += 2.5;
          break;
        case "Water":
          bill += 1.5;
          break;
      }
    });

    if (bill > 50) {
      bill -= bill * 0.2;
      return `The total cost for the purchase with applied discount is ${bill.toFixed(
        2
      )}`;
    } else {
      return `The total cost for the purchase is ${bill.toFixed(2)}`;
    }
  },
  reservation(rowsArray, neededSeatsCount) {
    if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
      throw new Error("Invalid input");
    }

    let availableRows = [];
    rowsArray.forEach((row) => {
      if (row.freeSeats >= neededSeatsCount) {
        availableRows.push(row.rowNumber);
      }
    });

    return Math.max(...availableRows);
  },
};

describe("Movie Theater", () => {
  describe("ageRestrictions", () => {
    it("should print the appropriate message for G parameter", () => {
      expect(movieTheater.ageRestrictions("G")).to.equal(
        `All ages admitted to watch the movie`
      );
    });
    it("should print the appropriate message for PG parameter", () => {
      expect(movieTheater.ageRestrictions("PG")).to.equal(
        `Parental guidance suggested! Some material may not be suitable for pre-teenagers`
      );
    });
    it("should print the appropriate message for R parameter", () => {
      expect(movieTheater.ageRestrictions("R")).to.equal(
        `Restricted! Under 17 requires accompanying parent or adult guardian`
      );
    });
    it("should print the appropriate message for NC-17 parameter", () => {
      expect(movieTheater.ageRestrictions("NC-17")).to.equal(
        `No one under 17 admitted to watch the movie`
      );
    });

     it("should print the appropriate message for a different parameter", () => {
      expect(movieTheater.ageRestrictions("different")).to.equal(
        `There are no age restrictions for this movie`
      );
    });
    
    
  });
  describe("moneySpent", () => {
    it("should print the appropriate message and sum when total cost is less than 50", () => {
      expect(movieTheater.moneySpent(1, ["Nachos"], ["Soda"])).to.equal(`The total cost for the purchase is 23.50`);
    });

    it("should print the appropriate message and sum when total cost is more than 50 + discount", () => {
      expect(movieTheater.moneySpent(10, ["Nachos"], ["Soda"])).to.equal(`The total cost for the purchase with applied discount is 126.80`);
    });

    it("should throw an error for invalid input First Parameter", () => {
      expect(()=> movieTheater.moneySpent("1", ["Nachos"], ["Soda"])).to.throw("Invalid input");
    }); it("should throw an error for invalid input Second Parameter", () => {
      expect(()=>movieTheater.moneySpent(10, 2, ["Soda"])).to.throw("Invalid input");
    }); it("should throw an error for invalid input Third Parameter", () => {
      expect(()=>movieTheater.moneySpent(10, ["Nachos"], "fds")).to.throw("Invalid input");
    });
  });
  

  describe("reservation", () => {
    it("should return the row with the most free seats", () => {

expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],5)).to.equal(2);

    });
  });
});
