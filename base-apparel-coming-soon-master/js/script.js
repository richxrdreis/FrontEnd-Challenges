const label = document.querySelector("#label-input");
const input = document.querySelector("#input-email");
const submit = document.querySelector("#btn-submit");
const iconError = document.querySelector(".icon-erro");
const msgError = document.querySelector(".msg-erro");

// Ativar evento quando dar submit (Activate event when submit)
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault(); // Remover a caixa de validação (Remove the validation box)

  const inputValue = input.value.trim();
  console.log(inputValue);

  if (inputValue === "") {
    // Verifica se o input está vazio, se estiver aparece a mensagem de erro. (check if the input is empty, if it is, the error message appears.)
    label.style.border = ".2rem solid var(--soft-red)";
    iconError.style.display = "block";
    msgError.style.display = "block";
  } else if (!emailValid(inputValue)) {
    // Verifica se o email é invalido, se for, aparece a mensagem de erro (Check if the email is invalid, if it is, the error message appear.)
    label.style.border = ".2rem solid var(--soft-red)";
    iconError.style.display = "block";
    msgError.style.display = "block";
  } else {
    // Se o input não estivar vazio e o email for válido, então desaparece a mensagem de erro. (If the input is not empty an the email is valid, the error message disappears)
    label.style.border = ".1rem solid var(--desaturated-red)";
    iconError.style.display = "none";
    msgError.style.display = "none";
    input.value = "";
  }
}

// Função para validar um email (Function to validate an email)

function emailValid(input) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input); // Regex para validação de email (Regex for email validation)
}
