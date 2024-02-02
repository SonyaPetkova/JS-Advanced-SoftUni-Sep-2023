function solve() {
  const taskFieldRef = document.getElementById("task");
  const descriptionFieldREf = document.getElementById("description");
  const dueDateFieldRef = document.getElementById("date");
  const addBtnRef = document.getElementById("add");

  addBtnRef.addEventListener("click", addBtnHandler);

  function addBtnHandler(e) {
    e.preventDefault();
    const taskInput = taskFieldRef.value;
    const descriptionInput = descriptionFieldREf.value;
    const dueDate = dueDateFieldRef.value;

    if (!taskInput || !descriptionInput || !dueDate) {
      return;
    }

    addArticle(taskInput, descriptionInput, dueDate);

    function addArticle(name, description, date) {
      const openSectionArticlesRef = document.querySelector(
        "section:nth-child(2) div:nth-child(2)"
      );
      let article = document.createElement("article");

      article.innerHTML = `
        <h3>${name}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
        <button class="green">Start</button>
        <button class="red">Delete</button>
        </div>
        `;
      openSectionArticlesRef.appendChild(article);

      const startBtn = Array.from(openSectionArticlesRef.querySelectorAll(".green"));
      const deleteBtn = Array.from(openSectionArticlesRef.querySelectorAll(".red"));

      startBtn.forEach((element) => {
        element.addEventListener("click", startBtnHandler);
      });

      deleteBtn.forEach((el) => {
        el.addEventListener("click", deleteButtonHandlerOrangeSection);
      });

      function startBtnHandler(e) {
        const currentArticle = e.target.parentNode.parentNode;
        const inProgressSectionRef = document.getElementById("in-progress");

        currentArticle.innerHTML = `<h3>${name}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
        <button class="red">Delete</button>
        <button class="orange">Finish</button>
        </div>`;
        inProgressSectionRef.appendChild(currentArticle);

        const deleteButtonsYellowSection =Array.from(inProgressSectionRef.querySelectorAll(".red"));
          
        const finishBtn = Array.from(inProgressSectionRef.querySelectorAll(".orange"));

        deleteButtonsYellowSection.forEach((el) => {
          el.addEventListener("click", deleteBtnYellSectHandler);
        });
        finishBtn.forEach((el) => {
          el.addEventListener("click", finishBtnHandler);
        });

        function deleteBtnYellSectHandler(e) {
          const deleteCurrentArticle = e.target.parentNode.parentNode;
          inProgressSectionRef.removeChild(deleteCurrentArticle);
        }

        function finishBtnHandler(e) {
          let finishArticle = e.target.parentNode.parentNode;

          finishArticle.innerHTML = `
         <h3>${name}</h3>
         <p>Description: ${description}</p>
         <p>Due Date: ${date}</p>`;
          const completeSectRef = document.querySelector(
            "section:nth-child(4) div:nth-child(2)"
          );

          completeSectRef.appendChild(finishArticle);
        }
      }

      function deleteButtonHandlerOrangeSection(e) {
        const currentArticle = e.target.parentNode.parentNode;
        openSectionArticlesRef.removeChild(currentArticle);
      }
    }
  }
}
