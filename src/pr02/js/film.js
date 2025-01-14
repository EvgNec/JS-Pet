import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
import { getTrendData } from './api-service.js';


async function test(page) {
  const film = getTrendData(page);
  return film
    .then(data => {
    console.log("🚀 ~ test ~ data:", data.results[0])
      return data;
    })

      .catch(error => 
        console.log(error)
    );
}

function greateMarkup(arr) {
  return arr.map(({ current: { temp_c, condition: { text, icon } }, location: {country, name} })=> `<li>
    <div>
        <h2>${country}</h2>
        <h3>${name}</h3>
        <img src="${icon}" alt="${text}">
    </div>
    <p>${text}</p>
    <p>${temp_c}</p>
</li>`).join('')
}




// function renderRandomFilm() {
//   const data = axios.get(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=249f222afb1002186f4d88b2b5418b55'
//   );
//   return data;
// }

// console.log(renderRandomFilm())
 test(1);

