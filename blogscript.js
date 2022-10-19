// image pop up modal
const popUpImgContainer = document.querySelector('.sophieImgContainer img');
const popUpModalContainer = document.querySelector('.modal');
const exitPopUpImg = document.querySelector('.modal button');

popUpImgContainer.addEventListener("click", () => { 
    popUpModalContainer.style.display = 'block';
});

exitPopUpImg.addEventListener("click", () => {
    popUpModalContainer.style.display = 'none';
});