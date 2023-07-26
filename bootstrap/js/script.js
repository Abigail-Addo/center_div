const icon = document.querySelector("div.offcanvas-body div.icons");
const toggle = document.querySelector(".navbar-toggler-icon");


toggle.addEventListener("click", () => {
    const width = window.innerWidth;
    if (width <= 1280) {
    icon.style.display = 'none';
    // alert("hello");
    };
});