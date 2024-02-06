function deckOfCards(arr) {
  let cardOBj = new Map();

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

  for (const cardEl of arr) {
    let face = "";
    let suit = "";
    if (cardEl.length === 3) {
      face = "10";
      suit = cardEl.split("").pop();
    } else {
      [face, suit] = cardEl.split("");
    }
    if (
        validFaces.includes(face) &&
        Object.keys(validSuits).includes(suit)
      ){
        createdCard(face, suit);
      }else {
        return console.log(`Invalid card: ${face}${suit}`);
       }
    
  }

  function createdCard(cardFace, cardSuit) {
     
      cardOBj.set(cardFace, Object.values(validSuits[cardSuit]).toString());
     
  }
  let output = "";
  for (const [face, suit] of cardOBj) {
    output += `${face}${suit} `;
  }

  console.log(output);
}

deckOfCards(["AS", "10D", "KH", "2C"]);
deckOfCards(['5S', '3D', 'QD', '1C'])
