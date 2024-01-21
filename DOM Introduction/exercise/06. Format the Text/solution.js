function solve() {
  //TODO
  let text = document.getElementById("input").value;
  let sentencesArr = text.split(".");
  let result = [];
  let counter = 0;
  let currentP = "<p>";
  if (sentencesArr.length <= 3) {
    document.getElementById("output").innerHTML = `<p>${text}</>`;
    return;
  }

  for (let i = 1; i <= sentencesArr.length; i++) {
    let currentSentence = sentencesArr[i - 1];

    if (currentSentence.length === 0 || currentSentence === " ") {
      continue;
    }

    currentP += currentSentence + ".";

    if (i % 3 === 0 || i === sentencesArr.length) {
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
