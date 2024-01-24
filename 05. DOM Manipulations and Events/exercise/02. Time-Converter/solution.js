function attachEventsListeners() {
  const convertButtons = document.querySelectorAll(`[type=button]`);
  const labelsArr = Array.from(document.querySelectorAll);
  const inputs=Array.from(document.querySelectorAll("input[type=text]"))
  for (const btn of convertButtons) {
    btn.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    let inputValue = e.target.parentElement.children[1].value;
    let unit = e.target.parentElement.children[1].id;

    switch (unit) {
      case "days":propagateValue(inputValue)
        break;
      case "hours":propagateValue(inputValue/24)
        break;
      case "minutes":propagateValue(inputValue/24/60)
        break;
      case "seconds":propagateValue(inputValue/24/60/60)
        break;
    }
  }

  function propagateValue(value) {
    inputs[0].value=value;
    let currentValue=value*24;// hours

    for (let i = 1; i <inputs.length; i++){
        let input = inputs[i];
        input.value=currentValue;
        currentValue*=60//minutes second
1       
    }

  }
}
