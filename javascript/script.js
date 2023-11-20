function initScrollMenu() {
    const menuLink = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollLink(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        const position = section.offsetTop - 65;

        window.scroll({
            top: position,
            behavior: "smooth"
        });
    }

    menuLink.forEach((item) => {
        item.addEventListener("click", scrollLink);
    });
}

initScrollMenu();

function activeMenuMobile() {
    const btnMobile = document.querySelector("#btn-mobile");

    function toggleMenu(event) {
        if (event.type === "touchstart") event.preventDefault();
        const nav = document.querySelector("nav");
        nav.classList.toggle("active");
        const active = nav.classList.contains("active");
        event.currentTarget.setAttribute("aria-expanded", active);
        if (active) {
            event.currentTarget.setAttribute("aria-label", "Fechar Menu");
        } else {
            event.currentTarget.setAttribute("aria-label", "Abri menu");
        }
    }
    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
}

activeMenuMobile(0);

function animationInfo() {
    const info = document.querySelector(".info");
    const infoImg = document.querySelector(".image");
    info.classList.add("ativo");
    infoImg.classList.add("ativo");
}

animationInfo();

function closeMenuMobile() {
    const links = document.querySelectorAll("nav a");

    function closeMenu() {
        const nav = document.querySelector("nav");
        nav.classList.remove("active");
    }

    links.forEach((item) => {
        item.addEventListener("click", closeMenu);
    });
}

closeMenuMobile();


function initAnimationScroll() {
    const sectionScroll = document.querySelectorAll(".js-scroll");

    if (sectionScroll.length) {
        const windowEdit = innerHeight * 0.7;

        function animaScroll() {
            sectionScroll.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowEdit;
                console.log(sectionTop);
                if (sectionTop < 0) {
                    section.classList.add("animar");
                } else section.classList.remove("animar");
            });
        }
        window.addEventListener("scroll", animaScroll);
    }
    animaScroll();
}

initAnimationScroll();

function tabNavigation() {
    const linkCompanies = document.querySelectorAll(".js-companies li");
    const tabSection = document.querySelectorAll(".info-companies section");
    tabSection[0].classList.add("ativo");

    function altExperiences(index) {
        tabSection.forEach((section) => {
            section.classList.remove("ativo");
        });
        tabSection[index].classList.add("ativo");
    }

    linkCompanies.forEach((link, index) => {
        link.addEventListener("click", () => {
            altExperiences(index);
        });
    });
}

tabNavigation();

function tabNavigationform() {
    const linkCompanies = document.querySelectorAll(".js-training li");
    const tabSection = document.querySelectorAll(".info-training section");
    tabSection[0].classList.add("ativo");

    function altExperiences(index) {
        tabSection.forEach((section) => {
            section.classList.remove("ativo");
        });
        tabSection[index].classList.add("ativo");
    }

    linkCompanies.forEach((link, index) => {
        link.addEventListener("click", () => {
            altExperiences(index);
        });
    });
}

tabNavigationform();