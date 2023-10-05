const header = document.querySelector(".header");
const mediaQuery = window.matchMedia('(max-width: 800px)');

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        header.classList.add("open");
    })
    document.getElementById("burger-close").addEventListener("click", function() {
        header.classList.remove("open");
    })
})
