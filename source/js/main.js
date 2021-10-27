const saleList = document.querySelector('.sale__list');
const saleTemplate = document.querySelector('#sale-card');
const saleReviews = saleTemplate.content.querySelector('.sale__reviews');
let saleReviewsAmount = saleReviews.querySelector('span');
let salePhoto = saleTemplate.content.querySelector('.sale__photo');
let saleName = saleTemplate.content.querySelector('.sale__name');
let salePriceOld = saleTemplate.content.querySelector('.sale__price--old');
let salePriceNew = saleTemplate.content.querySelector('.sale__price--new');

const saleItems = [
  {name: 'Кресло "Аделаида"', reviews: '1 отзыв', photo: 'sale_chair.png', oldPrice: '5000 руб.', newPrice: '3500 руб.'},
  {name: 'Комод "Берген"', reviews: '2 отзыва', photo: 'sale_dresser.png', oldPrice: '6000 руб.', newPrice: '4500 руб.'},
  {name: 'Диван "Линкольн"', reviews: '4 отзыва', photo: 'sale_sofa.png', oldPrice: '12000 руб.', newPrice: '9000 руб.'},
  {name: 'Полка "Окленд"', reviews: '7 отзывов', photo: 'sale_rack.png', oldPrice: '2000 руб.', newPrice: '1000 руб.'}
];

for (let saleItem of saleItems) {
  salePhoto.src = 'img/' + saleItem.photo;
  saleReviewsAmount.textContent = saleItem.reviews;
  saleName.textContent = saleItem.name;
  salePriceOld.textContent = saleItem.oldPrice;
  salePriceNew.textContent = saleItem.newPrice;
  let saleCard = saleTemplate.content.cloneNode(true);
  saleList.appendChild(saleCard);
}

const popularItems = [
  {name: 'Диван "Аполло"', info: 'Диван прекрасно подойдет для любой комнаты. Легко сочетается с различными стилями декора.', photo: 'popular_sofa.png', price: '40000 руб.'},
  {name: 'Кровать "Бостон"', info: 'Эта аккуратная компактная кровать станет идеальным решением для небольшой комнаты.', photo: 'popular_bed.png', price: '8000 руб.'},
  {name: 'Шкаф "Магеллан"', info: 'Семь полок разного размера, ящик и дверцы - это элегантный ответ на ваши потребности в хранении.', photo: 'popular_wardrobe.png', price: '13000 руб.'},
  {name: 'Стул "Нормандия"', info: 'Гладкий и прочный стул, изготовленный из дерева манго с отделкой из орехового дерева.', photo: 'popular_stool.png', price: '3500 руб.'}
];

const popularList = document.querySelector('.popular__list');
const popularTemplate = document.querySelector('#popular-card');
let popularPhoto = popularTemplate.content.querySelector('.popular__photo');
let popularName = popularTemplate.content.querySelector('.popular__name');
let popularPrice = popularTemplate.content.querySelector('.popular__price');
let popularInfo = popularTemplate.content.querySelector('.popular__info');

for (let popularItem of popularItems) {
  popularPhoto.src = 'img/' + popularItem.photo;
  popularName.textContent = popularItem.name;
  popularInfo.textContent = popularItem.info;
  popularPrice.textContent = popularItem.price;
  let popularCard = popularTemplate.content.cloneNode(true);
  popularList.appendChild(popularCard);
}
