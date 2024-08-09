const claimBtn = document.getElementById("claim-button");

claimBtn.addEventListener("click", function () {
  const errorContainers = document.querySelectorAll(".input-container");

  errorContainers.forEach((container) => {
    const errorIcon = container.querySelector(".error-icon");
    const errorMessage = container.querySelector(".error-message");
    const input = container.querySelector("input");

    if (errorIcon && errorMessage && input) {
      errorIcon.style.display = "block";
      errorMessage.style.display = "block";

      input.placeholder = input.type === "email" ? "email@example.com" : "";
      input.style.border = "1px solid #ff7a7a";
    }
  });
});
