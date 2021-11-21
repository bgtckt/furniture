"use strict";
//Реализация слайдера для переключения между элементами разделов

function itemToggle(items, toggles, itemsClassName) {
  for (let i = 0; i < items.length; i++) {
    toggles[i].addEventListener('click', () => {
      for (let j = 0; j < toggles.length; j++) {
        items[j].classList.remove(itemsClassName + '--current');
        toggles[j].classList.remove('toggles__button--current');
      }
      items[i].classList.add(itemsClassName + '--current');
      toggles[i].classList.add('toggles__button--current');
    });
  };
};

const reviews = document.querySelectorAll('.reviews__block');
const reviewsSlider = document.querySelector('.reviews__toggles');
const reviewsButtons = reviewsSlider.querySelectorAll('.toggles__button');
const reviewsClassName = 'reviews__block';

//переключение между элементами раздела reviews

itemToggle(reviews, reviewsButtons, reviewsClassName);
