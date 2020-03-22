function validate() {
  const email = document.getElementById("email").value;
  // Regex from w3resource -> URL: https://www.w3resource.com/javascript/form/email-validation.php
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    // Email passes validation
    const errorImg = document.querySelector(".error-img");
    const errorText = document.querySelector(".error-text");

    const errorElements = [errorImg, errorText];

    errorElements.forEach((element) => {
      element.classList.remove("show");
      element.classList.add("hide");
    });

    document.querySelector("form").classList.remove("error-form");
    return true;
  } else {
    // Email doesn not pass validation
    const errorImg = document.querySelector(".error-img");
    const errorText = document.querySelector(".error-text");

    const errorElements = [errorImg, errorText];

    errorElements.forEach((element) => {
      element.classList.remove("hide");
      element.classList.add("show");
    });

    document.querySelector("form").classList.add("error-form");

    return false;
  }
}
