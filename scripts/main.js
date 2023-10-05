document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.add("open");
    })
    document.getElementById("burger-close").addEventListener("click", function() {
        document.querySelector("header").classList.remove("open");
    })
})