const perguntas = document.querySelectorAll(".pergunta h4");

function toggleFAQ(q) {
  const resposta = q.parentNode.nextElementSibling;
  resposta.classList.toggle("ativa");

  const img = q.parentNode.querySelector("img");
  if (resposta.classList.contains("ativa")) {
    img.src = "assets/images/icon-minus.svg";
    img.alt = "simbolo de subtração";
  } else {
    img.src = "assets/images/icon-plus.svg";
    img.alt = "simbolo de adição";
  }
}

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    toggleFAQ(pergunta);
  });
});
