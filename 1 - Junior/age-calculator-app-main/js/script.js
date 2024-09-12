document.querySelector('button').addEventListener('click', function() {
    // Capturando os campos de entrada
    const dayInput = document.querySelector('input[placeholder="DD"]');
    const monthInput = document.querySelector('input[placeholder="MM"]');
    const yearInput = document.querySelector('input[placeholder="YYYY"]');
    
    // Limpando a classe de erro dos inputs
    dayInput.classList.remove('input-error');
    monthInput.classList.remove('input-error');
    yearInput.classList.remove('input-error');
    
    // Validando se os campos foram preenchidos corretamente
    let isValid = true;
    
    if (!dayInput.value) {
        dayInput.classList.add('input-error');
        isValid = false;
    }
    if (!monthInput.value) {
        monthInput.classList.add('input-error');
        isValid = false;
    }
    if (!yearInput.value) {
        yearInput.classList.add('input-error');
        isValid = false;
    }
    
    if (!isValid) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Convertendo os valores para Data
    const birthDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
    const today = new Date();
    
    // Cálculo da diferença em anos, meses e dias
    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();
    
    // Ajustando se o mês ou dia atual for anterior ao da data de nascimento
    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Obtém os dias no mês anterior
    }
    
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }
    
    // Atualizando o HTML com os resultados
    document.querySelector('.cardBottom h1:nth-child(1) span').textContent = ageYear;
    document.querySelector('.cardBottom h1:nth-child(2) span').textContent = ageMonth;
    document.querySelector('.cardBottom h1:nth-child(3) span').textContent = ageDay;
});
