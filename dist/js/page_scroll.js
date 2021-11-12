//Пролистывание страницы к нужному разделу

const galleryLink = document.querySelector('#gallery-link');
const gallerySection = document.querySelector('.gallery');
const popularLink = document.querySelector('#popular-link');
const popularSection = document.querySelector('.popular');
const saleLink = document.querySelector('#sale-link');
const saleSection = document.querySelector('.sale');
const newsLink = document.querySelector('#news-link');
const newsSection = document.querySelector('.news');
const featureLink = document.querySelector('#feature-link');
const featureSection = document.querySelector('.feature');
const contactsLink = document.querySelector('#contacts-link');
const contactsSection = document.querySelector('.page-footer');

function scrollPage(link, section) {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    section.scrollIntoView({behavior: "smooth"});
  });
};

scrollPage(galleryLink, gallerySection);
scrollPage(popularLink, popularSection);
scrollPage(saleLink, saleSection);
scrollPage(newsLink, newsSection);
scrollPage(featureLink, featureSection);
scrollPage(contactsLink, contactsSection);
