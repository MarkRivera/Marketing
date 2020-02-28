const mainNav = document.querySelector(".main-nav");
const toggle = document.querySelector("#toggle");

toggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});