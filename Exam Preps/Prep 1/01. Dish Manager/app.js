window.addEventListener("load", solve);

function solve() {
  const chefInfoDataRef = Array.from(document.querySelectorAll("label input"));
  const submitButtonRef = document.querySelector("#form-btn");
  const genderRef = document.querySelector("#genderSelect");
  const dishInfoRef = document.querySelector("#task");
  const inProgressFieldRef = document.querySelector("#in-progress");
  const dishesCounterRef = document.querySelector("#progress-count");
  let dishesCounterAsNum = Number(dishesCounterRef.textContent);

  submitButtonRef.addEventListener("click", submitHandler);

  function submitHandler(e) {
    dishesCounterAsNum++;
    dishesCounterRef.textContent = dishesCounterAsNum;
    [firstName, lastName, age] = chefInfoDataRef.map((line) => line.value);
    let gender = genderRef.value;
    let dishInfo = dishInfoRef.value;

    //validate the input
    if (firstName === "" || lastName === "" || age === "" || dishInfo === "") {
      return;
    }

    taskProcessing(firstName, lastName, age, gender, dishInfo);
  }
  function taskProcessing(firstName, lastName, age, gender, dishInfo) {
    //create a new task in progress
    inProgressFieldRef.innerHTML = `<h3>In progress</h3><li class="each-line"> <article><h4>${firstName} ${lastName}</h4><p>${gender}, ${age}</p> <p>Dish description: ${dishInfo}</p></article> <button class="edit-btn">Edit</button><button class="complete-btn">Mark as complete</button> </li>`;
    //clear the input
    chefInfoDataRef.map((line) => (line.value = ""));
    dishInfoRef.value = "";
    genderRef.value = "Male";

    const editBtnRef = document.querySelector(".edit-btn");
    editBtnRef.addEventListener("click", editHandler);
    const completeBtnRef = document.querySelector(".complete-btn");
    completeBtnRef.addEventListener("click", completeHandler);
    function editHandler(e) {
      dishesCounterAsNum--;
      dishesCounterRef.textContent = dishesCounterAsNum;

      inProgressFieldRef.innerHTML = "<h3>In progress</h3>";
      console.log(chefInfoDataRef);
      chefInfoDataRef[0].value = firstName;
      chefInfoDataRef[1].value = lastName;
      chefInfoDataRef[2].value = age;
      genderRef.value = gender;
      dishInfoRef.value = dishInfo;
    }
    function completeHandler(e) {
      dishesCounterAsNum--;
      dishesCounterRef.textContent = dishesCounterAsNum;
      inProgressFieldRef.querySelector(".each-line").remove();
      inProgressFieldRef;

      const finishFieldRef = document.querySelector("#finished");
      finishFieldRef.innerHTML = `<li class="each-line"> <article><h4>${firstName} ${lastName}</h4><p>${gender}, ${age}</p><p>Dish description: ${dishInfo}</p></article>`;
      const clearBtnRef = document.querySelector("#clear-btn");
      clearBtnRef.addEventListener("click", clearHandler);
      function clearHandler(e) {
        finishFieldRef.innerHTML = "";
      }
    }
  }
}
