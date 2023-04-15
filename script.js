//function to validate name
function validateName() {
  var name = document.forms[0]["fname"].value;
  var nameRegex = /^[a-zA-Z]+$/;
  var nameErr = document.getElementById("nameErr");

  if (name.length < 5) {
    nameErr.innerText = "Name must not be less than 5 characters.";
    return false;
  }

  if (!nameRegex.test(name)) {
    nameErr.innerText = "Name must contain only alphabets";
    return false;
  }

  nameErr.innerText = "";
  return true;
}

//function to validate email
function validateEmail() {
  var email = document.forms[0]["email"].value;
  var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  var emailErr = document.getElementById("emailErr");

  if (!emailRegex.test(email)) {
    emailErr.innerText = "Please enter a valid email address";
    return false;
  }

  emailErr.innerText = "";
  return true;
}

//function to validate phone
function validatePhone() {
  var phone = document.forms[0]["phone"].value;
  var phoneRegex = /^[0-9]{10}$/;
  var phoneErr = document.getElementById("phoneErr");

  if (phone == "1234567890") {
    phoneErr.innerText = "Phone Number should not be 123456789.";
    return false;
  }

  if (!phoneRegex.test(phone)) {
    phoneErr.innerText = "Enter a valid phone number";
    return false;
  }

  phoneErr.innerText = "";
  return true;
}

//function to validate password
function validatePassword() {
  var password = document.forms[0]["password"].value;
  var fname = document.forms[0]["fname"].value;
  var passwordErr = document.getElementById("passwordErr");

  if (password.length < 8 || password == "password" || password == fname) {
    passwordErr.innerText =
      "Password cannot be ‘password’ or ‘name of the user’ or less than 8 characters.";
    return false;
  }

  passwordErr.innerText = "";
  return true;
}

//function to validate confirm password
function validateConfirmPassword() {
  var password = document.forms[0]["password"].value;
  var cpassword = document.forms[0]["cpassword"].value;
  var cpasswordErr = document.getElementById("cpasswordErr");

  if (cpassword != password) {
    cpasswordErr.innerText = "Password and confirm password should match.";
    return false;
  }

  cpasswordErr.innerText = "";
  return true;
}

//function to validate when the form is submitted
function validateForm(e) {
  e.preventDefault();
  if (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    alert("Form submitted successfully!");
    return true;
  } else {
    return false;
  }
}

//binds eventListener to the input elements after the DOM is loaded completely
document.addEventListener("DOMContentLoaded", function () {
  document.forms[0].addEventListener("submit", validateForm);
  document.forms[0]["fname"].addEventListener("blur", validateName);
  document.forms[0]["email"].addEventListener("blur", validateEmail);
  document.forms[0]["phone"].addEventListener("blur", validatePhone);
  document.forms[0]["password"].addEventListener("blur", validatePassword);
  document.forms[0]["cpassword"].addEventListener(
    "blur",
    validateConfirmPassword
  );
});
