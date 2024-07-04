let buttons = document.querySelectorAll(".rates button");
let thanks = document.querySelector(".thanks");
let rate = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    cleanButtons();
    buttons[i].classList.add("active");
    rate = i + 1;
  });
}

btn.onclick = function () {
  if (rate == 0) {
    alert("Select a rate");
  } else {
    thanks.classList.add("active");
    rated.innerText = rate;
  }
};

function cleanButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
}
