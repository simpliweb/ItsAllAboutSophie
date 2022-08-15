document.addEventListener("DOMContentLoaded", () => {
    const openHamburgerMenuButton = document.querySelector('.menuOpen');

    const menuCloseButton = document.querySelector('.menuClose');

    const menu = document.querySelector('.slideOutNav');

    openHamburgerMenuButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    })

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    })

})