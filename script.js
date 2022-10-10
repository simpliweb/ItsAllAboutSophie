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

}) // END hamburger nav

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');

    const prevButton = document.querySelector('#prevArrow');

    const nextButton = document.querySelector('#nextArrow');

    let currentSlide = 0;
    
    let maxSlide = slide.length - 1;

    // slide.forEach((slides, index) => {
    // slides.style.transform = `translateX(${index * 100}%)`;
    // });

    // how to click next / prev button for images to rotate
    // 

    // prevButton.addEventListener('click', (e) => {
    //     if (currentSlide === maxSlide) {
    //        currentSlide = 0;
    //     } else {
    //       currentSlide++;
    //     }

    //      slide.forEach((slides, index) => {
    //         slides.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    //     });
    // })

    buttons.forEach(button => {

        button.addEventListener('click', () => {
            const offset = button.galleryArrow === "#nextArrow" ? 1 : - 1
            const slide = document.querySelector('.slide');
            const activeSlide = slide.querySelector('active');
            let newSlide = slide.indexOf(activeSlide) + offset;

            if (newSlide < 0) newIndex = slide.children.length -1;
            if (newSlide >= slide.children.length) newIndex = 0;

            slide.children[newSlide].dataset.active = true
            delete activeSlide.dataset.active
            // slide.forEach((slides, index) => {
            //     slides.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
            // });
        })

    }

})
