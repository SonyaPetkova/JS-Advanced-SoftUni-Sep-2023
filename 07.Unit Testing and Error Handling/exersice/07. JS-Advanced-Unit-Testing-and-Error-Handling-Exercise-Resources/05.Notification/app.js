function notify(message) {
  console.log("todo");
  const notificationRef = document.getElementById("notification");
  console.log(notificationRef);

  notificationRef.textContent = message;
  notificationRef.style.display = "block";

  notificationRef.addEventListener(
    "click",
    () => (notificationRef.style.display = "none")
  );
}
