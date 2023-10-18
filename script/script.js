"use strict";

const burgerCheckbox = document.getElementById("burger"); // Отримайте посилання на чекбокс бургер-меню
const openIcon = document.getElementById("open-icon"); // Отримайте посилання на іконку для відкритого стану
const closeIcon = document.getElementById("close-icon"); // Отримайте посилання на іконку для закритого стану

burgerCheckbox.addEventListener("change", function() {
    if (burgerCheckbox.checked) {
        // Відображайте іконку для закритого стану, якщо меню відкрите
        openIcon.style.display = "none";
        closeIcon.style.display = "inline-block";
    } else {
        // Відображайте іконку для відкритого стану, якщо меню закрите
        openIcon.style.display = "inline-block";
        closeIcon.style.display = "none";
    }
});

// Add JavaScript to handle smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

