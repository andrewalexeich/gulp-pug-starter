// menu burger
document.querySelector(".menu__burger").addEventListener("click", function () {
    document.querySelector(".menu__burger").classList.toggle("_active");
    document.querySelector(".menu__list").classList.toggle("_active");
    document.body.classList.toggle("_modal-is-open");
});
