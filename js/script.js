// SLIDER

const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slider-item');
const buttonPrevious = document.querySelector('.slider-arrow-previous');
const buttonNext = document.querySelector('.slider-arrow-next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slider-item-current').classList.remove('slider-item-current');
  document.querySelector('.slider-pagination-button-active').classList.remove('slider-pagination-button-active');
};

const changeColor = (theme) => {
  document.body.style.backgroundColor = theme;
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('slider-item-current');
    tab.classList.add('slider-pagination-button-active');
    changeColor(slides[index].dataset.theme);
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slider-item-current');
  sliderTabButtons[counter].classList.add('slider-pagination-button-active');
  changeColor(slides[counter].dataset.theme);
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('slider-item-current');
  sliderTabButtons[counter].classList.add('slider-pagination-button-active');
  changeColor(slides[counter].dataset.theme);
});

// Search

const searchInput = document.querySelector('.user-search-input');
const searchCancelButton = document.querySelector('.search-cancel-button');
searchCancelButton.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
});
