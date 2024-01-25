function encodeAndDecodeMessages() {
  console.log("TODO...");
  const encodeAreaRef = document.querySelectorAll("div textarea")[0];
  const decodeAreaRef = document.querySelectorAll("div textarea")[1];
  const encodeBtn = document.querySelectorAll("button")[0];
  const decodeBtn = document.querySelectorAll("button")[1];

  encodeBtn.addEventListener("click", encodeHandler);
  decodeBtn.addEventListener("click", decodeHandler);

  function encodeHandler(e) {
    let current = e.target.parentNode;
    let message = current.querySelector("textarea").value;
    message = encode(message);

    decodeAreaRef.value = message;
    encodeAreaRef.value = "";
  }
  function encode(message) {
    let charsArr = message.split("");
    let encodeMsg = [];
    charsArr.forEach((element) => {
      let nextAscIINum = element.charCodeAt() + 1;
      let encodedChar = String.fromCharCode(nextAscIINum);
      encodeMsg.push(encodedChar);
    });
    return encodeMsg.join("");
  }
  function decodeHandler(e) {
    let current = e.target.parentNode;
    let message = current.querySelector("textarea").value;
    message = decode(message);
    decodeAreaRef.value = message;
  }
  function decode(message) {
    let charsArr = message.split("");
    let encodeMsg = [];
    charsArr.forEach((element) => {
      let nextAscIINum = element.charCodeAt() - 1;
      let encodedChar = String.fromCharCode(nextAscIINum);
      encodeMsg.push(encodedChar);
    });
    return encodeMsg.join("");
  }
}
