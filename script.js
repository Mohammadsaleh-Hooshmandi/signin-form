document.querySelector(".btn-rotate-1").addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.add("rotate");
});

document.querySelector(".btn-rotate-2").addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.remove("rotate");
});