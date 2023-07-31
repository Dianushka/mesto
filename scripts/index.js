
const popup = document.querySelector('.popup');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');

//  элементы формы и поля ввода
let formElement = document.querySelector('.popup__form');
let cardName = document.querySelector('.profile__title');
let cardJob = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');

//открытие и сохранение в переменных изначального значения 
const popupOpen = function () {
    popup.classList.add('popup_opened');
    nameInput.value = cardName.textContent;
    jobInput.value = cardJob.textContent;
}
//закрытие
const closePopup = function () {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    cardName.textContent = nameInput.value;
    cardJob.textContent = jobInput.value;
    closePopup();
}

// обработчики событий
formElement.addEventListener('submit', handleFormSubmit);
popupEditButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', closePopup);

