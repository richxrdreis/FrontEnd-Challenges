document.getElementById("notifyBtn").addEventListener("click", function () {
  let texto = document.querySelector(".js-texto");
  let borda = document.querySelector("inputBtn");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block";
    inputBtn.classList.add("borderInput");
  } else {
    texto.style.display = "none";
    inputBtn.classList.remove("borderInput");
  }
});
