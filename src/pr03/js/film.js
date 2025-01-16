import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
import { getTrendData } from './api-service.js';

const refs = {
  formContainer: document.querySelector('.film-container'),
};

// async function  renderRandomFilm(page) {
//   const film = getTrendData(page);
//   return film
//     .then(data => {
//         const film = data.results;
//         refs.formContainer.innerHTML = greateMarkup(film)
//     })
//       .catch(error => 
//           console.log(error));
// }

async function renderRandomFilm(page) {
  try {
    // Викликаємо функцію getTrendData для отримання даних
    const response = await getTrendData(page);
    const film = response.results;

    // Оновлюємо вміст контейнера
      refs.formContainer.innerHTML = greateMarkup(film);
      // Отримуємо елементи
   modalWindow();
  } catch (error) {
    // Обробка помилок
    console.error('Error fetching films:', error);
  }
     
}




function greateMarkup(arr) {  

    return arr.map(({ original_title, title, vote_average, poster_path, overview, release_date }) =>
        `<div class="film_box">
        <img
          src="https://image.tmdb.org/t/p/original/${poster_path}"
          alt="BestFilmWeek"
          loading="lazy"
          class="film_img"
        />
        <div class="film_info">
        <h2 class="film_title">${original_title || title}</h2>
        <div class="film-meta">
        <div class="film_rate">${vote_average}</div>
        <h3 class="film_date">${release_date}</h3>
        </div>
        </div>
        <div class="film_desc">${overview}</div>
        <button type="button" id="openModal" class="film_btn">
          Watch trailer
        </button>
      </div>`)
        .join('');
}

renderRandomFilm(1);



 
function modalWindow() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.querySelector('.film_btn');
    console.log("🚀 ~ modalWindow ~ openModalBtn:", openModalBtn)
    
    const closeModalBtn = document.getElementById('closeModal');

    // Функція для відкриття модального вікна
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Функція для закриття модального вікна
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закриття модального вікна при натисканні за межами контенту
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
