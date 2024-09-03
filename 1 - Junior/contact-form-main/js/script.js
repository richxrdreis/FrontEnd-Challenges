document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
      let isValid = true;
      
      // Validar o primeiro nome
      const firstName = form.querySelector('input[type="text"]:nth-of-type(1)');
      const firstNameError = form.querySelector('#errorMsg-first-name');
      if (!firstName.value.trim()) {
        firstNameError.style.display = 'block';
        isValid = false;
      } else {
        firstNameError.style.display = 'none';
      }
     
      
      // Validar email
      const email = form.querySelector('input[type="email"]');
      const emailError = form.querySelector('#emailError');
      if (!email.value.trim() || !email.value.includes('@')) {
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      // Validar tipo de consulta
      const queryType = form.querySelector('input[name="query-type"]:checked');
      const queryTypeError = form.querySelector('#errorMsg-query-type');
      if (!queryType) {
        queryTypeError.style.display = 'block';
        isValid = false;
      } else {
        queryTypeError.style.display = 'none';
      }
      
      // Validar mensagem
      const message = form.querySelector('textarea[name="message"]');
      const messageError = form.querySelector('#errorMsg-message');
      if (!message.value.trim()) {
        messageError.style.display = 'block';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }
      
      // Validar consentimento
      const consent = form.querySelector('input[name="consent"]');
      const consentError = form.querySelector('#errorMsg-consent');
      if (!consent.checked) {
        consentError.style.display = 'block';
        isValid = false;
      } else {
        consentError.style.display = 'none';
      }
      
      if (!isValid) {
        event.preventDefault(); // Impede o envio do formulário se inválido
      }
    });
  });