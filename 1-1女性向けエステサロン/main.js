const toggleBtn = document.querySelector(".toggle-btn");
const gNav = document.querySelector("#g-nav");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    gNav.classList.toggle("active");
    document
        .querySelectorAll(".header, #container, #footer")
        .forEach(el => {
            el.classList.toggle("mainBlur");
        });
});
