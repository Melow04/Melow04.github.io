document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');

        emailError.textContent = "";
        passwordError.textContent = "";

        let isValid = true;

        if (email.value.trim() === '' || !email.value.includes('@')) {
            email.classList.add('is-invalid');
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (password.value === '' || password.value.length < 6) {
            password.classList.add('is-invalid');
            passwordError.textContent = "Please enter a password with at least 6 characters.";
            isValid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        if (isValid) {
            form.submit();
        }
    });
});

