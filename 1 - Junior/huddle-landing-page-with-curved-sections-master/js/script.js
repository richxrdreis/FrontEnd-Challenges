function ValidacaoInput(event) {
    event.preventDefault();

    const input = document.getElementById('meuInput').value;
    const errorMsg = document.getElementById('errorMsg');

    if (input.trim() === '') {
        errorMsg.style.display = 'block';
        meuInput.style.border = '2px solid var(--Light-Red)';
    } else {
        errorMsg.style.display = 'none';
        meuInput.style.border = '';
    }
}
