document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
const toggle = dropdown.querySelector('.dropdown-toggle');
const valueSpan = toggle.querySelector('.value');
const menu = dropdown.querySelector('.dropdown-menu');

toggle.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

menu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
    valueSpan.textContent = item.dataset.value;
    dropdown.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    }
});
});
console.log("Файл подключен!");
document.addEventListener("DOMContentLoaded", function () {
  const lootButton = document.querySelector(".loot-button");

  lootButton.addEventListener("click", () => {
    lootButton.classList.add("clicked");

    // Удаляем класс после завершения анимации
    setTimeout(() => {
      lootButton.classList.remove("clicked");
    }, 600);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const lootButton = document.querySelector(".loot-button");
  const cartPopup = document.getElementById("cartPopup");
  const closeCart = document.getElementById("closeCart");

  lootButton.addEventListener("click", () => {
    cartPopup.style.display = "block";
  });

  closeCart.addEventListener("click", () => {
    cartPopup.style.display = "none";
  });
});
const orderButton = document.querySelector(".order-btn");

orderButton.addEventListener("click", () => {
  // Тут можна зробити перехід або відкрити форму
window.location.href = "checkout.html";
});

 document.querySelector(".add-to-cart").addEventListener("click", () => {
  // ...

    e.preventDefault(); // Отключаем стандартную отправку

    const message = document.getElementById("thankYouMessage");
    message.classList.remove("hidden");

    // Скрыть сообщение через 4 секунды
    setTimeout(() => {
      message.classList.add("hidden");
    }, 4000);

    // Очистить форму
    this.reset();
  });
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const title = card.querySelector(".product-title")?.textContent || "Без названия";
      const price = card.querySelector(".product-price")?.textContent || "0";

      showNotification(`✅ ${title} додано в корзину!`);
      console.log("🛒 Корзина:", { title, price });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");
  const emptyMessage = document.getElementById("empty-cart");
  const totalDisplay = document.getElementById("cart-total");

  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const title = card.querySelector(".product-title")?.textContent || "Без назви";
      const priceText = card.querySelector(".product-price")?.textContent || "0";
      const price = parseFloat(priceText.replace(/[^\d.]/g, ""));

      const existingItem = [...cartItems.children].find(li => li.dataset.title === title);

      if (existingItem) {
        let count = parseInt(existingItem.dataset.count);
        count += 1;
        existingItem.dataset.count = count;
        existingItem.querySelector(".item-text").textContent = `${title} — ${price} грн × ${count}`;
      } else {
        const li = document.createElement("li");
        li.dataset.title = title;
        li.dataset.price = price;
        li.dataset.count = 1;

        li.innerHTML = `
          <span class="item-text">${title} — ${price} грн × 1</span>
          <button class="minus-btn">➖</button>
          <button class="plus-btn">➕</button>
        `;

        cartItems.appendChild(li);
        emptyMessage.style.display = "none";
function saveCart() {
  const cartItems = [...document.getElementById("cart-items").children].map(li => ({
    title: li.dataset.title,
    price: li.dataset.price,
    count: li.dataset.count
  }));
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

        // ➕ Увеличить
        li.querySelector(".plus-btn").addEventListener("click", () => {
          let count = parseInt(li.dataset.count);
          count += 1;
          li.dataset.count = count;
          li.querySelector(".item-text").textContent = `${title} — ${price} грн × ${count}`;
          updateTotal();
        });

        // ➖ Уменьшить
        li.querySelector(".minus-btn").addEventListener("click", () => {
          let count = parseInt(li.dataset.count);
          count -= 1;

          if (count <= 0) {
            li.remove();
            if (cartItems.children.length === 0) {
              emptyMessage.style.display = "block";
            }
          } else {
            li.dataset.count = count;
            li.querySelector(".item-text").textContent = `${title} — ${price} грн × ${count}`;
          }
          updateTotal();
        });
      }

      updateTotal();
      showNotification(`✅ ${title} додано в корзину!`);
    });
  });

  function updateTotal() {
    let total = 0;
    [...cartItems.children].forEach(li => {
      const price = parseFloat(li.dataset.price);
      const count = parseInt(li.dataset.count);
      total += price * count;
    });
    totalDisplay.textContent = `💰 Загальна сума: ${total.toFixed(2)} грн`;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");
  const emptyMessage = document.getElementById("empty-cart");
  const totalDisplay = document.getElementById("cart-total");

  // Загрузка корзины из localStorage
  loadCart();

  // Обработчики кнопок "Додати в корзину"
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const title = card.querySelector(".product-title")?.textContent || "Без назви";
      const priceText = card.querySelector(".product-price")?.textContent || "0";
      const price = parseFloat(priceText.replace(/[^\d.]/g, ""));

      const existingItem = [...cartItems.children].find(li => li.dataset.title === title);

      if (existingItem) {
        let count = parseInt(existingItem.dataset.count);
        count += 1;
        existingItem.dataset.count = count;
        existingItem.querySelector(".item-text").textContent = `${title} — ${price} грн × ${count}`;
      } else {
        const li = document.createElement("li");
        li.dataset.title = title;
        li.dataset.price = price;
        li.dataset.count = 1;

        li.innerHTML = `
          <span class="item-text">${title} — ${price} грн × 1</span>
          <button class="minus-btn">➖</button>
          <button class="plus-btn">➕</button>
        `;

        cartItems.appendChild(li);
        emptyMessage.style.display = "none";

        // ➕
        li.querySelector(".plus-btn").addEventListener("click", () => {
          let count = parseInt(li.dataset.count);
          count += 1;
          li.dataset.count = count;
          li.querySelector(".item-text").textContent = `${title} — ${price} грн × ${count}`;
          updateTotal();
          saveCart();
        });

        // ➖
        li.querySelector(".minus-btn").addEventListener("click", () => {
          let count = parseInt(li.dataset.count);
          count -= 1;
            if (count <= 0) {
                li.remove();
                if (cartItems.children.length === 0) {
                emptyMessage.style.display = "block";
                }
            } else {
                li.dataset.count = count;
                li.querySelector(".item-text").textContent = `${title} — ${price} грн × ${count}`;
            }
        });
    };
  });

  // Функция расчёта суммы
  function updateTotal() {
    let total = 0;
    [...cartItems.children].forEach(li => {
      const price = parseFloat(li.dataset.price);
      const count = parseInt(li.dataset.count);
      total += price * count;
    });
    totalDisplay.textContent = `💰 Загальна сума: ${total.toFixed(2)} грн`;
  }

  // Сохраняем корзину
  function saveCart() {
    const cartData = [...cartItems.children].map(li => ({
      title: li.dataset.title,
      price: li.dataset.price,
      count: li.dataset.count
    }));
    localStorage.setItem("cart", JSON.stringify(cartData));
  }

  // Загружаем корзину
  function loadCart() {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");

    saved.forEach(item => {
      const li = document.createElement("li");
      li.dataset.title = item.title;
      li.dataset.price = item.price;
      li.dataset.count = item.count;

      li.innerHTML = `
        <span class="item-text">${item.title} — ${item.price} грн × ${item.count}</span>
        <button class="minus-btn">➖</button>
        <button class="plus-btn">➕</button>
      `;

      cartItems.appendChild(li);
      emptyMessage.style.display = "none";

      // ➕
      li.querySelector(".plus-btn").addEventListener("click", () => {
        let count = parseInt(li.dataset.count);
        count += 1;
        li.dataset.count = count;
        li.querySelector(".item-text").textContent = `${item.title} — ${item.price} грн × ${count}`;
        updateTotal();
        saveCart();
      });

      // ➖
      li.querySelector(".minus-btn").addEventListener("click", () => {
        let count = parseInt(li.dataset.count);
        count -= 1;

        if (count <= 0) {
          li.remove();
          if (cartItems.children.length === 0) {
            emptyMessage.style.display = "block";
          }
        } else {
          li.dataset.count = count;
          li.querySelector(".item-text").textContent = `${item.title} — ${item.price} грн × ${count}`;
        }
        updateTotal();
        saveCart();
      });
    });

    updateTotal();
  }
});
});
function showNotification(message) {
  const note = document.getElementById("notification");
  note.textContent = message;
  note.classList.add("show");

  setTimeout(() => {
    note.classList.remove("show");
  }, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
  const orderList = document.getElementById("order-list");
  const orderTotal = document.getElementById("order-total");

  const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (savedCart.length === 0) {
    orderList.innerHTML = "<li>Корзина порожня 😢</li>";
    orderTotal.textContent = "";
    return;
  }

  let total = 0;

  savedCart.forEach(item => {
    const price = parseFloat(item.price);
    const count = parseInt(item.count);
    const sum = price * count;

    const li = document.createElement("li");
    li.textContent = `${item.title} — ${price} грн × ${count} = ${sum.toFixed(2)} грн`;
    orderList.appendChild(li);

    total += sum;
  });

  orderTotal.textContent = `💰 Загальна сума: ${total.toFixed(2)} грн`;
  document.getElementById("cart-data").value = JSON.stringify(savedCart);
});  
const fadeEls = document.querySelectorAll('.fade-in-on-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
fadeEls.forEach(el => observer.observe(el));
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
  });