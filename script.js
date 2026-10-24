
/* ===== 1. SELECT HTML ELEMENTS ===== */
const shopButtons = document.querySelectorAll(
  '.shop-button, .hero-button'
);

const productSection = document.getElementById('products');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav-links a');
const productCards = document.querySelectorAll('.product-card');

/* ===== 2. SHOP NOW BUTTON ===== */
shopButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();

    productSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ===== 3. LOGO CLICK: GO TO TOP ===== */
logo.addEventListener('click', function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* ===== 4. SMOOTH NAVIGATION ===== */
navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    const targetId = link.getAttribute('href');

    // Ignore links that don't point to a section
    if (!targetId || targetId === '#') {
      return;
    }

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* ===== 5. PRODUCT CARD CLICK FEEDBACK ===== */
productCards.forEach(function (card) {
  card.addEventListener('click', function () {
    productCards.forEach(function (item) {
      item.classList.remove('selected');
    });

    card.classList.add('selected');
  });
});

console.log('DERMIQT website JavaScript loaded successfully!');

const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.stopPropagation();

    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;

    let message = productCard.querySelector('.cart-message');

    if (!message) {
      message = document.createElement('p');
      message.className = 'cart-message';
      button.insertAdjacentElement('afterend', message);
    }

    message.textContent = productName + ' added to cart!';
    button.textContent = 'Added ✓';
  });
});
