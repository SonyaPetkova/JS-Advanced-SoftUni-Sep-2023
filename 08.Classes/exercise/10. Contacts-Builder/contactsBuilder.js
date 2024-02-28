class Contact {
    constructor(firstName, lastName, phone, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.email = email;
    }
  
    render(divId) {
      const targetDiv = document.getElementById(divId);
  
      const contactArticle = document.createElement("article");
      contactArticle.innerHTML = `
        <div class="title">
          ${this.firstName} ${this.lastName}<button>&#8505;</button>
        </div>
        <div class="info" style="display: none;">
          <span>&phone; ${this.phone}</span>
          <span>&#9993; ${this.email}</span>
        </div>
      `;
  
      const titleDiv = contactArticle.querySelector(".title");
      titleDiv.addEventListener("click", () => this.toggleInfo(contactArticle));
  
      targetDiv.appendChild(contactArticle);
    }
  
    toggleInfo(contactArticle) {
      const infoDiv = contactArticle.querySelector('.info');
      infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
    }
  }
  
  // Example usage:
  let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  
  contacts.forEach(c => c.render('main'));

