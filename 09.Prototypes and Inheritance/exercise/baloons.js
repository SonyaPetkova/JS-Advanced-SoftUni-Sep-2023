 function solution() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this._ribbon = { color: ribbonColor, length: ribbonLength };
    }
    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }
    get text() {
      return this._text;
    }
  }

  return {
    Balloon: Balloon,
    PartyBalloon: PartyBalloon,
    BirthdayBalloon:BirthdayBalloon
  };
}


const { BirthdayBalloon } = solution();

const birthdayBalloon = new BirthdayBalloon('green', 20, 'purple', 8, 'Happy Birthday!');
console.log(birthdayBalloon); // BirthdayBalloon { color: 'green', gasWeight: 20, _ribbon: { color: 'purple', length: 8 }, _text: 'Happy Birthday!' }
console.log(birthdayBalloon.text); // 'Happy Birthday!'
console.log(birthdayBalloon.ribbon); // { color: 'purple', length: 8 }