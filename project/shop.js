let count = 0;

function incrementCounter() {
    count++;
    document.getElementById("countatc").innerText = count;
}

function validateForm(id) {
    const email = document.getElementById(`email-${id}`);
    const errorMessage = document.getElementById(`error-message-${id}`);
    const paymentOptions = document.querySelectorAll(`input[name="inlineRadioOptions-${id}"]:checked`);
    const paymentErrorMessage = document.getElementById(`payment-error-message-${id}`);

    let paymentSelected = paymentOptions.length > 0;

    let emailError = email.value.trim() === '';
    let paymentError = !paymentSelected;

    if (emailError) {
        errorMessage.textContent = 'Email is required.';
        email.classList.add('border-red');
    } else {
        errorMessage.textContent = '';
        email.classList.remove('border-red');
    }

    if (paymentError) {
        paymentErrorMessage.textContent = 'Payment Method is required.';
    } else {
        paymentErrorMessage.textContent = '';
    }

    if (emailError || paymentError) {
        alert('Please fill in the required fields.');
        return false;
    } else {
        alert('Form submitted successfully!');
        // Here, you can add code to actually submit the form
        return true; // Return true to allow form submission
    }
}
