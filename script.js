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

// home page image carousel
const photoContainer = document.querySelector('.imgGalleryContainer');

const rightArrow = document.querySelector('.arrow-next');
const leftArrow = document.querySelector('.arrow-prev');
const photo = document.querySelector('.photo');

rightArrow.addEventListener("click", () => { 
  
    const photoWidth = photo.clientWidth + 80;     
    photoContainer.scrollLeft += photoWidth;
        
});

leftArrow.addEventListener("click", () => {  
 
    const photoWidth = photo.clientWidth + 80;               
    photoContainer.scrollLeft -= photoWidth; 
        
});

