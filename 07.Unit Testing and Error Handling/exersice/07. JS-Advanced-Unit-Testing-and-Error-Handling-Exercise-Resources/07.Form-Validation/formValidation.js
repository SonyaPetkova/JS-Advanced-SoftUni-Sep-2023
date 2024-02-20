function validate() {
  // TODO
  const submitBtn = document.querySelector("button");
  const userNameRef = document.getElementById("username");
  const emailRef = document.getElementById("email");
  const passwordRef = document.getElementById("password");
  const confirmPassRef = document.getElementById("confirm-password");
  const companyCheckboxRef = document.getElementById("company");
  const companyInfoRef = document.getElementById("companyInfo");
  companyCheckboxRef.addEventListener("change", checkboxHandler);

  //if checkbox is checked reveal the company info div
  function checkboxHandler(e) {
    const checkbox = e.target;
    checkbox.checked
      ? (companyInfoRef.style.display = "block")
      : (companyInfoRef.style.display = "none");
    companyNumberRef.style.border = "none";
  }

  submitBtn.addEventListener("click", submitHandler);

  function submitHandler(e) {
    e.preventDefault();
    // adding a boolean array with all the validation functions
    //all of them returning true for a valid parameter and false for invalid
    let isValid = [];

    isValid.push(usernameValidation(userNameRef.value));
    isValid.push(emailValidation(emailRef.value));
    isValid.push(passwordValidator(passwordRef.value, confirmPassRef.value));
    // if company info is checked validate the company info data and push a boolean into the is Valid arr
    if (companyCheckboxRef.checked) {
      const companyNumber = document.getElementById("companyNumber");
      if (companyNumber.value > 1000 && companyNumber.value < 9999) {
        companyNumber.style.border = "none";
        isValid.push(true);
      } else {
        companyNumber.style.borderColor = "red";
        isValid.push(false);
      }
    }
    if (isValid.every((el) => el === true)) {
      document.getElementById("valid").style.display = "block";
    } else {
      document.getElementById("valid").style.display = "none";
    }
  }
  function passwordValidator(password, confirmPass) {
    // check if the password consist only from letters,numbers and "_"
    // and the length is between 5-15 symbols
    if (
      !password.match(new RegExp(/^[a-zA-Z1-9_]*$/gm)) ||
      password.length < 5 ||
      password.length > 15
    ) {
      passwordRef.style.borderColor = "red";
      confirmPassRef.style.borderColor = "red";
      return false;
    }
    //if yes check also  if the both password and confirm password match
    if (password !== confirmPass) {
      confirmPassRef.style.borderColor = "red";
      passwordRef.style.borderColor = "red";
      return false;
    } else {
      passwordRef.style.border = "none";
      confirmPassRef.style.border = "none";
      return true;
    }
  }
  function emailValidation(email) {
    let validationEMail = email;
    //first checking if email includes @
    if (!email.includes("@")) {
      emailRef.style.borderColor = "red";
      return false;
    } else {
      //if yes splitting from the index of "@" and checking if it includes "."
      validationEMail = validationEMail.substring(email.indexOf("@"));

      if (validationEMail.includes(".")) {
        emailRef.style.border = "none";
        return true;
      } else {
        passwordRef.style.borderColor = "red";
        return false;
      }
    }
  }
  function usernameValidation(username) {
    //pattern for checking if the username consist only of letters and numbers
    const validationPattern = new RegExp(/^[A-Za-z0-9]*$/);

    if (
      !username.match(validationPattern) ||
      username.length < 3 ||
      username.length > 20
    ) {
      userNameRef.style.borderColor = "red";
      return false;
    } else {
      userNameRef.style.border = "none";
      return true;
    }
  }
}
