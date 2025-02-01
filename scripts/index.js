const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
/*------------------*/

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileParagraph = document.querySelector(".profile__paragraph");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const modalCloseBtn = modal.querySelector(".modal__close");
const modalNameInput = document.querySelector("#modal-title-input");
const modalParagraphInput = document.querySelector("#modal-paragraph-input");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector(".cards__list");

/*------------------*/

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector(".card__name");
  const cardImage = cardElement.querySelector(".card__image");
  cardName.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  return cardElement;
}

// --------------------
profileEditBtn.addEventListener("click", function () {
  modalNameInput.value = profileName.textContent;
  modalParagraphInput.value = profileParagraph.textContent;
  modal.classList.add("modal_open");
});

modalCloseBtn.addEventListener("click", function () {
  modal.classList.remove("modal_open");
});

modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = modalNameInput.value;
  profileParagraph.textContent = modalParagraphInput.value;
  modal.classList.remove("modal_open");
});

/*------------------*/

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.append(cardElement);
});
