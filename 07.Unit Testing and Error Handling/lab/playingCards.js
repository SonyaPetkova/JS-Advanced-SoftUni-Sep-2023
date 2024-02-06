function playingCards(cardFace, cardSuit) {
  let cardOBj = {
    cardFace,
    cardSuit,
   toString: function (){
   return `${this.cardFace}${this.cardSuit}`;
   }
  };
  let validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let validSuits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };


  if (
    validFaces.includes(cardFace) &&
  Object.keys(validSuits).includes(cardSuit)
  ) {
     cardOBj.cardSuit = Object.values(validSuits[cardSuit]).toString();
  } else {
    throw new Error();
  }
  return cardOBj
}

playingCards("A", "S");
playingCards("10", "H");
 playingCards("1", "C");
