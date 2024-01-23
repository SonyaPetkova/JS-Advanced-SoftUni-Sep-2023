function attachGradientEvents() {
  console.log("TODO:...");
  const gradientBox = document.getElementById("gradient");
  const resultValue = document.getElementById("result");
  function focus(e) {
    let targetWidth = e.target.clientWidth;
    let mousePosition = e.offsetX / targetWidth;
    let mousePositionPercents = Math.trunc(mousePosition * 100);

    resultValue.textContent = mousePositionPercents + "%";
  }
  
  function blur(e) {
    console.log(e.target);
    resultValue.textContent=""

  }

  gradientBox.addEventListener("mousemove", focus);
  gradientBox.addEventListener("mouseout",blur)
}
