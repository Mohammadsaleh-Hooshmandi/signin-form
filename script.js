document.querySelector(".btn-rotate-1").addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.add("rotate");
});

document.querySelector(".btn-rotate-2").addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.remove("rotate");
});

const icon = document.querySelector(".mode-btn i")
document.querySelector(".mode-btn").addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.classList.toggle("dark") ? icon.className = "fas fa-sun":
    icon.className = "fas fa-moon";
});