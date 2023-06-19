const menuHamburguer = document.querySelector(".ham-btn");
const navContainer = document.querySelector("nav");
const navLinks = document.querySelector(".nav-content");
const contaLink = document.querySelector(".conta");
const contaContent = document.querySelector(".conta a");

menuHamburguer.addEventListener("click", () => {
    navContainer.classList.toggle("show");
    navLinks.classList.toggle("show");
    contaLink.classList.toggle("show");
    contaContent.classList.toggle("show");
});