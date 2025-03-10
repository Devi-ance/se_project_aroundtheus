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
/*Title and occupation modal related*/
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileParagraph = document.querySelector(".profile__paragraph");

//
const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalForm = document.forms["edit-modal-form"];
const editModalCloseBtn = editProfileModal.querySelector(".modal__close");
const modalNameInput = editProfileModal.querySelector("#modal-name-input");
const modalParagraphInput = editProfileModal.querySelector(
  "#modal-paragraph-input"
);
// ///////////////////////////////////
/*New cards modal related*/
const addProfileModal = document.querySelector("#add-card-modal");
const profileAddButton = document.querySelector(".profile__add-button");
const profileAddCloseBtn = addProfileModal.querySelector(".modal__close");
const addModalForm = document.forms["add-modal-form"];
const addModalTitleInput = addModalForm.querySelector("#modal-title-input");
const addModalUrlInput = addModalForm.querySelector("#modal-url-input");

// ///////////////////////////////////
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector(".cards__list");

// ///////////////////////////////////
const previewModal = document.querySelector("#preview-modal");
const previewCloseBtn = previewModal.querySelector("#preview-close-btn");
const previewImage = previewModal.querySelector(".modal-preview__image");
const previewParagraph = previewModal.querySelector(
  ".modal-preview__paragraph"
);
//===================
function closeModal(modal) {
  modal.classList.remove("modal_open");
}

function openModal(modal) {
  modal.classList.add("modal_open");
}

function renderCard(data, where) {
  const cardElement = getCardElement(data);
  where.prepend(cardElement);
}

function handleProfileEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = modalNameInput.value;
  profileParagraph.textContent = modalParagraphInput.value;
  closeModal(editProfileModal);
}

function handleProfileAddForm(evt) {
  evt.preventDefault();
  const name = addModalTitleInput.value;
  const link = addModalUrlInput.value;
  renderCard({ name, link }, cardList);
  closeModal(addProfileModal);
  evt.target.reset();
}

profileEditBtn.addEventListener("click", function () {
  modalNameInput.value = profileName.textContent;
  modalParagraphInput.value = profileParagraph.textContent;
  openModal(editProfileModal);
});

editModalCloseBtn.addEventListener("click", () => closeModal(editProfileModal));
previewCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

editModalForm.addEventListener("submit", handleProfileEditForm);
addModalForm.addEventListener("submit", handleProfileAddForm);
//===================

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector(".card__name");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewParagraph.textContent = data.name;
    openModal(previewModal);
  });

  cardName.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  return cardElement;
}

initialCards.forEach((data) => renderCard(data, cardList));

/*------------------*/
profileAddButton.addEventListener("click", () => openModal(addProfileModal));
profileAddCloseBtn.addEventListener("click", () => closeModal(addProfileModal));

//===================
