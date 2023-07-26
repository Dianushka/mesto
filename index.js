console.log('cкрипт подключен');
const popup = document.querySelector('.popup');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');
//Навесить слушать по кнопке на картинку карандаш//

const popupToggle = function () {
    popup.classList.toggle('popup_opened');
}
popupEditButton.addEventListener('click', popupToggle);
popup.classList.toggle('popup_opened');

popupCloseButton.addEventListener('click', popupToggle);


//Cделать форму введения данных и их сохранения

let formElement = document.querySelector('.popup__form');
let cardName = document.querySelector('.profile__title');  
let cardJob = document.querySelector('.profile__subtitle');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');


const closePopup = function(){
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    cardName.textContent = nameValue;
    cardJob.textContent = jobValue;
    closePopup();
}

const popupAdd = function() {
    popup.classList.add('popup_opened');
    nameInput.value = cardName.textContent;
    jobInput.value = cardJob.textContent;
}
formElement.addEventListener('submit', handleFormSubmit); 
popupEditButton.addEventListener('click', popupAdd);
popupCloseButton.addEventListener ('click',closePopup);


