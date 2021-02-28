let modal = document.querySelector('.modal');
let openModalButton = document.querySelector('.feedback__button');
let closeModalButton = modal.querySelector('.modal__button-close');
let modalForm = modal.querySelector('.modal__form');
let inputName = modal.querySelector('.modal__input--name');
let inputMail = modal.querySelector('.modal__input--email');

let isStorageSupport = true;
let storage = '';

try {
  localStorage.getItem("name", inputName.value);
  localStorage.getItem("mail", inputMail.value);
} catch (err) {
  isStorageSupport = false;
}


openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--open');

  if (storage) {
    inputName.value = storage;
    inputMail.focus();
  } else {
    inputName.focus();
  }
});

closeModalButton.addEventListener('click', function () {
  modal.classList.remove('modal--open');
  modal.classList.remove("modal--error");
});

modalForm.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputMail.value) {
    evt.preventDefault();
    modal.classList.remove("modal--error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", inputName.value);
      localStorage.setItem("mail", inputMail.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--open')) {
      evt.preventDefault();
      modal.classList.remove('modal--open');
      modal.classList.remove("modal--error");
    }
  }
});

