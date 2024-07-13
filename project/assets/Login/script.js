var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

function validated() {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook)\.com$/;
    let isValid = true;

    if (!emailPattern.test(email.value)) {
        email.classList.add('error');
        email_error.style.display = "block";
        email.focus();
        isValid = false;
    } else {
        email.classList.remove('error');
        email.classList.add('valid');
        email_error.style.display = "none";
    }

    if (password.value.length < 6) {
        password.classList.add('error');
        pass_error.style.display = "block";
        password.focus();
        isValid = false;
    } else {
        password.classList.remove('error');
        password.classList.add('valid');
        pass_error.style.display = "none";
    }

    return isValid;
}

function email_Verify() {
    email.classList.toggle('valid', email.value.length >= 9);
}

function pass_Verify() {
    password.classList.toggle('valid', password.value.length >= 6);
}