let cardId = 0;
const buttonBlock = document.querySelector('#button-block');
const cards = document.querySelector('.card');
// Функція для пошуку елемента за id
// function getById(dataArray, id) {
//   return dataArray.find(item => item.id === id);
// }
// Функція для пошуку елемента
function getBy(dataArray, id) {
    if (id >= dataArray.length) {
        cardId = 0;
        return dataArray[0]; 
      }
 return dataArray[id];
}
// Функція для відображення елемента за id
function markById(id, ln) {
  fetch('../cards.json')
    .then(response => response.json())
    .then(jsonData => {
      const data = getBy(jsonData, id);
      // Очистка вмісту
      cards.innerHTML = '';
      // handlerAdd(`${data[ln].word}`);

      if ((ln === 'pt')) {
        handlerAdd(`'Eu: ' - ${data[ln].Eu}`);
        handlerAdd(`'Tu: ' - ${data[ln].Tu}`);
        handlerAdd(`'Ele: ' - ${data[ln].Ele}`);
        handlerAdd(`'Nos: ' - ${data[ln].Nos}`);
        handlerAdd(`'Eles: ' - ${data[ln].Eles}`);
      }
      else if ((ln === 'tr')) {
        handlerAdd(`'En: ' - ${data.en.word}`);
        handlerAdd(`'Ru: ' - ${data.ru.word}`);
        handlerAdd(`'Ua: ' - ${data.uk.word}`);
      }

      function handlerAdd(str) {
        const markup = `<div class="definition">${str}</div>`;
        cards.insertAdjacentHTML('beforeend', markup);
      }
    })
    .catch(error => console.error('Помилка при завантаженні JSON:', error));
}

buttonBlock.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.lang;
    handleClick(action);
  });
});

function handleClick(action) {
  switch (action) {
    case 'pt':
      markById(cardId, action);
      break;
      case 'tr':
        markById(cardId, action);
        break;      
    case 'en':
      markById(cardId, action);
      break;
    case 'uk':
      markById(cardId, action);
      break;
    case 'nn':
      cardId++;
      markById(cardId, 'pt');
      break;
      case 'pp':
        cardId--;
        if (cardId<0) {
          cardId=0;
        }
        markById(cardId, 'pt');
        break;
    default:
      console.log('Невідома дія');
  }
}
