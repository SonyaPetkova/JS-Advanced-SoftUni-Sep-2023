window.addEventListener("load", solve);
function solve() {
  const firstNameRef = document.getElementById("first-name");
  const lastNameRef = document.getElementById("last-name");
  const ageRef = document.getElementById("age");
  const storyTitleREf = document.getElementById("story-title");
  const genreRef = document.getElementById("genre");
  const storyRef = document.getElementById("story");
  const publishBtnRef = document.getElementById("form-btn");
  const previewFieldRef = document.getElementById("preview-list");

  publishBtnRef.addEventListener("click", publishHandler);

  function publishHandler(e) {
    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    const age = ageRef.value;
    const storyTitle = storyTitleREf.value;
    const genre = genreRef.value;
    const story = storyRef.value;

    if (
      firstName === "" ||
      lastName === "" ||
      age === "" ||
      storyTitle === "" ||
      story === ""
    ) {
      return firstName;
    }

    let li = createPreviewDAta(
      firstName,
      lastName,
      age,
      storyTitle,
      genre,
      story
    );
    previewFieldRef.appendChild(li);
    clearData();
    publishBtnRef.disabled = true;
  }

  function clearData() {
    firstNameRef.value = "";
    lastNameRef.value = "";
    ageRef.value = "";
    storyTitleREf.value = "";
    genreRef.value = "Disturbing";
    storyRef.value = "";
  }
  function createPreviewDAta(
    firstName,
    lastName,
    age,
    storyTitle,
    genre,
    story
  ) {
    let li = document.createElement("li");
    li.classList.add("story-info");

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstName} ${lastName}`;

    let pAge = document.createElement("p");
    pAge.textContent = `Age: ${age}`;

    let pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${storyTitle}`;

    let pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genre}`;

    let pStory = document.createElement("p");
    pStory.textContent = `${story}`;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    li.appendChild(article);
    li.appendChild(createButton("save-btn", "Save-Story", saveHandler));
    li.appendChild(createButton("edit-btn", "Edit-Story", onEdit));
    li.appendChild(createButton("delete-btn", "Delete-Story", deleteHandler));
    return li;
  }
  function onEdit(e) {
    let name = e.target.parentElement.querySelector("article h4").textContent;
    let age =
      e.target.parentElement.querySelectorAll("article p")[0].textContent;
    
    let genre =
      e.target.parentElement.querySelectorAll("article p")[2].textContent;
    let story =
      e.target.parentElement.querySelectorAll("article p")[3].textContent;
let titleArr=e.target.parentElement.querySelectorAll("article p")[1].textContent.split(" ");

titleArr.shift();
console.log(titleArr);
let title =titleArr.join(" ");
console.log(title);
      
firstNameRef.value = name.split(" ")[1];
    lastNameRef.value = name.split(" ")[2];
    ageRef.value = age.split(" ")[1];
    storyTitleREf.value = title
    genreRef.value = genre.split(" ")[1];
    storyRef.value = story;
    previewFieldRef.removeChild(e.target.parentElement);

    publishBtnRef.disabled = false;
  }
  function saveHandler(e) {
    console.log();
    let el = document.querySelector("#main");
    el.innerHTML = "<h1>Your scary story is saved!</h1>";
  }
  function deleteHandler(e) {
    let el = e.target.parentNode.parentNode.querySelector("li");

    el.remove();

    publishBtnRef.disabled = false;
  }

  function createButton(styleClass, text, callBack) {
    let btn = document.createElement("button");
    btn.classList.add(styleClass);
    btn.textContent = text;
    btn.addEventListener("click", callBack);
    return btn;
  }
}