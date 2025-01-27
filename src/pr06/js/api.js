const cards = document.querySelector('.cards');

let newCard = '';

export function getPet() {
  axios('https://pokeapi.co/api/v2/ability/?limit=20&offset=100')
    .then(res => {
      res.data.results.map(card => {
        return (newCard += `<div class="card" data-id="${card.url}" style="width: 20rem">
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <button class="btn btn-primary btn-inform" data-id="${card.url}">Information</button>
          </div>
        </div>`);
      });
      cards.innerHTML = newCard;
    })

    .catch(error => console.log(error));
}

export function getPetURL(URL) {
  return axios(`${URL}`).then(res => {
    const id = res.data.id;
    return id;
  });
}

export function getPetId(id) {
  return  axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res =>
    {return res.data}
  );
}
