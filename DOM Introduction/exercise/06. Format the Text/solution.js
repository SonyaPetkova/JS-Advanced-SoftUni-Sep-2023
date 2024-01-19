function solve() {
  //TODO
  let text = document.getElementById("input").value;
  let sentencesArr = text.split(".");
  let result = [];
  let counter = 0;
  let currentP = "<p>";
  let sentencesArrLength=sentencesArr.length;
  if (sentencesArrLength <= 3) {
    document.getElementById("output").innerHTML = `<p>${text}</>`;
    return;
  }

  for (let i = 1; i <= sentencesArrLength; i++) {
    let currentSentence = sentencesArr[i - 1];

    if (currentSentence.length === 0 || currentSentence === " ") {
      result.push(currentP);
      continue;
    }

    currentP += currentSentence + ".";

    if (i % 3 === 0 || i === sentencesArr) {
      currentP += "</p>";
      result.push(currentP);
      currentP = "<p>";
    }
    console.log(result);
  }
  if (sentencesArr.length > 3) {
    document.getElementById("output").innerHTML = result.join(" ");
  }
}
