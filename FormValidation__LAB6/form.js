function validateEmail() {
    var emailInput = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailField = document.getElementById("email");
    var emailError = document.getElementById("emailError");

    if (emailPattern.test(emailInput)) {
        emailField.classList.remove("is-invalid");
        emailField.classList.add("is-valid");
        emailError.style.display = "none";
    } else {
        emailField.classList.remove("is-valid");
        emailField.classList.add("is-invalid");
        emailError.innerHTML = "Please enter a valid email";
    }
}


function validateName() {
    var nameInput = document.getElementById("name").value;
    var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var nameField = document.getElementById("name");
    var nameError = document.getElementById("nameError");

    if (namePattern.test(nameInput)) {
        nameField.classList.remove("is-invalid");
        nameField.classList.add("is-valid");
        nameError.style.display = "none";
    } else {
        nameField.classList.remove("is-valid");
        nameField.classList.add("is-invalid");
        nameError.innerHTML = "Please enter a valid Name";
    }
}


function validatePassword() {
    var passwordInput = document.getElementById("password").value;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passwordField = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");

    if (passwordPattern.test(passwordInput)) {
        passwordField.classList.remove("is-invalid");
        passwordField.classList.add("is-valid");
        passwordError.style.display = "none";
    } else {
        passwordField.classList.remove("is-valid");
        passwordField.classList.add("is-invalid");
        passwordError.innerHTML = "Password should be at least 8 characters long while containing a lowercase letter, an uppercase letter, a number, and a special character";
    }
    validateConfirmPassword();
}

function validateDateOfBirth() {
    var dobInput = document.getElementById("dob").value;
    var dobPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    var today = new Date();
    var dobDate = new Date(dobInput);
    var dobField = document.getElementById("dob");
    var dobError = document.getElementById("dobError");

    if (
        dobPattern.test(dobInput) &&
        dobDate <= today &&
        today.getFullYear() - dobDate.getFullYear() >= 18
    ) {
        dobField.classList.remove("is-invalid");
        dobField.classList.add("is-valid");
        dobError.style.display = "none";
    } else {
        dobField.classList.remove("is-valid");
        dobField.classList.add("is-invalid");
        dobError.innerHTML = "Min age 18";
    }
}

function validateConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var confirmPasswordField = document.getElementById("confirmPassword");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password === confirmPassword && password.length > 0) {
        confirmPasswordField.classList.remove("is-invalid");
        confirmPasswordField.classList.add("is-valid");
        confirmPasswordError.style.display = "none";
    } else {
        confirmPasswordField.classList.remove("is-valid");
        confirmPasswordField.classList.add("is-invalid");
        confirmPasswordError.innerHTML = "Password doesn't match";
    }
}

function validateForm() {
    validateEmail();
    validateName();
    validatePassword();
    validateDateOfBirth();
    validateConfirmPassword();

    alert("Form Submitted Succesfully");
    window.location.reload();
}


document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("name").addEventListener("input", validateName);
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("dob").addEventListener("input", validateDateOfBirth);
document.getElementById("confirmPassword").addEventListener("input", validateConfirmPassword);
