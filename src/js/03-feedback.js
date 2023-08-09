import throttle from 'lodash.throttle';

const inputElement = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const objLocalValue = {};

inputElement.addEventListener("input", throttle(handlerFormInput, 500));
inputElement.addEventListener('submit', onFormSubmit);

populateTextarea();

function handlerFormInput(e) {
    objLocalValue[e.target.name] = e.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objLocalValue));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage !== null) {
        const objValue = JSON.parse(savedMessage);
        console.log(objValue.email);
        console.log(objValue.message);
    }

    inputElement.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const objValue = JSON.parse(savedMessage);

    if (savedMessage) {
        inputElement.message.value = objValue.message;
        inputElement.email.value = objValue.email;
    }
};
