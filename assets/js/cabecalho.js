window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let logo = document.querySelector(".logo img");
    let navBar = document.querySelector(".nav-bar");

    // Se estiver em modo mobile, não executa nada
    if (window.innerWidth <= 768) return;

    if (window.scrollY > 50) {
        header.classList.add("small");
        logo.style.width = "50px";
        navBar.style.height = "60px";
    } else {
        header.classList.remove("small");
        logo.style.width = "90px";
        navBar.style.height = "80px";
    }

    // Se o menu estiver expandido, ajusta a altura conforme a rolagem
    if (navBar.classList.contains("expanded")) {
        navBar.style.height = window.scrollY > 50 ? "220px" : "250px";
    }
});