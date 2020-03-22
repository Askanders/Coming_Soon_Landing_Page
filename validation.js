function validate() {
  const email = document.getElementById("email").value;
  // Regex taken from w3resource.com
  // URL: https://www.w3resource.com/javascript/form/email-validation.php
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    let errorImg = document.querySelector(".error-img");
    let errorText = document.querySelector(".error-text");
    let errorElements = [errorImg, errorText];
    errorElements.forEach((element) => {
      element.classList.remove("show");
      element.classList.add("hide");
    });
    document.querySelector("form").classList.remove("error");
  } else {
    let errorImg = document.querySelector(".error-img");
    let errorText = document.querySelector(".error-text");
    let errorElements = [errorImg, errorText];
    errorElements.forEach((element) => {
      element.classList.remove("hide");
      element.classList.add("show");
    });
    document.querySelector("form").classList.add("error");
  }
}
