"use strict";

const burgerCheckbox = document.getElementById("burger"); // Отримайте посилання на чекбокс бургер-меню
const openIcon = document.getElementById("open-icon"); // Отримайте посилання на іконку для відкритого стану
const closeIcon = document.getElementById("close-icon"); // Отримайте посилання на іконку для закритого стану

function updateIcon() {
  if (burgerCheckbox.checked) {
    // Відображайте іконку для закритого стану, якщо меню відкрите
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
  } else {
    // Відображайте іконку для відкритого стану, якщо меню закрите
    openIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  }
}

// Закрытие бургер-меню при переходе по ссылкам
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function () {
    burgerCheckbox.checked = false; // Снимаем отметку с чекбокса для закрытия меню
    updateIcon(); // Обновляем иконку при закрытии меню
  });
});

// Закрытие бургер-меню при нажатии вне зоны меню
document.addEventListener("click", function (e) {
  if (
    e.target !== burgerCheckbox &&
    e.target !== openIcon &&
    e.target !== closeIcon
  ) {
    burgerCheckbox.checked = false; // Снимаем отметку с чекбокса для закрытия меню
    updateIcon(); // Обновляем иконку при закрытии меню
  }
});

burgerCheckbox.addEventListener("change", function () {
  updateIcon(); // Обновляем иконку при изменении состояния чекбокса
});

// Add JavaScript to handle smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Вызов функции для установки иконки при начальной загрузке страницы
updateIcon();
// Add JavaScript to handle smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
