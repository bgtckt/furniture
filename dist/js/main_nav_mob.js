"use strict";
//Открытие и закрытие главного меню в мобильной версии по нажатию кнопки

const toggleButton = document.querySelector('.categories__button--burger');
const mainNav = document.querySelector('.main-nav');
const windowWidth = window.visualViewport.width;
const tabletWidth = 768;
const mobileWidth = 320;

if (windowWidth <= mobileWidth) {
  toggleButton.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav--closed');
  });
};
