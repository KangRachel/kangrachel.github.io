var popupBtn = document.querySelector('.popup-btn');

var popupContainer = document.querySelector('.popup');

console.log(popupBtn);

function closePopup() {
    popupBtn.innerHTML = "팝업열기";
    popupContainer.style.display = 'none';
}

popupBtn.addEventListener('click', closePopup);