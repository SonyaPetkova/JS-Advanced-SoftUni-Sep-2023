function lockedProfile() {
  console.log("TODO...");
  const showBtn = document.getElementsByTagName("button");

  for (const btn of showBtn) {
    btn.addEventListener("click", showMore);
  }
  function showMore(e) {
    let current = e.target.parentNode;

    let hiddenField = current.querySelector("div div ");
    let radioBtn = current.getElementsByTagName("input")[0];

    if (!radioBtn.checked) {
      hiddenField.style.display = "block";
      e.target.textContent = "Hide it";
      if (e.target.textContent === "Hide it") {
        e.target.addEventListener("click", hideInfo);
      }
    }
    function hideInfo(e) {
      console.log(e.target);
      if (!radioBtn.checked) {
        hiddenField.style.display = "none";
        e.target.textContent = "Show more";
      }
    }
  }
}
