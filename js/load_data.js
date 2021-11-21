"use strict";
//Url-адреса БД с данными элементов из разделов sale и popular

const requestUrlSale = 'https://api.jsonbin.io/b/617bec474a82881d6c6738e4';
const requestUrlPopular = 'https://api.jsonbin.io/b/617bf9a29548541c29ca3d24';

//Функция для отправки запросов к БД

let sendRequest = async function (method, url, body = null) {
  try {
    if (method === 'POST') {
      body = JSON.stringify(body);
    }
    const response = await fetch(url, {
      method: method,
      body: body,
      headers: {
        'Content-Type': 'application/json',
        'secret-key': '$2b$10$zSd0ohZ8a/hueRrKb.vCUOJ9bKrHBi.lzXYggmzIv1SZZzwMrzSla'
      }
    });
    const result = await response.json();
    return result;
  } catch(e) {
    console.error(e);
  }
};

//Загрузка данных элементов из раздела sale

sendRequest('GET', requestUrlSale).then(result => {
  let saleItems = result.slice();
  const saleList = document.querySelector('.sale__list');
  const saleTemplate = document.querySelector('#sale-card');
  const saleReviews = saleTemplate.content.querySelector('.sale__reviews');
  let saleReviewsAmount = saleReviews.querySelector('span');
  let salePhoto = saleTemplate.content.querySelector('.sale__photo');
  let saleName = saleTemplate.content.querySelector('.sale__name');
  let salePriceOld = saleTemplate.content.querySelector('.sale__price--old');
  let salePriceNew = saleTemplate.content.querySelector('.sale__price--new');
  const saleSlider = document.querySelector('.sale__toggles');
  const saleButtons = saleSlider.querySelectorAll('.toggles__button');
  const saleCardsClassName = 'sale__card';

  //Заполнение шаблона данными из JSON-файла и добавление новых элементов раздела sale в DOM

  for (let saleItem of saleItems) {
    salePhoto.src = 'img/' + `${saleItem.photo}`;
    saleReviewsAmount.textContent = `${saleItem.reviews}`;
    saleName.textContent = `${saleItem.name}`;
    salePriceOld.textContent = `${saleItem.oldPrice}`;
    salePriceNew.textContent = `${saleItem.newPrice}`;
    let saleCard = saleTemplate.content.cloneNode(true);
    saleList.appendChild(saleCard);
  }

  //переключение между элементами раздела sale в мобильной версии

  let saleCards = document.querySelectorAll('.sale__card');
  saleCards[0].classList.add('sale__card--current');
  itemToggle(saleCards, saleButtons,  saleCardsClassName);
});

//Загрузка данных элементов из раздела popular

sendRequest('GET', requestUrlPopular).then(result => {
  let popularItems = result.slice();
  const popularList = document.querySelector('.popular__list');
  const popularTemplate = document.querySelector('#popular-card');
  let popularPhoto = popularTemplate.content.querySelector('.popular__photo');
  let popularName = popularTemplate.content.querySelector('.popular__name');
  let popularPrice = popularTemplate.content.querySelector('.popular__price');
  let popularInfo = popularTemplate.content.querySelector('.popular__info');
  const popularSlider = document.querySelector('.popular__toggles');
  const popularButtons = popularSlider.querySelectorAll('.toggles__button');
  const popularCardsClassName = 'popular__card';

  //Заполнение шаблона данными из JSON-файла и добавление новых элементов раздела popular в DOM

  for (let popularItem of popularItems) {
    popularPhoto.src = 'img/' + `${popularItem.photo}`;
    popularName.textContent = `${popularItem.name}`;
    popularInfo.textContent = `${popularItem.info}`;
    popularPrice.textContent = `${popularItem.price}`;
    let popularCard = popularTemplate.content.cloneNode(true);
    popularList.appendChild(popularCard);
  }

  //преключение между элементами раздела popular в мобильной версии

  let popularCards = document.querySelectorAll('.popular__card');
  popularCards[0].classList.add('popular__card--current');
  itemToggle(popularCards, popularButtons,  popularCardsClassName);
});
