document.addEventListener("DOMContentLoaded", function () {
  const seta = document.querySelector(".seta");
  const socialIcons = document.querySelector(".social-icons");

  seta.addEventListener("click", function () {
    socialIcons.classList.toggle("hidden");
  });
});
