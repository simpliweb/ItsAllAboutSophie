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
// when right arrow button is clicked, it goes to next image
// when left arrow button is clicked, it goes to previous image
// grab the right button
let photoContainer = document.querySelector('.imgGalleryContainer');

const rightArrow = document.querySelector('.arrow-next');
// grag left button
const leftArrow = document.querySelector('.arrow-prev');
// grab images
const photos = document.querySelectorAll('.photo');
console.log(photos);


// create event listener 'click', if right arrow is clicked, move  third image to right image spot, second image to third image spot, first image to second image spot,
rightArrow.addEventListener('click', () => {  
    let photoWidth = photoContainer.clientWidth;       
        
    photos.forEach(photoImg => {
        photoImg = photos += photoWidth;
    });
});

// css animation
// 2 classes, slide out & slide in, position absolute (left/right), attach that class to first image, slide in #2 image, looks like movimg 
// onclick on javascript


// common way .filter() is used, loop through whatever matches the condition, used in hangman game? to match something user's input. game with 100 words with all 4 letters, use 4 letters to make different word, filter out to get the question right 
