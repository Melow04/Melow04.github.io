document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email');
        const password = document.getElementById('password');

        
        if (email.value.trim() === '') {
            email.classList.add('is-invalid'); 
        } else {
            email.classList.remove('is-invalid'); 
        }

        if (password.value === '') {
            password.classList.add('is-invalid'); 
        } else {
            password.classList.remove('is-invalid'); 
        }
    });

});