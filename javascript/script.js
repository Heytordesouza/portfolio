function initScrollMenu() {
    const menuLink = document.querySelectorAll('.menu-js a[href^="#"]');

    function scrollLink(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    menuLink.forEach((item) => {
        item.addEventListener("click", scrollLink);
    });
}

initScrollMenu();