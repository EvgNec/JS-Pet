

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

// Функція очистки


const ptEl = document.querySelector('#button-block button[data-lang="pt"]');
const enEl = document.querySelector('#button-block button[data-lang="en"]');
const ukEl = document.querySelector('#button-block button[data-lang="uk"]');
const nnEl = document.querySelector('#button-block button[data-lang="nn"]');
const btn = document.querySelector('button');
const action2 = btn.dataset;
console.log(action2);
/*
ptEl.addEventListener('click', ()=> console.log("object"));
enEl.addEventListener('click', handleClick("en"));
ukEl.addEventListener('click', handleClick("uk"));
nnEl.addEventListener('click', handleClick("pt"));*/

export function handleClick(action) {
    console.log(action);
    console.log("ction");
    // switch(action) {
    //   case 'pt':
    //     alert('Дані збережено!');
    //     break;
    //   case 'en':
    //     alert('Редагування...');
    //     break;
    //   case 'uk':
    //     alert('Видалено!');
    //     break;
    //   default:
    //     console.log('Невідома дія');
    // }
  }




markById(1,"pt");
