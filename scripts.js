const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal options and animations
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Initialize ScrollReveal instance
ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOptions,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".header_content form", {
    ...scrollRevealOptions,
    delay: 1500,
});

ScrollReveal().reveal(".header_content .bar", {
    ...scrollRevealOptions,
    delay: 2000,
});

ScrollReveal().reveal(".header_content_card", {
    duration: 1000,
    interval: 500,
    delay: 500,
});