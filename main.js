document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu-left").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner', { delay: 500 });
ScrollReveal().reveal('.banner-2', { delay: 500 });