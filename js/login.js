const loginForm = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const errorMessage = document.getElementById("error-message");
const errorIcon = document.getElementById("error-icon");
const errorText = document.getElementById("error-text");

let isShowPassword = false;

function showPassword() {
  if (isShowPassword) {
    passwordInput.setAttribute("type", "password");
    togglePassword.textContent = "visibility";
  } else {
    passwordInput.setAttribute("type", "text");
    togglePassword.textContent = "visibility_off";
  }
  isShowPassword = !isShowPassword;
}

function validateForm(event) {
  event.preventDefault();
  let username = usernameInput.value.trim();
  let password = passwordInput.value.trim();

  if (username === "" || password === "") {
    showMessage("Username and password cannot be empty", "error");
  } else if (username.length < 5 || username.length > 20) {
    showMessage("Username must be between 5 and 20 characters", "error");
  } else if (password.length < 8 || password.length > 26) {
    showMessage("Password must be between 8 and 26 characters", "error");
  } else {
    showMessage("Login successfully", "success");
    setTimeout(() => {
      loginForm.reset();
    }, 1000);
  }
}

function showMessage(text, type) {
  errorMessage.style.display = "flex";
  errorMessage.style.opacity = "1";
  errorText.textContent = text;

  if (type === "success") {
    errorIcon.textContent = "check_circle";
    errorIcon.style.color = "#22C55E";
    errorText.style.color = "#22C55E";
  } else {
    errorIcon.textContent = "error";
    errorIcon.style.color = "#DC2626";
    errorText.style.color = "#DC2626";
  }

  setTimeout(() => {
    errorMessage.style.opacity = "0";
    errorMessage.style.display = "none";
    errorIcon.textContent = "";
    errorText.textContent = "";
  }, 3000);
}

togglePassword.addEventListener("click", showPassword);
loginForm.addEventListener("submit", validateForm);
errorMessage.addEventListener("click", () => {
  errorMessage.style.opacity = "0";
  errorMessage.style.display = "none";
});
