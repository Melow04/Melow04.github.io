let count = 0;

function incrementCounter() {
    count++;
    document.getElementById("countatc").innerText = count;
    alert('Added to Cart');
}

function validateForm(modalId) {
    const email = document.getElementById('email-' + modalId);
    const errorMessage = document.getElementById('error-message-' + modalId);
    const paymentOptions = document.getElementsByName('inlineRadioOptions-' + modalId);
    const paymentErrorMessage = document.getElementById('payment-error-message-' + modalId);

    let paymentSelected = false;
    for (const option of paymentOptions) {
        if (option.checked) {
            paymentSelected = true;
            break;
        }
    }

    let emailError = false;
    let paymentError = false;

    if (email.value.trim() === '') {
        emailError = true;
        errorMessage.textContent = 'Email is required.';
        email.classList.add('border-red');
    } else {
        errorMessage.textContent = '';
        email.classList.remove('border-red');
    }

    if (!paymentSelected) {
        paymentError = true;
        paymentErrorMessage.textContent = 'Payment Method is required.';
    } else {
        paymentErrorMessage.textContent = '';
    }

    if (emailError && paymentError) {
        alert('Please fill in the required fields.');
        return false;
    } else {
        if (emailError) {
            alert('Email is required.');
        }
        if (paymentError) {
            alert('Payment Method is required.');
        }
    }

    if (!emailError && !paymentError) {
        alert('Your order has been placed successfully!');
    }
}