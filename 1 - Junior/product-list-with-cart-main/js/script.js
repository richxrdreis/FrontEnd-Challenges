document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.querySelector(".cart-items");
  const cartTitle = document.querySelector(".seu-carrinho h2");
  const confirmOrderButton = document.querySelector(".confirm-order");
  const imgEParagrafo = document.querySelector(".img-e-paragrafo"); // Selecione a imagem e o parágrafo
  let cartItems = [];

  document.querySelectorAll(".item-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const item = e.target.closest(".item");
      const name = item.querySelector("h5").textContent;
      const price = parseFloat(
        item.querySelector(".preco").textContent.replace("$", "")
      );

      const existingItem = cartItems.find((cartItem) => cartItem.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }

      updateCart();
    });
  });

  function updateCart() {
    cartContainer.innerHTML = "";

    let total = 0;

    cartItems.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">$${item.price.toFixed(2)}</span>
            <button class="decrease-quantity" data-index="${index}">-</button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button class="increase-quantity" data-index="${index}">+</button>
            <button class="remove-item" data-index="${index}">Remove</button>
          `;
      cartContainer.appendChild(itemElement);

      total += item.price * item.quantity;
    });

    cartTitle.textContent = `Your Cart (${cartItems.length})`;

    const totalElement = document.createElement("div");
    totalElement.className = "cart-total";
    totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalElement);

    // Exibir o botão de confirmar ordem se houver itens no carrinho
    confirmOrderButton.style.display = cartItems.length > 0 ? "block" : "none";

    // Ocultar a imagem e o parágrafo se houver itens no carrinho
    imgEParagrafo.style.display = cartItems.length > 0 ? "none" : "block";
  }

  cartContainer.addEventListener("click", (e) => {
    const target = e.target;
    const index = target.getAttribute("data-index");
    if (target.classList.contains("increase-quantity")) {
      cartItems[index].quantity += 1;
      updateCart();
    } else if (target.classList.contains("decrease-quantity")) {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      } else {
        cartItems.splice(index, 1);
      }
      updateCart();
    } else if (target.classList.contains("remove-item")) {
      cartItems.splice(index, 1);
      updateCart();
    }
  });

  document.querySelector(".confirm-order").addEventListener("click", () => {
    if (cartItems.length > 0) {
      alert("Order confirmed!");
      cartItems = [];
      updateCart();
    } else {
      alert("Your cart is empty!");
    }
  });
});
