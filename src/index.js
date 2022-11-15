import './index.css';

import {data} from './utils/config.js';

let summationDetailing = document.querySelector('.summation__detailing');
summationDetailing.textContent = 0;

let addedGoods = new Array();

data.forEach(function (element) {
  const card = document.querySelector('#goods__card' + element.id);

  if (card !== null) {
    const cardTitle = card.querySelector('.goods__card-title');
    const cardPrice = card.querySelector('.goods__card-price');
    const btnAdd = card.querySelector('.goods__card-btn');

    cardTitle.textContent = element.name;
    cardPrice.textContent = Intl.NumberFormat('ru-RU').format(element.price) + ' ' + 'РУБ.';

    btnAdd.addEventListener('click', () => {
      addedGoods.push(element.id);
      summationDetailing.textContent = Intl.NumberFormat('ru-RU').format(count(addedGoods));
      btnAdd.textContent = 'ДОБАВЛЕНО';
      btnAdd.disabled = true;
      btnAdd.classList.add('goods__card-btn_disabled');
    });
  };
});

function count(arr) {
  let sum = 0;
  arr.forEach(function(item) {
    const objectCard = data.find(i => i.id === item);
    const price = objectCard.price;
    sum += price
  })
  return sum;
}