
let cardId = 2;
// Функція для пошуку елемента за id
function getById(dataArray, id) {
  return dataArray.find(item => item.id === id);
}

// Функція для відображення елемента за id
function markById(id,ln) {
  fetch('../cards.json')
    .then(response => response.json())
    .then(jsonData => {
      const data = getById(jsonData, id);
      document.getElementById('word').textContent = data[ln].word;

      /*
      document.getElementById('definition').textContent ='Definition: ' + data[ln].word;
      document.getElementById('example').textContent = 'Example: ' + data.word_uk;
      document.getElementById('synonyms').textContent = 'Synonyms: ' + data.word_pr;*/
    })
    .catch(error => console.error('Помилка при завантаженні JSON:', error));
}

const buttonBlock = document.querySelector('#button-block');

buttonBlock.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.lang;
    handleClick(action);
  });
});

function handleClick(action) {
    console.log(action);
    switch(action) {
      case 'pt':
        markById(cardId,action);
        break;
      case 'en':
        markById(cardId,action);
        break;
      case 'uk':
        markById(cardId,action);
        break;
        case 'nn':
            cardId++;
            markById(cardId,"pt");
            break;
      default:
        console.log('Невідома дія');
    }
  }





