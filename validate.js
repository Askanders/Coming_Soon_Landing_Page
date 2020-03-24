function validate() {
  const email = document.getElementById("email").value;

  if (isValidEmail(email)) {
    hideErrorMessages();
  } else {
    showErrorMessages();
  }
}

function isValidEmail(email) {
  // Regex from w3resource -> URL: https://www.w3resource.com/javascript/form/email-validation.php
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function hideErrorMessages() {
  const errorImg = document.querySelector(".error-img");
  const errorText = document.querySelector(".error-text");

  const errorElements = [errorImg, errorText];

  errorElements.forEach((element) => {
    element.classList.remove("show");
    element.classList.add("hide");
  });

  document.querySelector("form").classList.remove("error-form");
}

function showErrorMessages() {
  const errorImg = document.querySelector(".error-img");
  const errorText = document.querySelector(".error-text");

  const errorElements = [errorImg, errorText];

  errorElements.forEach((element) => {
    element.classList.remove("hide");
    element.classList.add("show");
  });

  document.querySelector("form").classList.add("error-form");
}
