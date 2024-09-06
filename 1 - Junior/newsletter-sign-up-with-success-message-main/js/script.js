document.getElementById('btn-submit').addEventListener('click', function(e) {
    event.preventDefault();

const emailInput = document.getElementById('input-error');
const errorElement = document.getElementById('email-error')

// REGEX PRO E-MAIL
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailPattern.test(emailInput.value)) {
    // se for válido
    emailInput.classList.remove('error');
    errorElement.style.display = 'none';

    emailInput.value = '';

  // se não for
} else  {
    emailInput.classList.add('error');
    errorElement.style.display = 'block';
}

})
