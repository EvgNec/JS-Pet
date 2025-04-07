

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


function handleClick(action) {
    switch(action) {
      case 'save':
        alert('Дані збережено!');
        break;
      case 'edit':
        alert('Редагування...');
        break;
      case 'delete':
        alert('Видалено!');
        break;
      default:
        console.log('Невідома дія');
    }
  }




markById(1,"pt");
