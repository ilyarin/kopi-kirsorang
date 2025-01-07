// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
// ketika cart menu diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchBox.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
// Kopi Tubruk Start
const itemDetailModalTubruk = document.querySelector(
  "#item-detail-modal-tubruk"
);
const itemDetailButtonTubruk = document.querySelector(
  ".item-detail-button-tubruk"
);

// Open box modal
itemDetailButtonTubruk.onclick = (e) => {
  itemDetailModalTubruk.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-tubruk .close-icon").onclick = (
  e
) => {
  itemDetailModalTubruk.style.display = "none";
  e.preventDefault();
};
// Kopi Tubruk End

// Espresso Start
const itemDetailModalEspresso = document.querySelector(
  "#item-detail-modal-espresso"
);
const itemDetailButtonEspresso = document.querySelector(
  ".item-detail-button-espresso"
);

// Open box modal
itemDetailButtonEspresso.onclick = (e) => {
  itemDetailModalEspresso.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-espresso .close-icon").onclick = (
  e
) => {
  itemDetailModalEspresso.style.display = "none";
  e.preventDefault();
};
// Espresso End

// Americano Start
const itemDetailModalAmericano = document.querySelector(
  "#item-detail-modal-americano"
);
const itemDetailButtonAmericano = document.querySelector(
  ".item-detail-button-americano"
);

// Open box modal
itemDetailButtonAmericano.onclick = (e) => {
  itemDetailModalAmericano.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-americano .close-icon").onclick = (
  e
) => {
  itemDetailModalAmericano.style.display = "none";
  e.preventDefault();
};
// Americano End

// Latte Start
const itemDetailModalLatte = document.querySelector("#item-detail-modal-latte");
const itemDetailButtonLatte = document.querySelector(
  ".item-detail-button-latte"
);

// Open box modal
itemDetailButtonLatte.onclick = (e) => {
  itemDetailModalLatte.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-latte .close-icon").onclick = (
  e
) => {
  itemDetailModalLatte.style.display = "none";
  e.preventDefault();
};
// Latte End

// Mocha Start
const itemDetailModalMocha = document.querySelector("#item-detail-modal-mocha");
const itemDetailButtonMocha = document.querySelector(
  ".item-detail-button-mocha"
);

// Open box modal
itemDetailButtonMocha.onclick = (e) => {
  itemDetailModalMocha.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-mocha .close-icon").onclick = (
  e
) => {
  itemDetailModalMocha.style.display = "none";
  e.preventDefault();
};
// Mocha End

// Cappuccino Start
const itemDetailModalCappuccino = document.querySelector(
  "#item-detail-modal-cappuccino"
);
const itemDetailButtonCappuccino = document.querySelector(
  ".item-detail-button-cappuccino"
);

// Open box modal
itemDetailButtonCappuccino.onclick = (e) => {
  itemDetailModalCappuccino.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-cappuccino .close-icon").onclick = (
  e
) => {
  itemDetailModalCappuccino.style.display = "none";
  e.preventDefault();
};
// Cappuccino End

// Macchiato Start
const itemDetailModalMacchiato = document.querySelector(
  "#item-detail-modal-macchiato"
);
const itemDetailButtonMacchiato = document.querySelector(
  ".item-detail-button-macchiato"
);

// Open box modal
itemDetailButtonMacchiato.onclick = (e) => {
  itemDetailModalMacchiato.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-macchiato .close-icon").onclick = (
  e
) => {
  itemDetailModalMacchiato.style.display = "none";
  e.preventDefault();
};
// Macchiato End

// Affogato Start
const itemDetailModalAffogato = document.querySelector(
  "#item-detail-modal-affogato"
);
const itemDetailButtonAffogato = document.querySelector(
  ".item-detail-button-affogato"
);

// Open box modal
itemDetailButtonAffogato.onclick = (e) => {
  itemDetailModalAffogato.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector("#item-detail-modal-affogato .close-icon").onclick = (
  e
) => {
  itemDetailModalAffogato.style.display = "none";
  e.preventDefault();
};
// Affogato End

// Klik diluar model
window.onclick = (e) => {
  if (e.target === itemDetailModalTubruk) {
    itemDetailModalTubruk.style.display = "none";
  } else if (e.target === itemDetailModalEspresso) {
    itemDetailModalEspresso.style.display = "none";
  } else if (e.target === itemDetailModalAmericano) {
    itemDetailModalAmericano.style.display = "none";
  } else if (e.target === itemDetailModalLatte) {
    itemDetailModalLatte.style.display = "none";
  } else if (e.target === itemDetailModalMocha) {
    itemDetailModalMocha.style.display = "none";
  } else if (e.target === itemDetailModalCappuccino) {
    itemDetailModalCappuccino.style.display = "none";
  } else if (e.target === itemDetailModalMacchiato) {
    itemDetailModalMacchiato.style.display = "none";
  } else if (e.target === itemDetailModalAffogato) {
    itemDetailModalAffogato.style.display = "none";
  }
};
