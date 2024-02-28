import { expect, assert } from "chai";
import { it } from "mocha";

class PaymentPackage {
  constructor(name, value) {
    this.name = name;

    this.value = value;

    this.VAT = 20; // Default value

    this.active = true; // Default value
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue !== "string") {
      throw new Error("Name must be a non-empty string");
    }
    if (newValue.length === 0) {
      throw new Error("Name must be a non-empty string");
    }
    this._name = newValue;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("Value must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("Value must be a non-negative number");
    }
    this._value = newValue;
  }
  get VAT() {
    return this._VAT;
  }
  set VAT(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("VAT must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("VAT must be a non-negative number");
    }
    this._VAT = newValue;
  }
  get active() {
    return this._active;
  }
  set active(newValue) {
    if (typeof newValue !== "boolean") {
      throw new Error("Active status must be a boolean");
    }
    this._active = newValue;
  }
  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? " (inactive)" : ""),
      `- Value (excl. VAT): ${this.value}`,

      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`,
    ];
    return output.join("\n");
  }
}

describe("create instance of Payment Package", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Sonya", 10);
  });
  it("should return the instance name Sonya", function () {
    expect(paymentPackage._name).equal("Sonya");
  });
  it("should return the instance value 10", function () {
    expect(paymentPackage._value).equal(10);
  });
  it("should return the instance VAT 20", function () {
    expect(paymentPackage._VAT).equal(20);
  });
  it("should return the instance active property:true ", function () {
    expect(paymentPackage._active).equal(true);
  });
});

describe("test Accessor", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Sonya", 30);
  });

  it("should correctly get and set names", function () {
    expect(paymentPackage.name).equal("Sonya");
    paymentPackage.name = "Pesho";
    expect(paymentPackage.name).equal("Pesho");
  });
  it("should correctly get and set values", function () {
    expect(paymentPackage.value).equal(30);
    paymentPackage.value = 40;
    expect(paymentPackage.value).equal(40);
  });

  it("should correctly get and set VAT", function () {
    expect(paymentPackage.VAT).equal(20);
    paymentPackage.VAT = 40;
    expect(paymentPackage.VAT).equal(40);
  });
  it("should correctly get and set active property", function () {
    expect(paymentPackage.active).equal(true);
    paymentPackage.active = false;
    expect(paymentPackage.active).equal(false);
  });
});

describe("create instance of Payment Package", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Sonya", 10);
  });
  it("should return the instance name Sonya", function () {
    expect(paymentPackage._name).equal("Sonya");
  });
  it("should return the instance value 10", function () {
    expect(paymentPackage._value).equal(10);
  });
  it("should return the instance VAT 20", function () {
    expect(paymentPackage._VAT).equal(20);
  });
  it("should return the instance active property:true ", function () {
    expect(paymentPackage._active).equal(true);
  });
});

describe("test Accessor", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Sonya", 30);
  });

  it("should correctly get and set names", function () {
    expect(paymentPackage.name).equal("Sonya");
    paymentPackage.name = "Pesho";
    expect(paymentPackage.name).equal("Pesho");
  });
  it("should correctly get and set values", function () {
    expect(paymentPackage.value).equal(30);
    paymentPackage.value = 40;
    expect(paymentPackage.value).equal(40);
    paymentPackage.value = 0;
    expect(paymentPackage.value).equal(0);
  });

  it("should correctly get and set VAT", function () {
    expect(paymentPackage.VAT).equal(20);
    paymentPackage.VAT = 40;
    expect(paymentPackage.VAT).equal(40);
    paymentPackage.VAT = 0;
    expect(paymentPackage.VAT).equal(0);
  });
  it("should correctly get and set active property", function () {
    expect(paymentPackage.active).equal(true);
    paymentPackage.active = false;
    expect(paymentPackage.active).equal(false);
  });
});

describe("test PaymentPackage with incorrect value", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Sonya", 30);
    });
  
    it("should throw an error for incorect name type", function () {
      assert.throws(() => new PaymentPackage("", 10));
      assert.throws(() => new PaymentPackage(10, 10));
    });
   
  
    it("should throw an error for incorrect number", function () {
      assert.throws(() => new PaymentPackage("Sonya", -10));
      assert.throws(() => new PaymentPackage("Sonya", "10"));
    });
   
  
    it("should throw an error for incorrect VAT", function () {
      assert.throws(() => (paymentPackage.VAT = "GOSHO"));
      assert.throws(() => (paymentPackage.VAT = -456));
    });
    
  
    it("should throw an error for incorrect property active", function () {
      assert.throws(() => (paymentPackage.active = "GOSHO"));
      assert.throws(() => (paymentPackage.active = -456));
    });
   
  });

describe("toString() PaymentPackage", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Sonya", 30);
  });
  it("should test active", function () {
    let res = [
      `Package: Sonya`,
      "- Value (excl. VAT): 30",
      "- Value (VAT 20%): 36",
    ].join("\n");

    assert.equal(paymentPackage.toString(), res);
  });

  it("should test active property with inactive state", function () {
    paymentPackage.active = false;
    let res = [
      `Package: Sonya (inactive)`,
      "- Value (excl. VAT): 30",
      "- Value (VAT 20%): 36",
    ].join("\n");

    assert.equal(paymentPackage.toString(), res);
  });
});
