const passwordContainer = document.querySelector("[data-check-password]");
const passwordRepeatedContainer = document.querySelector(
  "[data-check-password-repeated]"
);

const passwordInput = passwordContainer.querySelector("input[type='password']");
const passwordRepeatedInput = passwordRepeatedContainer.querySelector(
  "input[type='password']"
);

const passwordRepeatedAlert = passwordRepeatedContainer.querySelector(".alert");

passwordRepeatedInput.onblur = () => {
  if (passwordInput.value !== passwordRepeatedInput.value) {
    passwordRepeatedAlert.classList.remove("hidden");
  } else {
    passwordRepeatedAlert.classList.add("hidden");
  }
};
