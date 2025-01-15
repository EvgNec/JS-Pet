import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
import { getTrendData } from './api-service.js';

const refs = {
  formContainer: document.querySelector('.film-container'),
};

async function test(page) {
  const film = getTrendData(page);
  return film
    .then(data => {
        console.log("🚀 ~ test ~ data:", data.results[0])
        const film = data.results;
        refs.formContainer.innerHTML = greateMarkup(film)
    })
  

      .catch(error => 
        console.log(error)
    );
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
        <button type="button" id="trailer" class="film_btn">
          Watch trailer
        </button>
      </div>`)
        .join('');
}




// function renderRandomFilm() {
//   const data = axios.get(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=249f222afb1002186f4d88b2b5418b55'
//   );
//   return data;
// }

// console.log(renderRandomFilm())
 test(1);

